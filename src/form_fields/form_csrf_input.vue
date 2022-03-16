<template>
    <input type="hidden" name="csrfmiddlewaretoken" :value="token_value">
</template>

<script>
// pass
import jquery from 'jquery';


export default {
    name: "form_csrf_input",
    data(){
        return {
            token_value: 'init'
        }
    },
    methods: {
        get_token(){
            var that = this;
            jquery.ajax({
                url: 'https://course.shattered.ink/token',
                success(result){
                    var token_value = jquery(result).attr('value');
                    that['token_value'] = token_value;
                },
                error(result){console.log(result)}
            })
        }
    },
    mounted(){
        this.get_token();
    }
}
</script>
