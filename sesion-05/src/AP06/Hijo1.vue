<script setup>
import { defineEmits } from 'vue';

const emit = defineEmits(['enviarMensaje']);

function enviar() {
  emit('enviarMensaje', 'Mensaje desde Hijo 1');
}
</script>

<template>
  <div>
    <button @click="enviar">Enviar Mensaje</button>
  </div>
</template>
