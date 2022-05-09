<template>
    <div>
        <div class="container-xl">
            <div class="page-header d-print-none">
                <div class="row g-2 align-items-center">
                    <div class="col">
                        <h2 class="page-title">Kapaciteti Bagera - Panel</h2>
                    </div>
                    <!-- Page title actions -->
                    <div class="col-12 col-md-auto ms-auto d-print-none">
                        <div class="btn-list">
                            <div class="me-3">
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="page-body">
            <div class="container-xl">
                    <span class="row row-cards">
                            <object-resource
                                v-for="(resource, id) in rodent_list.data"
                                :key="id"
                                :graph_data="graph_data[resource.id]"
                                :update_chart="updateChart"
                                :resource="resource"
                                :current_flow="current_flows[resource.id]"
                                :total_flow="panel_flows[resource.id] && panel_flows[resource.id][0] ? panel_flows[resource.id][0].total_flow : 0"
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

export default {
    props: ['rodent_list', 'panel_flows', 'graph_data', 'current_flows'],

    data() {
        return {
            section: 'polje_b',
            filterType: 'all',
            filterString: '',
            show_graph: null,
            updateChart: [],
        }
    },
    components: {
        ObjectResource,
        largeChart
    },
    methods: {
        loadAllResources() {

           // this.refreshAll();
        },

        showExtendedGraph({station}) {
            this.show_graph = station;
        },

        closeGraph() {
            this.show_graph = null;
        },
    },
    computed:{
        rodents() {
            return this.rodent_list.data;
        }
    },

    mounted() {

        this.loadAllResources();

        Echo.channel('flow')
            .listen('NewFlow', (data) => { this.updateChart = data});
    },
}
</script>

<style>

</style>
