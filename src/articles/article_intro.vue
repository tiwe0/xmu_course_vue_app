<template>
    <article>
        <h1>{{intro.title}}</h1>
        <p>{{intro.content}}</p>
    </article>
</template>


<script>
import {intro} from '../data/data_article_intro';
export default {
    name: "article_intro",
    data(){
        return {
            intro: intro
        }
    }
}
</script>
