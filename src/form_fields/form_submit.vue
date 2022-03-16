<template>
    <input type="button" value="提交" @click="submit">
</template>

<script>
import jquery from 'jquery';

export default {
    name: "form_submit",
    props: ['form_id'],
    emits: ['errorShake'],
    methods: {
        submit(){
            var form_id = '#' + this.form_id;
            var that = this;
            jquery.ajax({
                type: "POST",
                url: jquery(form_id).attr("action"),
                data: jquery(form_id).serialize(),
                dataType: "json",
                encode: "true",
                success: function(result){
                    console.log("Ajax success");
                    console.log(result);
                    if(result["code"]==="-1"){
                        that.$emit('errorShake', result["details"]);
                        console.log("emit errorShake");
                    } else {
                        alert('提交成功');
                    }
                },
                error: function(result){
                    console.log("Ajax error");
                    console.log(result);
                    alert('提交失败!');
                }
            });
        }
    }
}
</script>
