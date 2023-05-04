<script setup lang="ts">
import getJob from '@/service/api'
import DataView from 'primevue/dataview';

const jobs = getJob()

</script>

<template>
    <p v-if="true">
        <!-- Listar jobs -->
        <DataView :value="jobs">
            <template #list="jobItem">
                <div class="col-12">
                    <div class="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
                        <div class="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
                            <div class="flex flex-column align-items-center sm:align-items-start gap-3">
                                <div class="text-2xl font-bold text-900">{{ jobItem.data.name }}</div>
                                <div class="flex align-items-center gap-3">
                                    <span class="flex align-items-center gap-2">
                                        <i class="pi pi-tag"></i>
                                        <span class="font-semibold">{{ jobItem.data.category }}</span>
                                    </span>
                                    <Tag :value="jobItem.data.inventoryStatus" :severity="getSeverity(jobItem.data)"></Tag>
                                </div>
                            </div>
                            <div class="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
                                <span class="text-2xl font-semibold">${{ jobItem.data.price }}</span>
                                <Button icon="pi pi-shopping-cart" rounded :disabled="jobItem.data.inventoryStatus === 'OUTOFSTOCK'"></Button>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </DataView>
    </p>
    <p v-else>
        <!-- Exibir componente de página vazia -->
        <h2>Não existem jobs</h2>
    </p>
</template>

<style>
</style>
