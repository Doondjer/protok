<template>
    <div class="fullscreen-wrapper" :class="{ 'page page-center': fullscreen }">
        <div class="container-xl panel-header">
            <div class="page-header d-print-none">
                <div class="row g-2 align-items-center">
                    <div class="col">
                        <h2 class="page-title">Kapaciteti Bagera - Panel</h2>
                    </div>
                    <!-- Page title actions -->
                    <div class="col-12 col-md-auto ms-auto d-print-none">
                        <div class="btn-list" v-if="showExpand">
                            <button v-if="fullscreen" type="button" class="btn expand-screen" @click="toggle">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrows-minimize" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <polyline points="5 9 9 9 9 5"></polyline>
                                    <line x1="3" y1="3" x2="9" y2="9"></line>
                                    <polyline points="5 15 9 15 9 19"></polyline>
                                    <line x1="3" y1="21" x2="9" y2="15"></line>
                                    <polyline points="19 9 15 9 15 5"></polyline>
                                    <line x1="15" y1="9" x2="21" y2="3"></line>
                                    <polyline points="19 15 15 15 15 19"></polyline>
                                    <line x1="15" y1="15" x2="21" y2="21"></line>
                                </svg>
                                Skupi prikaz
                            </button>
                            <button v-else type="button" class="btn expand-screen" @click="toggle">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icon-tabler-arrows-maximize">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <polyline points="16 4 20 4 20 8"></polyline>
                                    <line x1="14" y1="10" x2="20" y2="4"></line>
                                    <polyline points="8 20 4 20 4 16"></polyline>
                                    <line x1="4" y1="20" x2="10" y2="14"></line>
                                    <polyline points="16 20 20 20 20 16"></polyline>
                                    <line x1="14" y1="14" x2="20" y2="20"></line>
                                    <polyline points="8 4 4 4 4 8"></polyline>
                                    <line x1="4" y1="4" x2="10" y2="10"></line>
                                </svg>
                                Proširi prikaz
                            </button>
 <!--                           <div class="me-3">
                                <div class="input-icon">
                                    <input
                                        class="form-control"
                                        placeholder="filter"
                                    >
                                    <span class="input-icon-addon">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><circle cx="10" cy="10" r="7"></circle><line x1="21" y1="21" x2="15" y2="15"></line></svg>
                                    </span>
                                </div>
                            </div>
                            <div class="mb-3">
                                <select class="form-select">
                                    <option value="polje_b">Polje "B"</option>
                                </select>
                            </div>-->
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="page-body">
            <div class="container-xxl">
                    <span class="row row-cards">
                            <object-resource
                                v-for="(resource, id) in rodent_list"
                                :key="id"
                                :update_chart="updateChart"
                                :resource="resource"
                                :current_flow="currentFlows[resource.id] ? currentFlows[resource.id] : 0"
                                @show_graph="showExtendedGraph"
                                @show_details="showDetails"
                                :statuses="statuses[resource.id] ? statuses[resource.id] : [false,false,false,false,false,false,false,false]"
                            >
                            </object-resource>
                    </span>
            </div>
        </div>
        <large-chart v-if="show_graph" :rodent="rodents[show_graph]" @close_graph="closeGraph"></large-chart>
        <rodent-details v-if="show_details" :rodent="rodents[show_details]" @close_details="closeDetails"></rodent-details>
    </div>
</template>

<script>

import Vue from "vue";

const ObjectResource = () => import('./Object');

const largeChart = () => import('./ExtendedChart');
const rodentDetails = () => import('./RodentDetails')

import { api as fullscreen } from 'vue-fullscreen';

export default {
    props: ['rodent_list', 'panel_flows', 'graph_data', 'current_flows'],
    emits: ['update:current_flows'],
    data() {
        return {
            section: 'polje_b',
            filterType: 'all',
            filterString: '',
            show_graph: null,
            show_details: null,
            updateChart: null,
            fullscreen: false,
            teleport: true,
            currentFlows: {},
            statuses: {},
        }
    },
    components: {
        ObjectResource,
        largeChart,
        rodentDetails,
    },
    methods: {

        showExtendedGraph({station}) {
            console.log(station);
            this.show_graph = station;
        },

        showDetails({station}) {
            this.show_details = station;
        },

        closeGraph() {
            this.show_graph = null;
        },

        closeDetails() {
            this.show_details = null;
        },
        async toggle () {
            await fullscreen.toggle(this.$el.querySelector('.fullscreen-wrapper'), {
                teleport: this.teleport,
                callback: (isFullscreen) => {
                    this.fullscreen = isFullscreen
                },
            })
        },
    },
    computed:{
        rodents() {
            return this.rodent_list;
        },
        showExpand() {
            console.log(screen.height);
            return screen.height >= 864;
        }
    },
    mounted() {

        setTimeout(() => {

            this.updateChart = {
                data: {
                    graphData: this.graph_data,
                    panelFlows: this.panel_flows,
                }
            };

        }, 1);

        Echo.channel('panel')
            .listen('NewFlow', (data) => {
                this.updateChart = data;
            });

        Echo.channel('current_data')
            .listen('NewCurrentFlow', ({data}) => {

                if(data) {
                    Vue.set(this.currentFlows, data.rodent_id, data.current_flow);

                    if (data.status){
                        Vue.set(this.statuses, data.rodent_id, data.status.split('').map(status => {
                            return status === '1';
                        }));
                    }
                }
            });
    },
}
</script>

<style>

</style>
