<template>
<div>
    <h3 class="major">结果</h3>
    <table>
        <thead>
            <tr>
                <th>课程</th>
                <th>教师</th>
                <th>综评</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="search_result in search_results" :key="search_result.index" @click="send_to_details(search_result)">
                <td>{{search_result.course_name}}</td>
                <td>{{search_result.course_teacher}}</td>
                <td>{{rate_to_star(search_result.course_rate)}}</td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <td>{{current_page}}/{{max_page}}</td>
                <td></td>
                <td>
                    <a @click="search_prev">上一页</a>
                     /
                    <a @click="search_post">下一页</a>
                </td>
            </tr>
        </tfoot>
    </table>
</div>
</template>


<script>
import lodash from 'loadsh';


export default {
    name: "table_details",
    emits: ['prevPage', 'postPage', 'toDetails'],
    props: ['search_results', 'current_page', 'max_page'],
    methods: {
        jump_to_details(){
            window.location.href = '#details';
        },
        send_to_details(search_result){
            console.log("send data from table_details to article_search");
            this.$emit('toDetails', search_result);
            this.jump_to_details();
        },
        rate_to_star(rate){
            return lodash.trim(lodash.repeat('⭐ ', rate));
        },
        search_prev(){
            this.$emit('prevPage');
        },
        search_post(){
            this.$emit('postPage');
        }
    }
}
</script>
