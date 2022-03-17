<template>
    <canvas id="course_chart_1"></canvas>
</template>


<script>
// need:
// course_chart: {
//     course_name,
//     course_difficulty,
//     course_highscore,
//     course_practical
// }

import Chart from 'chart.js/auto';
import {markRaw} from 'vue';


export default {
    name: "chart_radar",
    props: {
        course_chart: {
            course_name: "",
            course_difficulty: 5,
            course_highscore: 5,
            course_practical: 5
        }
    },
    data(){
        var course_chart = this.course_chart;
        var data = {
            labels: ["难度", "公平", "实用", "精力", "有趣"],
            datasets: [{
                label: course_chart.course_name,
                data: [course_chart.course_difficulty, course_chart.course_highscore, course_chart.course_practical, course_chart.course_depression, course_chart.interest],
                fill: true,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgb(255, 99, 132)',
                pointBackgroundColor: 'rgb(255, 99, 132)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgb(255, 99, 132)'
            }]
        };
        var config = {
            type: 'radar',
            data: data,
            options: {
                plugins: {
                    legend: {
                        labels: {
                            color: "white"
                        }
                    }
                },
                scales: {
                    r: {
                        suggestedMin: 0,
                        suggestedMax: 5,
                        grid: {
                            color: "gray"
                        },
                        pointLabels: {
                            color: "white"
                        },
                        ticks: {
                            color: "white",
                            backdropColor: "rgba(255, 255, 255, 0)"
                        }
                    }
                }
            }
        };
        return {
            config: config,
            chart_instance: ''
        };
    },
    methods: {
        render(){
            console.log("render");
            var config = this.config;
            this.chart_instance = markRaw(new Chart(
                this.$el,
                config
            ));
        },
        rerender(){
            this.update();
            this.chart_instance.update();
            console.log("update");
        },
        update(){
            this.update_highscore();
            this.update_course_name();
            this.update_difficulty();
            this.update_practical();
            this.update_depression();
            this.update_interest();
        },
        update_difficulty(){
            this.config.data.datasets[0].data[0] = this.course_chart.course_difficulty;
        },
        update_highscore(){
            this.config.data.datasets[0].data[1] = this.course_chart.course_highscore;
        },
        update_practical(){
            this.config.data.datasets[0].data[2] = this.course_chart.course_practical;
        },
        update_depression(){
            this.config.data.datasets[0].data[3] = this.course_chart.course_depression;
        },
        update_interest(){
            this.config.data.datasets[0].data[4] = this.course_chart.course_interest;
        },
        update_course_name(){
            this.config.data.datasets[0].label = this.course_chart.course_name;
        }
    },
    mounted(){
        console.log("render from mounted");
        this.render();
    },
    watch: {
        course_chart: function(){
            console.log("courses_chart_changed");
            this.rerender();
        }
    }
}
</script>
