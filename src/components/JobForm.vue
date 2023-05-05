<script setup lang="ts">
import { reactive, ref } from 'vue';

import InputTitle from '@/components/formItems/InputTitle.vue'
import SelectButton from 'primevue/selectbutton';
import Textarea from 'primevue/textarea'
import Toast from 'primevue/toast';
import { useToast } from 'primevue/usetoast';
import { useField, useForm } from 'vee-validate';

import { Dificulty, JobPost } from '@/service/http/Job';

const data = reactive<JobPost>({
    title: "",
    dificulty: Dificulty.easy,
    description: "",
})

const toast = useToast()
const { handleSubmit, isSubmitting, resetForm } = useForm()
const { value, errorMessage } = useField('data', validateFields)

const onSubmit = handleSubmit((values) => {
    toast.add({ severity: 'info', summary: 'Form Submitted', detail: values.title, life: 3000 });
    resetForm();
})

function validateFields(value: JobPost) {
    if (!value) {
        return 'name required';
    }
    return true;
}

</script>


<template>
    <div class="card flex justify-content-center">
        <Toast />
        <form @submit="onSubmit">
            <div class="input-container">
                <InputTitle
                    :name="f"
                />
            </div>
            <div class="input-container">
                <label for="dificuldade">Dificuldade</label>
                <SelectButton id="dificuldade" v-model="value.dificulty" :options="['easy', 'medium', 'hard']" />
            </div>
            <div class="input-container">
                <label for="description">Descrição</label>
                <Textarea id="description" v-model="value.description" auto-resize />
            </div>
            <button type="submit" :disabled="isSubmitting">Criar</button>
        </form>
    </div>
</template>


<style scoped></style>
