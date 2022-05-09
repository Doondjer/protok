<template>
    <div >
        <apexchart ref="chart" :options="chartOptions" :series="series"></apexchart>
    </div>
</template>

<script>

import apexchart from 'vue-apexcharts'

export default {
    props: ['graph_data', 'graph_title', 'update_chart','resource_id'],
    watch: {
        'update_chart.data.graphData': {
            handler:function(newVal) {

                if (newVal && newVal[this.resource_id]) {
                    this.$refs.chart.updateOptions({series: [{
                            name: "Iskopano",
                            data: this.getSeries(newVal[this.resource_id])
                        }]})
                }

            },
            deep:true    },

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
                chart: {
                    type: 'bar',
                 //   height: 100
                },
                plotOptions: {
                    bar: {
                        horizontal: false,
                        borderRadius: 10,
                        columnWidth: '65%',
                        endingShape: 'rounded'
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
                },
                title: {
                    text: this.graph_title,
                }
            },
        }
    },
    computed: {
        series() {
            return [{
                name: "Iskopano",
                data: this.getSeries(this.graph_data)
            }];
        }
    },
    components: {
        apexchart
    },
    methods: {
        getSeries(graph_data){
            let data = [];

            if(graph_data && graph_data !== 'undefined') {
                let that = this;console.log(graph_data);
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
