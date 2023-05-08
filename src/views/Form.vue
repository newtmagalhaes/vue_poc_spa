<script setup lang="ts">
import JobForm from '@/components/JobForm.vue';
import { Dificulty, JobPost } from '@/service/http/Job';
import { reactive } from 'vue';

const data = reactive<JobPost>({
    title: '',
    dificulty: Dificulty.easy,
    description: '',
})

</script>

<template>
    <JobForm :job="data"/>
</template>
