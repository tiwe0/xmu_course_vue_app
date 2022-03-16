<template>
    <p>
        <label :for="select.id">{{select.label}}</label>
        <select :name="select.name" :id="select.id">
            <option v-for="option in select.options" :value="option.value" :key="option">{{option.label}}</option>
        </select>
    </p>
</template>


<script>
// pass
// select: id, label, name, options
// options: {label, value}
export default {
    name: "form_select",
    props: {
        select: Object
    }
}
</script>
