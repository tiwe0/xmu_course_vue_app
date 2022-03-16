<!-- 废弃 -->
<template>
    <input class="primary" type="button" value="查阅" @click="fetch_data">
</template>


<script>
import jquery from 'jquery';


export default {
    name: "form_search",
    emits: ["getData"],
    props: ["current_page", "current_keywords"],
    methods: {
        fetch_data(){
            jquery.ajax({
                type: "POST",
                url: "/course/search/",
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
                success: this.send_data_to_table_details,
                error: function(result){
                    console.log("Ajax error");
                    console.log(result);
                }
            })
        },
        send_data_to_table_details(result){
            this.$emit("getData", result);
        }
    }
}
</script>
