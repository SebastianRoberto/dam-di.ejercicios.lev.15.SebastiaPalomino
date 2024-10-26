<script setup>
import { defineEmits } from 'vue';

const emit = defineEmits(['enviarMensaje']);

function enviar() {
  emit('enviarMensaje', 'Mensaje desde el nieto');
}
</script>

<template>
  <div>
    <button @click="enviar">Enviar Mensaje al Padre</button>
  </div>
</template>
