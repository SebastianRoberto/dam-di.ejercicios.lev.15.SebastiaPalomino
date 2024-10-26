<script setup>
import { inject } from 'vue';

const mensaje = inject('mensaje');
</script>

<template>
  <div>
    <h2>Hijo 2: {{ mensaje }}</h2>
  </div>
</template>
