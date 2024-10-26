<script setup>
import { defineEmits } from 'vue';

const emit = defineEmits(['mensajeEmitido']);

function emitirMensaje() {
  emit('mensajeEmitido', '¡Hola desde el hijo!');
}
</script>

<template>
  <div>
    <button @click="emitirMensaje">Enviar Mensaje</button>
  </div>
</template>
