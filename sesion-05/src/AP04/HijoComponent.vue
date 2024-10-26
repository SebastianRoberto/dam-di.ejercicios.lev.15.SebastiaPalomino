<script setup>
import { defineProps } from 'vue';

const props = defineProps(['mostrarMensaje']);

function handleClick() {
  props.mostrarMensaje();
}
</script>

<template>
  <div>
    <button @click="handleClick">Mostrar Mensaje</button>
  </div>
</template>
