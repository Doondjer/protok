<template>
    <div class="container-xl">
    <div class="card col-xs-12 mt-4">
        <div class="card-header">
            <form id="connect" class="d-block" role="form">
                <div class="mb-3">
                    <label class="form-label">Aplikacija</label>
                    <select class="form-select"v-model="app">
                        <option v-for="app in apps" :value="app">@{{ app.name }}</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label class="form-label" for="port">Port</label>
                    <input type="text" class="form-control" id="port" name="port" v-model="port" placeholder="Port">
                </div>
                <button v-if="! connected" type="submit" @click.prevent="connect" class="btn btn-primary">
                    Connect
                </button>
                <button v-if="connected" type="submit" @click.prevent="disconnect" class="btn btn-danger">
                    Disconnect
                </button>
                <p id="status" class="text-danger mt-3" v-text="status"></p>
            </form>
        </div>
        <div class="card-body">
            <div v-if="connected && app.statisticsEnabled">
                <h4>Realtime Statistika</h4>
                <div id="statisticsChart" style="width: 100%; height: 250px;"></div>
            </div>
            <h4 class="mt-3">Eventi</h4>
            <table id="events" class="table table-striped table-hover">
                <thead>
                <tr>
                    <th>Type</th>
                    <th>Socket</th>
                    <th>Details</th>
                    <th>Time</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="log in logs.slice().reverse()">
                    <td><span class="badge" :class="getBadgeClass(log)">@{{ log.type }}</span></td>
                    <td>@{{ log.socketId }}</td>
                    <td>@{{ log.details }}</td>
                    <td>@{{ log.time }}</td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
    </div>
</template>

<script>
import ApiService from "../services/ApiService";
import Swal from "sweetalert2";

export default {
    props: ['socket_port', 'socket_apps', 'auth_endpoint', 'api_endpoint', 'csrf_token', 'event_endpoint', 'log_channel_prefix'],
    name: "WebSockets.vue",
    data() {
        return {
            connected: false,
            chart: null,
            pusher: null,
            app: null,
            status: null,
            port: this.socket_port,
            apps: [{
                id: process.env.MIX_PUSHER_APP_ID,
                key: process.env.MIX_PUSHER_APP_KEY,
                secret: process.env.MIX_PUSHER_APP_SECRET,
                name: process.env.MIX_APP_NAME,
                host: window.location.hostname,
                path: null,
                capacity: null,
                clientMessagesEnabled: false,
                statisticsEnabled: true,
                }],
            form: {
                channel: null,
                event: null,
                data: null
            },
            logs: [],
        }

    },
    mounted() {
        this.app = this.apps[0] || null;
    },

    methods: {
        connect() {
            this.pusher = new Pusher(process.env.MIX_PUSHER_APP_KEY, {
                wsHost: this.app.host,
                wsPort: 6001,
                wsPath: this.app.path === null ? '' : this.app.path,
                disableStats: false,
                authEndpoint: this.auth_endpoint,
                auth: {
                    headers: {
                        'X-CSRF-Token': this.csrf_token,
                        'X-App-ID': this.app.id
                    }
                },
                forceTLS: false,
                enabledTransports: ['ws', 'flash']
            });

            this.pusher.connection.bind('state_change', states => {
                this.status = "Stanje kanala je: " + states.current;
            });

            this.pusher.connection.bind('connected', () => {
                this.connected = true;

                this.loadChart();
            });

            this.pusher.connection.bind('disconnected', () => {
                this.connected = false;
                this.logs = [];
            });

            this.pusher.connection.bind('error', event => {
                if (event.error.data.code === 4100) {

                    this.status = "Maximum connection limit exceeded!";

                    this.connected = false;
                    this.logs = [];
                    throw new Error("Over capacity");
                }
            });

            this.subscribeToAllChannels();

            this.subscribeToStatistics();
        },

        disconnect() {
            this.pusher.disconnect();
        },

        loadChart() {
            ApiService.webSocketUrl(`${this.api_endpoint}/${this.app.id}/statistics`)
                .then(({data}) => {

                    let chartData = [
                        {
                            x: data.peak_connections.x,
                            y: data.peak_connections.y,
                            type: 'lines',
                            name: '# Peak Connections'
                        },
                        {
                            x: data.websocket_message_count.x,
                            y: data.websocket_message_count.y,
                            type: 'bar',
                            name: '# Websocket Messages'
                        },
                        {
                            x: data.api_message_count.x,
                            y: data.api_message_count.y,
                            type: 'bar',
                            name: '# API Messages'
                        }
                    ];
                    let layout = {
                        margin: {
                            l: 50,
                            r: 0,
                            b: 50,
                            t: 50,
                            pad: 4
                        }
                    };

                    this.chart = Plotly.newPlot('statisticsChart', chartData, layout);
                });
        },

        subscribeToAllChannels() {
            [
                'disconnection',
                'connection',
                'vacated',
                'occupied',
                'subscribed',
                'client-message',
                'api-message',
            ].forEach(channelName => this.subscribeToChannel(channelName))
        },

        subscribeToChannel(channel) {
            this.pusher.subscribe(`${this.log_channel_prefix}${channel}`)
                .bind('log-message', (data) => {
                    console.log(data);
                    this.logs.push(data);
                });
        },

        subscribeToStatistics() {
            this.pusher.subscribe(`${this.log_channel_prefix}statistics`)
                .bind('statistics-updated', (data) => {
                    console.log(data);
                    var update = {
                        x:  [[data.time], [data.time], [data.time]],
                        y: [[data.peak_connection_count], [data.websocket_message_count], [data.api_message_count]]
                    };

                    Plotly.extendTraces('statisticsChart', update, [0, 1, 2]);
                });
        },

        getBadgeClass(log) {
            if (log.type === 'occupied' || log.type === 'connection') {
                return 'badge-primary';
            }
            if (log.type === 'vacated') {
                return 'badge-warning';
            }
            if (log.type === 'disconnection') {
                return 'badge-error';
            }
            if (log.type === 'api_message') {
                return 'badge-info';
            }
            return 'badge-secondary';
        },
    }
}
</script>

<style scoped>

</style>
