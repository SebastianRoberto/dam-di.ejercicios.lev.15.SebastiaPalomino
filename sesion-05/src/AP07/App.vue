<script setup>
import { ref } from 'vue';
import HijoComponent from './HijoComponent.vue';

const mensaje = ref('');

function actualizarMensaje(nuevoMensaje) {
  mensaje.value = nuevoMensaje;
}
</script>

<template>
  <div>
    <h2>Mensaje en el padre: {{ mensaje }}</h2>
    <HijoComponent @actualizar="actualizarMensaje" />
  </div>
</template>
