<script setup lang="ts">
import { defineAsyncComponent, ref } from 'vue';

import DynamicDialog from 'primevue/dynamicdialog'
import Menu from 'primevue/menu';
import Panel from 'primevue/panel';
import Toast from 'primevue/toast';
import { useToast } from 'primevue/usetoast';

import { Job, deleteJob } from '@/service/http/Job';
import { useDialog } from 'primevue/usedialog';

const props = defineProps<{ job: Job }>();

const JobForm = defineAsyncComponent(
    () => import('@/components/teste.vue')
)
const dialog = useDialog()
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
                    const dialogRef = dialog.open(JobForm, {
                        props: {
                            header: `Atualização de vaga ${props.job.id}`,
                            modal: true,
                        },
                        data: {
                            job: props.job,
                            // props: {job: props.job},
                        },
                        onClose: (options) => {
                            const data = options?.data;
                            if (data) {
                                const buttonType = data.buttonType;
                                const summary_and_detail = buttonType ? { summary: 'No Product Selected', detail: `Pressed '${buttonType}' button` } : { summary: 'Product Selected', detail: data.name };

                                toast.add({ severity: 'info', ...summary_and_detail, life: 3000 });
                            }
                        }
                    })
                    toast.add({ severity: 'success', summary: 'Updated', detail: 'Data Updated', life: 3000 });
                }
            },
            {
                label: 'Delete',
                icon: 'pi pi-trash',
                command: deletar,
            }
        ]
    },
])

function deletar() {
    deleteJob(props.job.id)
        .then((response) => {
            console.log("deletou")
            toast.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000 });
        })
        .catch((error) => { console.log(error) })
}
// const atualizar = genericOpenDialogFactory(props.job)
const toggle = (event: Event) => { menu.value.toggle(event); };
</script>

<template>
    <div class="col-8 col-offset-2">
        <Toast />
        <DynamicDialog />
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
