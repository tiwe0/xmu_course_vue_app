<template>
    <p>
        <label :for="textarea.id">{{textarea.label}}</label>
        <textarea :name="textarea.name" :id="textarea.id" :class="{xm_shake: need_shake}" :rows="rows"></textarea>
        <span v-if="error">{{error_reason}}</span>
    </p>
</template>


<script>
// pass
// textarea: id, label, name
export default {
    name: "form_textarea",
    props: {
        textarea: Object,
        rows: String
    },
    data() {
        return {
            need_shake: '',
            error: false,
            error_reason: ''
        }
    },
    methods: {
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
    }
}
</script>
