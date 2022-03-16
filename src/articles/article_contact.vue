<template>
    <article>
        <h2 class="primary">联系我们</h2>
        <form method="POST" action="/course/contact/" id="contact_form">
            <xm_form_csrf_input></xm_form_csrf_input>
            <div class="fields">
                <div class="field half">
                    <xm_form_input ref="contact_name" :input="input_contact_name"></xm_form_input>
                </div>
                <div class="field half">
                    <xm_form_input ref="contact_email" :input="input_contact_email"></xm_form_input>
                </div>
                <div class="field">
                    <xm_form_textarea ref="contact_message" :textarea="textarea_contact_message" :rows="4"></xm_form_textarea>
                </div>
                <div class="field">
                    <xm_form_captcha ref="captcha"></xm_form_captcha>
                </div>
            </div>
            <ul class="actions">
                <li>
                    <xm_form_submit @click="error_clear" calss="primary" @error-shake="error_shake" form_id="contact_form"></xm_form_submit>
                </li>
                <li>
                    <xm_form_reset></xm_form_reset>
                </li>
            </ul>
        </form>
    </article>
</template>


<script>
import xm_form_csrf_input from '../form_fields/form_csrf_input.vue';
import xm_form_captcha from '../form_fields/form_captcha.vue';
import xm_form_input from '../form_fields/form_input.vue';
import xm_form_textarea from '../form_fields/form_textarea.vue';
import xm_form_reset from '../form_fields/form_reset.vue';
import xm_form_submit from '../form_fields/form_submit.vue';
import {data_article_contact} from '../data/data_article_contact';


export default {
    name: "article_contact",
    components: {
        xm_form_csrf_input,
        xm_form_captcha,
        xm_form_input,
        xm_form_textarea,
        xm_form_reset,
        xm_form_submit
    },
    data(){
        return data_article_contact;
    },
    methods: {
        error_shake(details){
            var error_component;
            var error_reason;
            for(error_component in details){
                error_reason = details[error_component];
                this.$refs[error_component].error_shake(error_reason);
            }
        },
        error_clear(){
            console.log(this.$refs);
            Object.values(this.$refs).forEach(el=>{
                el.error = false;
            });
        }
    }
}
</script>
