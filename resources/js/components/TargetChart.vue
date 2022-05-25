<template>
    <div class="bar-container">
        <apexchart ref="chart" :options="chartOptions" :series="series" :height="barHeight"></apexchart>
    </div>
</template>

<script>

import apexchart from 'vue-apexcharts'

export default {
    props: ['update_chart','resource_id'],
    watch: {
        'update_chart.data.graphData': {
            handler:function(newVal) {

                this.$nextTick(() => {
                    this.$refs.chart.updateOptions({
                        series: [{
                            name: "Iskopano",
                            data: this.getSeries(newVal[this.resource_id])
                        }]
                    })
                })
            },
            immediate: true,
            deep: true
        },
        'update_chart.data.panelFlows': {
            handler:function(newVal) {

                let total = 0;

                if (newVal && newVal[this.resource_id]){
                    console.log(newVal[this.resource_id]);
                    newVal[this.resource_id].map(flow =>{
                        console.log(flow);
                        total += flow.total_flow;
                    })
                }

                this.$nextTick(() => {
                    this.$refs.chart.updateOptions({
                        title: {
                            text: `Iskopano od 07:00 : ${total.toFixed(1)} m3`,
                            style: {
                                color: 'rgba(255, 255, 255, 0.7)'
                            },
                        }
                    })
                })
            },
            immediate: true  ,
            deep: true    },

    },
    data() {
        return {
            defaultShifts: [{
                    x: 'I Smena',
                    y: 0
                }, {
                    x: 'II Smena',
                    y: 0
                }, {
                    x: 'III Smena',
                    y: 0
            }],
            chartOptions: {
                colors : [ '#00a651' ],
                chart: { type: 'bar' },
                plotOptions: {
                    bar: {
                        horizontal: false,
                        borderRadius: 10,
                        columnWidth: '65%',
                        endingShape: 'rounded',
                    },
                },
                dataLabels: {
                    enabled: true,
                    formatter: function (val) {
                        return val + "m3";
                    },
                },
                tooltip: {
                    y: {
                        formatter: function (val) {
                            return val + " m3";
                        },
                    }
                }
            },
        }
    },
    computed: {
        series() {
            return [{
                name: "Iskopano",
                data: this.getSeries()
            }]
        },
        barHeight() {

            if(screen.height < 864) {
                return 'auto';
            }

            let i = 20;

            if(screen.height >= 1050) {
                i=30
            }

            return `${(screen.height / 5) - i}px`;
        },
    },
    components: {
        apexchart
    },
    methods: {
        getSeries(graph_data){
            let data = [];

            if(graph_data && graph_data !== 'undefined') {
                let that = this;
                graph_data.map(function (value, key){
                    data.push({
                        x: that.defaultShifts[value.shift-1].x,
                        y: value.shift_flow ? value.shift_flow : 0
                    })
                });
            } else {
                data = this.defaultShifts
            }

            return data;
        }
    }
}
</script>
