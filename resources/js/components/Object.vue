<template>
    <div class="col-sm-12 col-md-6 col-lg-4">
        <div class="card" :title="resource.name">
            <div class="card-status-top" :class="current_flow ? 'bg-success' : 'bg-danger'"></div>
            <div class="card-body px-0 pb-0">
                <div class="d-flex px-3">
                    <span class="status-indicator" :class="current_flow ? 'status-green status-indicator-animated' : 'status-red'">
                        <span class="status-indicator-circle"></span>
                        <span class="status-indicator-circle"></span>
                        <span class="status-indicator-circle"></span>
                    </span>
                    <h3 class="card-title ms-2 mt-2" v-text="resource.name"></h3>
                    <div class="dropdown ms-2 mt-1">
                        <span class="text-info " data-bs-toggle="dropdown" tabindex="-1" aria-label="Prikaži Detalje" aria-expanded="false">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="27" height="27" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm0 708c-22.1 0-40-17.9-40-40s17.9-40 40-40s40 17.9 40 40s-17.9 40-40 40zm62.9-219.5a48.3 48.3 0 0 0-30.9 44.8V620c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8v-21.5c0-23.1 6.7-45.9 19.9-64.9c12.9-18.6 30.9-32.8 52.1-40.9c34-13.1 56-41.6 56-72.7c0-44.1-43.1-80-96-80s-96 35.9-96 80v7.6c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V420c0-39.3 17.2-76 48.4-103.3C430.4 290.4 470 276 512 276s81.6 14.5 111.6 40.7C654.8 344 672 380.7 672 420c0 57.8-38.1 109.8-97.1 132.5z" fill="currentColor"/></svg>
                        </span>
                        <div class="dropdown-menu dropdown-menu-arrow dropdown-menu-end dropdown-menu-card">
                            <div class="card">
                                <div class="card-header">
                                    <div class="card-title" v-text="`Detalji o Bageru ${resource.name}`"></div>
                                </div>
                                <div class="card-body">
                                    <div class="mb-2" style="white-space: nowrap;">
                                        <!-- Download SVG icon from http://tabler-icons.io/i/map-pin -->
                                        <svg xmlns="http://www.w3.org/2000/svg" class="icon me-2 text-muted" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><circle cx="12" cy="11" r="3"></circle><path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path></svg>
                                        Lokacija:
                                        <strong>
                                            <span class="flag flag-country-si"></span>
                                            {{ resource.excavation_field }}
                                        </strong>
                                    </div>
                                    <div class="mb-2" style="white-space: nowrap;">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icon-tabler-currency-ripple"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <circle cx="7" cy="12" r="3"></circle> <circle cx="17" cy="7" r="3"></circle> <circle cx="17" cy="17" r="3"></circle> <path d="M10 12h3l2 -2.5"></path> <path d="M15 14.5l-2 -2.5"></path></svg>
                                        Teorijski Kapacitet: <strong v-text="`${resource.max_capacity ? resource.max_capacity : '---' } m3`"></strong>
                                    </div>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-file-description" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <desc>Download more icon variants from https://tabler-icons.io/i/file-description</desc>
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                            <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
                                            <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>
                                            <path d="M9 17h6"></path>
                                            <path d="M9 13h6"></path>
                                        </svg>
                                        O Bageru: <p v-text="resource.in_short"></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="ms-auto">
                        <a class="btn btn-outline-dark w-100" @click.prevent="$emit('show_graph', {station: resource.id})" href="#">
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
                    :graph_data="graph_data"
                    :graph_title="`Iskopano od 07:00 : ${totalFlow} m3`"
                    :update_chart="update_chart"
                    :resource_id="resource.id"
                >
                </chart>
            </div>
            <div class="card-body">
                <div class="d-flex align-items-center">
                    <div class="subheader">Trenutni Protok</div>
                </div>
                <div class="d-flex align-items-center">
                    <div class="col-auto">
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
                    <div class="me-auto">
<!--                        <span class="text-green d-inline-flex align-items-center lh-1">
                          8% &lt;!&ndash; Download SVG icon from http://tabler-icons.io/i/trending-up &ndash;&gt;
                          <svg xmlns="http://www.w3.org/2000/svg" class="icon ms-1" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><polyline points="3 17 9 11 13 15 21 7"></polyline><polyline points="14 7 21 7 21 14"></polyline></svg>
                        </span>-->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>


import chart from './TargetChart';

export default {
    props: ['panel_flows', 'current_flow', 'resource', 'graph_data', 'update_chart'],
    data() {
        return {
            show_graph: false
        }
    },
    components: {
        chart,
    },
    computed:{
        totalFlow() {
            if(this.update_chart.length && this.update_chart.data.panel_flows[this.resource.id]){
                return this.update_chart.data.panel_flows[this.resource.id][0].total_flow;
            }
            if(this.panel_flows[this.resource.id]){
                return this.panel_flows[this.resource.id][0].total_flow;
            }
            return 0;
        }
    },
}
</script>

