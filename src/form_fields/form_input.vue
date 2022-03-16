<template>
    <p>
        <label :for="input.id">{{input.label}}</label>
        <input type="text" :name="input.name" :id="input.id" :class="{xm_shake: need_shake}">
        <span v-if="error">{{error_reason}}</span>
    </p>
</template>


<script>
// pass
// id, label, name
export default {
    name: "form_input",
    props: {
        input: Object
    },
    data() {
        return {
            need_shake: '',
            error_reason: '',
            error: false,
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
