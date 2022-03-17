<template>
    <article>
        <h2>{{comment_details.course_name}}</h2>
        <form>
            <div class="fields">
                <div class="field half">
                    <hr>
                    <h4>学院: {{comment_details.course_college}}</h4>
                    <h4>类型: {{comment_details.course_type}}</h4>
                    <h4>教师: {{comment_details.course_teacher}}</h4>
                    <h4>年份: {{comment_details.course_year}}</h4>
                    <h4>综合评分: {{rate_to_star(comment_details.course_rate)}}</h4>
                    <hr>
                </div>
                <div class="field half">
                    <chart_radar ref="chart_radar" :course_chart="course_chart"></chart_radar>
                </div>
                <div class="field">
                    <h2>评论</h2>
                    <div class="box">
                        <p><strong>{{comment_details.course_comment}}</strong></p>
                    </div>
                </div>
                <div class="field quarter">
                    <ul class="actions">
                        <li><a class="button">△</a></li>
                        <li><a class="button">▽</a></li>
                    </ul>
                </div>
                <div class="field quarter"></div>
                <div class="field quarter"></div>
                <div class="field quarter">
                    <a class="button primary" href="#search">返回</a>
                </div>
            </div>
        </form>
    </article>
</template>


<script>
// need
// comment_details: {
//     course_name: "数理统计",
//     course_teacher: "李慧慧",
//     course_college: "经济学院",
//     course_type: "专业课",
//     course_year: 2022,
//     course_rate: 5,
//     course_comment: "很专业",
//     course_difficulty: 4,
//     course_highscore: 3,
//     course_practical: 5
// }

import chart_radar from '../chart/chart_radar.vue';
import lodash from 'loadsh';


export default {
    name: "article_details",
    props: {
        comment_details: {
            course_name: "",
            course_teacher: "",
            course_college: "",
            course_type: "",
            course_year: 1975,
            course_rate: 5,
            course_comment: "",
            course_difficulty: 5,
            course_highscore: 5,
            course_practical: 5
        }
    },
    data() {
        return {
            course_chart: {
                course_name: "",
                course_difficulty: 5,
                course_highscore: 5,
                course_practical: 5,
                course_depression: 3,
                course_interest: 4
            }
        }
    },
    components: {
        chart_radar
    },
    methods: {
        rate_to_star(rate){
            return lodash.trim(lodash.repeat('⭐ ', rate));
        },
        update_course_chart(){
            this.course_chart = {
                course_name: this.comment_details.course_name,
                course_difficulty: this.comment_details.course_difficulty,
                course_highscore: this.comment_details.course_highscore,
                course_practical: this.comment_details.course_practical,
                course_depression: this.comment_details.course_depression,
                course_interest: this.comment_details.course_interest
            }
            this.$refs.chart_radar.rerender();
        }
    },
    watch: {
        comment_details: function(){
            console.log("find comment_details changed");
            this.update_course_chart();
        }
    },
    mounted() {
        this.update_course_chart();
    }
}
</script>
