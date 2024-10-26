<script setup>
import { ref } from 'vue';
import HijoComponent from './HijoComponent.vue';

const mensajeRecibido = ref('');

function manejarEvento(mensaje) {
  mensajeRecibido.value = mensaje;
}
</script>

<template>
  <div>
    <h2>Mensaje recibido: {{ mensajeRecibido }}</h2>
    <HijoComponent @mensajeEmitido="manejarEvento" />
  </div>
</template>
