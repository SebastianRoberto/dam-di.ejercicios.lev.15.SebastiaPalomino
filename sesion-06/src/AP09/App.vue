<script setup>
import { ref, provide } from 'vue';
import Hijo1 from './Hijo1.vue';
import Hijo2 from './Hijo2.vue';

const mensaje = ref('Mensaje desde el padre');
provide('mensaje', mensaje);
</script>

<template>
  <div>
    <Hijo1 />
    <Hijo2 />
  </div>
</template>
