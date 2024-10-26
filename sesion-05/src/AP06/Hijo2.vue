<script setup>
import { defineProps } from 'vue';

const props = defineProps(['mensaje']);
</script>

<template>
  <div>
    <h2>Mensaje recibido: {{ mensaje }}</h2>
  </div>
</template>
