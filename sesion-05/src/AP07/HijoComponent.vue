<script setup>
import { ref, defineEmits } from 'vue';
import NietoComponent from './NietoComponent.vue';

const emit = defineEmits(['actualizar']);
</script>

<template>
  <div>
    <NietoComponent @enviarMensaje="emit('actualizar', $event)" />
  </div>
</template>
