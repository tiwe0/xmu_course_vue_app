<template>
    <label>验证码</label>
    <img :src="image_url" @click="refresh">
    <input type="hidden" name="captcha_0" required :value="key">
    <input type="text" name="captcha_1" :class="{xm_shake: need_shake}" required autocapitalize="off" autocomplete="off" autocorrect="off" spellcheck="false">
    <p v-if="error">{{error_reason}}</p>
</template>


<script>
// pass
import jquery from 'jquery';


export default {
    name: "form_captcha",
    data(){
        return {
            image_url: '',
            key: '',
            need_shake: false,
            error_reason: '',
            error: false
        }
    },
    methods:{
        refresh(){
            var that = this;
            jquery.ajax({
                url: '/captcha/refresh/',
                type: 'GET',
                success: function(result){
                    that['image_url'] = result.image_url;
                    that['key'] = result.key;
                }
            })
        },
        shake(){
            this.toggle_shake();
            setTimeout(this.toggle_shake, 500);
        },
        toggle_shake(){
            this.need_shake = !this.need_shake;
        },
        error_shake(error_reason){
            this.error_reason = error_reason;
            this.error = true;
            this.shake();
        }
    },
    mounted(){
        this.refresh();
    }
}
</script>
