<script setup>
import { defineEmits } from 'vue';
import HijoComponent from './HijoComponent.vue';

function mostrarMensaje() {
  console.log('¡Mensaje desde el componente hijo!');
}
</script>

<template>
  <div>
    <HijoComponent :mostrarMensaje="mostrarMensaje" />
  </div>
</template>

