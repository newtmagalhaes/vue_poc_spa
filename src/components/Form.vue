<script lang="ts">
import Submit from "./formItems/Submit.vue"
import Text from "./formItems/Text.vue"

export default {
    name: "Form",
    components: {
        Submit,
        Text,
    },
}
</script>

<template>
    <Text />
    <br>
    <Submit />
</template>

<style>
</style>