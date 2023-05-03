<script lang="ts">
import getJob from '@/service/api'

const jobs = getJob()
</script>

<template>
    <h1>Bem vindo!</h1>
    <p v-if="true">
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
