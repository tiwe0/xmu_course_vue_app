<template>
    <div id="main">

            <!-- Intro -->
            <article_intro id="intro"></article_intro>

            <!-- Comment -->
            <article_comment id="comment"></article_comment>

            <!-- Search -->
            <article_search @to-details="refresh_details" id="search"></article_search>

            <!-- Contact -->
            <article_contact id="contact"></article_contact>

            <!-- Details -->
            <article_details :comment_details="comment_details" id="details"></article_details>


    </div>
</template>


<script>
import article_intro from '../articles/article_intro.vue';
import article_comment from '../articles/article_comment.vue';
import article_contact from '../articles/article_contact.vue';
import article_search from '../articles/article_search.vue';
import article_details from '../articles/article_details.vue';

export default {
    name: "xm_main_div",
    components: {
        article_comment,
        article_intro,
        article_contact,
        article_search,
        article_details
    },
    data(){
        return {
            comment_details: {}
        }
    },
    methods: {
        refresh_details(search_result){
            console.log("refresh self comment_details");
            this.comment_details = search_result;
        }
    }
}
</script>
