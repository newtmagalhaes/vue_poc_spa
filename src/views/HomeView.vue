<script lang="ts">
export default {
    name: "HomeView",
    data() {
        return {
            has_jobs: true
        }
    }
}

</script>

<template>
    <h1>Bem vindo!</h1>
    <p v-if="has_jobs">
        <!-- Listar jobs -->
        <!-- <p v-for=""></p> -->
        <h2>Existem jobs</h2>
    </p>
    <p v-else>
        <!-- Exibir componente de página vazia -->
        <h2>Não existem jobs</h2>
    </p>
</template>

<style>
</style>
