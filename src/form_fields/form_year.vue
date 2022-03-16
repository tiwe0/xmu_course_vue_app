<template>
    <input type="hidden" :value="new Date().getFullYear()" id="course_year" name="course_year">
</template>


<script>
export default {
    name:" form_year",
    methods: {
        current_year(){
            return new Date().getFullYear();
        }
    }
}
</script>
