<template>
    <div class="modal modal-blur fade show" style="display: block;" aria-modal="true">
        <div class="modal-dialog modal-fullscreen modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header left-close">
                    <h5 class="modal-title" v-text="rodent.name"></h5>
                    <button type="button" @click="$emit('close_graph')" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="d-flex">
                        <div class="ms-auto">
                            <select class="form-select" @change="updateData" v-model="selection">
                                <option class="dropdown-item" :value="1">Danas</option>
                                <option class="dropdown-item" :value="3">Poslednja 3 dana</option>
                                <option class="dropdown-item" :value="7">Poslednjih 7 dana</option>
                            </select>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-8" id="chart">
                            <div v-if="loading" class="empty w-100 chart-wrapper">
                                <div class="spinner-border icon-lg text-green"></div>
                            </div>
                            <div v-else id="chart-timeline">
                                <apexchart type="area" height="350" ref="chart" :options="chartOptions" :series="series"></apexchart>
                            </div>
                        </div>
                        <div class="col-md-4" id="bar_chart">
                            <div v-if="loading" class="empty w-100 chart-wrapper">
                                <div class="spinner-border icon-lg text-green"></div>
                            </div>
                            <div v-else id="bar-chart">
                                <apexchart type="bar" height="350" ref="bar_chart" :options="barChartOptions" :series="barSeries"></apexchart>
                            </div>
                        </div>
                    </div>


                    <FlowTable :rodent="rodent"/>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import apexchart from 'vue-apexcharts'
import apiService from "../services/ApiService";
import Swal from "sweetalert2";
import FlowTable from "./FlowTable";


export default {
    props: ['rodent'],
    data() {
        return {
            loading: true,
            range: {
                start: new Date(new Date().setDate(new Date().getDate()-7)),
                end: new Date(),
            },
            modelConfig: {
                type: 'string',// Uses 'iso' if missing
                mode: "date",
            },
            series: [{
                data: []
            }],
            barSeries: [{
                data: []
            }],
            barChartOptions: {
                chart: {
                    type: 'bar',
                    //   height: 100
                },
                plotOptions: {
                    bar: {
                        horizontal: false,
                        columnWidth: '55%',
                        endingShape: 'rounded',
                        borderRadius: 5,
                        dataLabels: {
                            position: 'top', // bottom/center/top,
                        }
                    },
                },
                dataLabels: {
                    enabled: true,
                    enabledOnSeries: [3],
                    offsetY: -20, // play with this value
                    style: {
                        fontSize: '12px',
                        colors: ["#304758"]
                    },
                    background: {
                        enabled: true,
                        foreColor: '#fff',
                        padding: 6,
                        borderRadius: 2,
                        borderWidth: 1,
                        opacity: 0.3,
                        shadow: true,
                        dropShadow: {
                            enabled: true,
                            top: 1,
                            left: 1,
                            blur: 1,
                            color: '#fff',
                            opacity: 0.45
                        }
                    },
                    formatter: function (value) {
                        return `${value.toFixed(1)} m3`;
                    }
                },
                stroke: {
                    show: true,
                  //  width: 2,
                      width: [2, 2,2,3],
                    curve: 'smooth',
                    colors: ['transparent','transparent','transparent','#cb2027']
                },
                yaxis: {
                    title: {
                        text: 'Iskopano u m3',
                    },
                    labels: {
                        formatter: function (value) {
                            return value.toFixed(0);
                        }
                    }
                },
                fill: {
                    opacity: 1
                },
                tooltip: {

                    shared: true,
                    intersect: false,
                    y: {
                        formatter: function (val) {
                            return val.toFixed(1) + " m3";
                        },
                    }
                },
                title: {
                    text: this.graph_title,
                },
                legend: {
                    show: true,
                    /*  markers: {
                          width: 40,
                          height: 10,
                          radius: 2,
                      },
                   /* position: 'right',
                      offsetY: 0,
                      height: 230,*/
                },
            },
            chartOptions: {
                chart: {
                    id: 'area-datetime',
                    type: 'area',
                    height: 350,
                    zoom: {
                        autoScaleYaxis: true
                    }
                },
                dataLabels: {
                    enabled: false
                },
                title: {
                    text: 'Protok Bagera u m3/h',
                    align: 'left',
                    style: {
                        color: 'rgba(255, 255, 255, 0.7)'
                    },
                },
                markers: {
                    size: 3,
                    style: 'hollow',
                },
                xaxis: {
                    type: 'datetime',
                    min: new Date(new Date().setDate(new Date().getDate()-1)).getTime(),
                    max: new Date().getTime(),
                    tickAmount: 6,
                },
                tooltip: {
                    x: {
                        format: 'dd-MMM-yyyy H:m',
                    },
                    y: {
                        formatter: function (val) {
                            return val + " m3";
                        },
                    }
                },
                fill: {
                    opacity: .16,
                    type: 'solid'
                },
                stroke: {
                    width: 2,
                    lineCap: "round",
                    curve: "smooth",
                },
            },
            selection: 7,
            days_allowed: [1,3,7],
        }
    },
    components: {
        FlowTable,
        apexchart,

    },
    created() {
        this.fetch(this.rodent.id, this.selection);
    },
    methods: {
        fetch(station, days){
            apiService.getStationData(station, days)
                .then(this.refresh)
                .catch(e => {
                    console.dir(e);
                    Swal.fire(e.response.statusText, e.message, 'error');
                });

        },
        refresh({data}) {

            this.loading = false;

            this.series = [
                {
                    name: 'Protok',
                    data: data.data
                },
            ];
console.log(data.series);
            this.barSeries = data.series;
            Vue.nextTick(() => {
                this.$refs.chart.addXaxisAnnotation({
                    x: new Date(new Date().setDate(new Date().getDate()-7)).getTime(),
                    offsetX: 10,
                    label: {
                        text: 'Početak Merenja',
                        offsetX: 30,
                        style: {
                            color: "#fff",
                            background: '#ffa600'
                        }
                    },
                })
                this.$refs.chart.addXaxisAnnotation({
                    x: new Date().getTime(),
                    label: {
                        text: 'Kraj Merenja',
                        borderColor: '#999',
                        style: {
                            color: "#fff",
                            background: '#cb2027'
                        }
                    },
                })
            })
        },
        updateData() {
            let min = new Date(new Date().setDate(new Date().getDate()-1)).getTime();

            if(this.days_allowed.includes(this.selection)) {
                min = new Date(new Date().setDate(new Date().getDate()-this.selection)).getTime();
            }

            this.$refs.chart.zoomX(min, new Date().getTime());
        },
    }
}
</script>
