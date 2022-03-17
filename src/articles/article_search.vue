<template>
    <article>
        <h1 class="primary">SEARCHING...</h1>
        <form id="search_form">
            <form_csrf_input></form_csrf_input>
            <div class="fields">
                <div class="field half">
                    <input type="text" name="keywords" placeholder="关键字" maxlength="32" required="" id="id_keywords" v-model="current_keywords">
                </div>
                <div class="field quarter">
                    <p></p>
                </div>
                <div class="field quarter">
                    <ul class="actions">
                        <li>
                            <input class="primary" type="button" value="查阅" @click="get_first_page_data">
                        </li>
                    </ul>
                </div>
            </div>
        </form>
        <table_details @prev-page="get_prev_page_data" @post-page="get_post_page_data" @to-details="send_to_details" :search_results="search_results" :current_page="current_page" :max_page="max_page"></table_details>
    </article>
</template>


<script>
import jquery from 'jquery';
import form_csrf_input from '../form_fields/form_csrf_input.vue';
import table_details from '../table/table_details.vue';
import {test_data_comment_details} from '../data/test_data';

export default {
    name: "article_search",
    emits: ['toDetails'],
    components: {
        form_csrf_input,
        table_details
    },
    data(){
        // result_form 需要在这里初始化, 并在这个组件里修改
        return {
            search_results: test_data_comment_details,
            current_page: 1,
            max_page: 1,
            current_keywords: ''
        }
    },
    methods:{
        refresh_search_results(results){
            this.search_results = results.data;
            this.max_page = results.total_page;
        },
        send_to_details(search_result){
            console.log("send data to main_div");
            this.$emit('toDetails', search_result);
        },
        get_current_page_data(){
            this.fetch_data();
        },
        get_first_page_data(){
            this.current_page = 1;
            this.fetch_data();
        },
        get_prev_page_data(){
            this.current_page = this.current_page > 1 ? this.current_page-1 : 1;
            this.fetch_data();
        },
        get_post_page_data(){
            this.current_page = this.current_page < this.max_page ? this.current_page+1 : this.max_page;
            this.fetch_data();
        },
        fetch_data(){
            jquery.ajax({
                type: "POST",
                url: "https://course.shattered.ink/course/search/",
                data: {
                    'csrfmiddlewaretoken': jquery('#search_form > input').val(),
                    'page': this.current_page,
                    'keywords': this.current_keywords,
                    'items_per_page': 5
                },
                headers: {
                    'hello': 'world'
                },
                dataType: "json",
                encode: "true",
                success: this.refresh_search_results,
                error: function(result){
                    console.log("Ajax error");
                    console.log(result);
                }
            })
        },
    }
}
</script>
