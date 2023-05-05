<script setup lang="ts">
import { ref } from 'vue';

import Menu from 'primevue/menu';
import Panel from 'primevue/panel';
import Toast from 'primevue/toast';
import { useToast } from 'primevue/usetoast';

import { Job } from '@/service/http/Job';

const props = defineProps<{ job: Job }>();

const toast = useToast();
const menu = ref();
const menuItems = ref([
    {
        label: 'Options',
        items: [
            {
                label: 'Update',
                icon: 'pi pi-refresh',
                command: () => {
                    toast.add({ severity: 'success', summary: 'Updated', detail: 'Data Updated', life: 3000 });
                }
            },
            {
                label: 'Delete',
                icon: 'pi pi-trash',
                command: () => {
                    toast.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000 });
                }
            }
        ]
    },
])

const toggle = (event: Event) => { menu.value.toggle(event); };
</script>

<template>
    <div class="col-8 col-offset-2">
        <Toast />
        <Panel :header="props.job.title" toggleable collapsed>
            <template #icons>
                <button class="p-panel-header-icon p-link mr-2" @click="toggle">
                    <span class="pi pi-cog"></span>
                </button>
                <Menu ref="menu" id="job_menu" :model="menuItems" popup />
            </template>
            <p class="m-0">{{ props.job.description }}</p>
        </Panel>
    </div>
</template>

<style scoped></style>
