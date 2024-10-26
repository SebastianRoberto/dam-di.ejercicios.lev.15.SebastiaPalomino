<script setup>
import { ref } from 'vue';
import HijoComponent from './HijoComponent.vue';

const texto = ref('');
</script>

<template>
  <div>
    <h1>Texto desde el padre: {{ texto }}</h1>
    <HijoComponent v-model="texto" />
  </div>
</template>