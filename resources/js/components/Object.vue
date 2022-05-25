<template>
    <div class="col-sm-12 col-md-6 col-lg-4">
        <div class="card" :title="resource.name">
            <div class="card-status-top" :class="isComunication ? 'bg-success' : 'bg-danger'"></div>
            <div class="pt-2">
                <div class="d-flex px-3">
                    <span class="status-indicator" :class="isComunication ? 'status-green status-indicator-animated' : 'status-red'">
                        <span class="status-indicator-circle"></span>
                        <span class="status-indicator-circle"></span>
                        <span class="status-indicator-circle"></span>
                    </span>
                    <h3 class="ms-2 mt-2 text-nowrap" v-text="resource.name"></h3>
                    <div class="ms-2 mt-1">
                        <a href="#" class="text-info bg-green-lt" @click.prevent="$emit('show_details', {station: resource.id})" aria-label="Prikaži Detalje">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <line x1="12" y1="8" x2="12.01" y2="8"></line>
                                <rect x="4" y="4" width="16" height="16" rx="2"></rect>
                                <polyline points="11 12 12 12 12 16 13 16"></polyline>
                            </svg>
                        </a>
                    </div>
                    <div class="ms-auto mt-2">
                        <a class="btn w-100" @click.prevent="$emit('show_graph', {station: resource.id})" href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-analytics" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <rect x="3" y="4" width="18" height="12" rx="1"></rect>
                                <line x1="7" y1="20" x2="17" y2="20"></line>
                                <line x1="9" y1="16" x2="9" y2="20"></line>
                                <line x1="15" y1="16" x2="15" y2="20"></line>
                                <path d="M8 12l3 -3l2 2l3 -3"></path>
                            </svg>
                            Detaljnije
                        </a>
                    </div>
                </div>
                <chart
                    :update_chart="update_chart"
                    :resource_id="resource.id"
                >
                </chart>
            </div>
            <div class="card-footer pt-1 pb-1" :class="{ 'bg-red-lt': ! isComunication }">
                <div class="d-flex align-items-center">
                    <div class="subheader">Trenutni Protok</div>
                </div>
                <div class="d-flex align-items-center">
                    <div class="col-auto" :class="{'spinner-border text-success': isComunication && statuses[7], 'text-success': isComunication && ! statuses[7], 'text-danger': ! isComunication,}">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-currency-ripple" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <circle cx="7" cy="12" r="3"></circle>
                            <circle cx="17" cy="7" r="3"></circle>
                            <circle cx="17" cy="17" r="3"></circle>
                            <path d="M10 12h3l2 -2.5"></path>
                            <path d="M15 14.5l-2 -2.5"></path>
                        </svg>
                    </div>


                    <div class="h1 mb-0 ms-3 col" v-text="`${current_flow} m3`"></div>
                        <div class="me-auto text-green spinner-border" v-if="loading"></div>
                        <div class="me-auto" v-if=" ! loading && isComunication">
                            <a href="#" @click.prevent="toggleStatuses" class="d-inline-flex align-items-center lh-1" :class="isComunication ? 'text-success' : 'text-danger'">
                               <svg v-if="user && user.is_admin" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <polyline points="7 7 12 12 17 7"></polyline>
                                    <polyline points="7 13 12 18 17 13"></polyline>
                                </svg>
                            </a>
                        </div>
                        <div class="me-auto" v-if=" ! loading && ! first_load && ! isComunication">
                           <svg xmlns="http://www.w3.org/2000/svg" class="" aria-hidden="true" role="img" width="24" height="24" preserveAspectRatio="xMidYMid meet" viewBox="0 0 36 36">
                                <circle cx="18" cy="29.54" r="3" fill="currentColor" class="clr-i-solid clr-i-solid-path-1"/>
                                <path fill="currentColor" d="m29.18 17.71l.11-.17a1.51 1.51 0 0 0-.47-2.1A20.57 20.57 0 0 0 18 12.37c-.56 0-1.11 0-1.65.07l3.21 3.21a17.41 17.41 0 0 1 7.6 2.52a1.49 1.49 0 0 0 2.02-.46Z" class="clr-i-solid clr-i-solid-path-2"/>
                                <path fill="currentColor" d="M32.76 9.38a27.9 27.9 0 0 0-22.58-3.11l2.63 2.63a24.68 24.68 0 0 1 18.29 3.22a1.49 1.49 0 0 0 2-.46l.11-.17a1.51 1.51 0 0 0-.45-2.11Z" class="clr-i-solid clr-i-solid-path-3"/>
                                <path fill="currentColor" d="m3 4.75l3.1 3.1a27.28 27.28 0 0 0-2.92 1.57a1.51 1.51 0 0 0-.48 2.11l.11.17a1.49 1.49 0 0 0 2 .46a24.69 24.69 0 0 1 3.67-1.9l3.14 3.14a20.63 20.63 0 0 0-4.53 2.09a1.51 1.51 0 0 0-.46 2.1l.11.17a1.49 1.49 0 0 0 2 .46A17.46 17.46 0 0 1 14.25 16l3.6 3.6a13.39 13.39 0 0 0-6.79 1.93a1.5 1.5 0 0 0-.46 2.09l.1.16a1.52 1.52 0 0 0 2.06.44a10.2 10.2 0 0 1 9-.7L29 30.75l1.41-1.41l-26-26Z" class="clr-i-solid clr-i-solid-path-4"/>
                                <path fill="none" d="M0 0h36v36H0z"/>
                            </svg>
                        </div>
                </div>
            </div>
            <div v-if="show_status" class="row m-0">
                <div class="col text-center border" :class="{'bg-success-lt border-success': statuses[6]}" v-text="statuses[6] ? '24VDC OK' : '24VDC'"></div>
                <div class="col text-center border" :class="{'bg-success-lt border-success': statuses[7]}" v-text="statuses[7] ? 'Radi' : 'Ne radi'"></div>
                <div class="col text-center border" :class="{'bg-success-lt border-success': statuses[5]}">Kalibracija</div>
                <div class="w-100"></div>
                <div class="col text-center border" :class="{'bg-success-lt border-success': statuses[4]}" v-text="statuses[4] ? 'UPS 24V OK' : 'UPS 24V'"></div>
                <div class="col text-center border" :class="{'bg-danger-lt border-danger': statuses[3]}">Ups Alarm</div>
                <div class="col text-center border" :class="{'bg-success-lt border-success': statuses[2]}" v-text="statuses[2] ? 'UPS Bat OK' : 'UPS Bat'"></div>
            </div>
            </div>
    </div>
</template>

<script>


import chart from './TargetChart';

export default {
    props: ['current_flow', 'resource', 'update_chart', 'statuses', 'user', 'loading'],
    data() {
        return {
            show_graph: false,
            show_status: false,
            first_load: true,
        }
    },
    components: {
        chart,
    },
    methods: {
        toggleStatuses() {
            this.show_status = ! this.show_status;
        }
    },
    computed: {
        isComunication() {
            return this.statuses.reduce((a, b) => a || b, false);
        },
    },
    watch: {
        loading() {
            this.first_load = false;
        }
    }
}
</script>

