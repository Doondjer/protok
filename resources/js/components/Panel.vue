<template>
    <div class="fullscreen-wrapper">
        <div class="container-xl">
            <div class="page-header d-print-none">
                <div class="row g-2 align-items-center">
                    <div class="col">
                        <h2 class="page-title">Kapaciteti Bagera - Panel</h2>
                    </div>
                    <!-- Page title actions -->
                    <div class="col-12 col-md-auto ms-auto d-print-none">
                        <div class="btn-list">
                            <button type="button" class="btn" @click="toggle">
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
                                v-for="(resource, id) in rodent_list.data"
                                :key="id"
                                :graph_data="graph_data[resource.id]"
                                :update_chart="updateChart"
                                :resource="resource"
                                :current_flow="current_flows[resource.id] ? current_flows[resource.id] : 0"
                                :panel_flows="panel_flows"
                                @show_graph="showExtendedGraph"
                            >
                            </object-resource>
                    </span>
            </div>
        </div>
        <large-chart v-if="show_graph" :rodent="rodents[show_graph]" @close_graph="closeGraph"></large-chart>
    </div>
</template>

<script>

const ObjectResource = () => import('./Object');

const largeChart = () => import('./ExtendedChart');

import { api as fullscreen } from 'vue-fullscreen';

export default {
    props: ['rodent_list', 'panel_flows', 'graph_data', 'current_flows'],

    data() {
        return {
            section: 'polje_b',
            filterType: 'all',
            filterString: '',
            show_graph: null,
            updateChart: [],
            fullscreen: false,
            teleport: true,
        }
    },
    components: {
        ObjectResource,
        largeChart
    },
    methods: {

        showExtendedGraph({station}) {
            this.show_graph = station;
        },

        closeGraph() {
            this.show_graph = null;
        },
        async toggle () {
            await fullscreen.toggle(this.$el.querySelector('.fullscreen-wrapper'), {
                teleport: this.teleport,
                callback: (isFullscreen) => {
                    //this.fullscreen = isFullscreen
                },
            })
            this.fullscreen = fullscreen.isFullscreen
        },
    },
    computed:{
        rodents() {
            return this.rodent_list.data;
        },
    },

    mounted() {

      //  this.loadAllResources();

        Echo.channel('flow')
            .listen('NewFlow', (data) => {
                console.log(data);
                this.updateChart = data
            });
    },
}
</script>

<style>

</style>
