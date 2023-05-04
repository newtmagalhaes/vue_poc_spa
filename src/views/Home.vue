<script setup lang="ts">
import { nextTick, reactive, ref } from 'vue';

import Card from 'primevue/card';
import Button from 'primevue/button'
import DataView from 'primevue/dataview';

import { Job } from "@/service/http/Job";
import getJob from "@/service/http/Job";

const state = reactive({jobs: <Job[]>[]})

function atualizar() {
    getJob()
        .then((response) => {
            console.log(state)
            state.jobs = response
        })
        .catch((error) => {
            console.log(error)
            state.jobs = []
        })
}
</script>

<template>
    <DataView :value="state.jobs" :data-key="'id'">
        <template #header>
            <Button label="Atualizar" @click="atualizar" />
        </template>
        <template #list="jobItem">
            <div class="col-12">
                <div class="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
                    <div class="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
                        <div class="flex flex-column align-items-center sm:align-items-start gap-3">
                            <div class="text-2xl font-bold text-900">{{ jobItem.data.title }}</div>
                            <div class="flex align-items-center gap-3">
                                <span class="flex align-items-center gap-2">
                                    <i class="pi pi-tag"></i>
                                    <span class="font-semibold">{{ jobItem.data.dificulty }}</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div> 
                <Card>
                    <template #content>
                        {{ jobItem.data }}
                    </template>
                </Card>
            </div>
        </template>
        <template #empty>
            <h2>Não existem jobs</h2>
        </template>
    </DataView>
</template>

<style></style>
