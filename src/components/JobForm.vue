<script setup lang="ts">

import Button from 'primevue/button';
import DynamicDialog from 'primevue/dialog'
import InputText from 'primevue/inputtext';
import SelectButton from 'primevue/selectbutton';
import Textarea from 'primevue/textarea'
import Toast from 'primevue/toast';
import { useToast } from 'primevue/usetoast';

import { Dificulty, Job, JobPost, postJob } from '@/service/http/Job';
import router from '@/router';
import { inject, onMounted, reactive } from 'vue';

// const props = defineProps<{ job: JobPost }>();
const data = reactive<JobPost>({
    title: '',
    dificulty: Dificulty.easy,
    description: '',
})

const {job: teste} = inject<{job: JobPost}>("meudado", {job: data})
// onMounted(() => {
//     // const injectedJob: Job = teste?.job || {};
//     console.log(teste);
//     // data.title = injectedJob.title || '';
// })

const toast = useToast()

function adjustData(data: JobPost): JobPost {
    return {
        title: data.title || "Vaga sem titulo",
        dificulty: data.dificulty,
        description: data.description,
    }
}

const onSubmit = (values: Event) => {
    postJob(adjustData(data))
    .then((response) => {
        router.push({path: "/"}).then((response)=>{
            console.log("analise")
            toast.add({ severity: 'info', summary: 'Form Submitted', detail: data.title, life: 3000 });
            })
            .catch((error) => {
                console.log(error)
            })
        })
        .catch((error) => {
            console.log(error)
            toast.add({
                severity: 'error',
                summary: 'Um erro aconteceu',
                detail: 'Tente de novo depois',
            })
        })
}
</script>


<template>
    <div class="card">
        <form>
            <div class="field">
                <label for="title">Título</label>
            </div>
            <div class="field">
                <InputText id="title" type="text" v-model="data.title" />
            </div>
            <div class="field">
                <label for="dificuldade">Dificuldade</label>
                <SelectButton id="dificuldade" v-model="data.dificulty" :options="['easy', 'medium', 'hard']" />
            </div>
            <div class="field">
                <label for="description">Descrição</label>
            </div>
            <div class="field">
                <Textarea id="description" v-model="data.description" auto-resize />
            </div>
            <Button label="Criar" v-on:click="onSubmit" />
        </form>
    </div>
    <Toast />
    <DynamicDialog />
</template>


<style scoped></style>
