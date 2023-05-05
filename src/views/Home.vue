<script setup lang="ts">
import { reactive } from 'vue';

import Button from 'primevue/button'
import Card from 'primevue/card';
import DataView from 'primevue/dataview';

import { Job, getJob } from "@/service/http/Job";
import ListItem from '@/components/dataItems/ListItem.vue';

const state = reactive({ jobs: <Job[]>[] })

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
            <ListItem :job="jobItem.data" />
        </template>
        <template #empty>
            <div class="col-6 col-offset-3">
                <Card>
                    <template #header>
                        <img alt="user header" src="@/assets/logo.svg" />
                    </template>
                    <template #title>Sem trabalhos no momento</template>
                    <template #subtitle>Experimente atualizar depois de um tempo</template>
                </Card>
            </div>
        </template>
    </DataView>
</template>

<style></style>
