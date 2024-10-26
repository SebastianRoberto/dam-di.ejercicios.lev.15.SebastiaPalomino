<script setup>
import { ref } from 'vue';
import HijoComponent from './HijoComponent.vue';

const color = ref('#ffffff');

function cambiarColor() {
  color.value = '#' + Math.floor(Math.random()*16777215).toString(16); // Cambiar color aleatorio
}
</script>

<template>
  <div>
    <button @click="cambiarColor">Cambiar color de fondo</button>
    <HijoComponent :color="color" />
  </div>
</template>
