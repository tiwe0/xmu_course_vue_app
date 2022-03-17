<template>
    <article>
        <h1 class="primary">课程评鉴</h1>
        <form id="course_comment_form" method="POST" action="https://course.shattered.ink/course/submit/">
            <xm_form_csrf_token></xm_form_csrf_token>
            <xm_form_year></xm_form_year>
            <div class="fields">
                <div class="field half">
                    <xm_form_select :select="select_course_college"></xm_form_select>
                    <xm_form_input ref="course_name" :input="input_course_name"></xm_form_input>
                </div>
                <div class="field half">
                    <xm_form_select :select="select_course_type"></xm_form_select>
                    <xm_form_input ref="course_teacher" :input="input_course_teacher"></xm_form_input>
                </div>
                <div class="field half">
                    <xm_form_select :select="select_course_difficulty"></xm_form_select>
                    <xm_form_select :select="select_course_practical"></xm_form_select>
                </div>
                <div class="field half">
                    <xm_form_select :select="select_course_highscore"></xm_form_select>
                    <xm_form_select :select="select_course_depression"></xm_form_select>
                </div>
                <div class="field half">
                    <xm_form_select :select="select_course_interest"></xm_form_select>
                </div>
                <div class="field half">
                    <xm_form_select :select="select_course_rate"></xm_form_select>
                </div>
                <div class="field">
                    <xm_form_textarea ref="course_comment" :textarea="textarea_course_comment" rows="3" placeholder="如：是否签到，成绩组成等等..."></xm_form_textarea>
                    <xm_form_captcha ref="captcha"></xm_form_captcha>
                </div>
            </div>
            <ul class="actions">
                <li>
                    <xm_form_submit @click="error_clear" form_id="course_comment_form" @error-shake="error_shake" class="primary"></xm_form_submit>
                </li>
                <li>
                    <xm_form_reset></xm_form_reset>
                </li>
            </ul>
        </form>
    </article>
</template>


<script>
import xm_form_select from '../form_fields/form_select.vue';
import xm_form_input from '../form_fields/form_input.vue';
import xm_form_csrf_token from '../form_fields/form_csrf_input.vue';
import xm_form_year from '../form_fields/form_year.vue';
import xm_form_textarea from '../form_fields/form_textarea.vue';
import xm_form_captcha from '../form_fields/form_captcha.vue';
import xm_form_submit from '../form_fields/form_submit.vue';
import xm_form_reset from '../form_fields/form_reset.vue';
import {data_article_comment} from '../data/data_article_comment';

export default {
    name: "artucle_comment",
    components: {
        xm_form_input,
        xm_form_year,
        xm_form_csrf_token,
        xm_form_select,
        xm_form_textarea,
        xm_form_captcha,
        xm_form_submit,
        xm_form_reset
    },
    data(){
        return data_article_comment;
    },
    methods:{
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
