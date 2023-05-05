<script setup lang="ts">
import { useField, useForm } from 'vee-validate';
import InputText from 'primevue/inputtext';
import { toRef } from 'vue';

const props = defineProps({
    name: {
        type: String,
        required: true,
    },
    label: {
        type: String,
    },
    type: {
        type: String,
        default: "text",
    },
    placeholder: {
        type: String,
    },
    id: {
        type: String,
    },
    disabled: {
        type: Boolean,
    },
    labelClass: {
        type: String,
    },
    maxLength: {
        type: String,
    },
})

const { errorMessage, value } = useField<string>(toRef(props, "name"));
</script>

<template>
    <label for="titulo">Nome da vaga</label>
    <InputText id="titulo" v-model="value" class="p-inputtext-lg" />
</template>

<style scoped></style>