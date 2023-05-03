<script setup lang="ts">
import { ref } from "vue";
import { RouterView } from 'vue-router'

import Card from 'primevue/card';
import TabMenu from 'primevue/tabmenu';

const navbar_items = ref([
  {
    label: 'Home',
    icon: 'pi pi-fw pi-home',
    to: '/'
  },
  {
    label: 'Criar',
    icon: 'pi pi-fw pi-file',
    to: '/form'
  },
]);
</script>

<template>
  <Card>
    <template #header>
      <TabMenu :model="navbar_items" />
    </template>

    <template #content>
      <RouterView />
    </template>

    <template #footer>
      <Card>
        <template #content>Rodapé</template>
      </Card>
    </template>
  </Card>
</template>

<style scoped>
.p-card:deep(.p-card-content) {
  text-align: center;
}
</style>
