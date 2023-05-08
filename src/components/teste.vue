<script setup lang="ts">
import { inject, onMounted } from 'vue';

const teste = inject("dialogRef")
onMounted(() => {
    console.log(teste)
})
</script>

<template>
    <div>{{ teste }}</div>
</template>

<style></style>