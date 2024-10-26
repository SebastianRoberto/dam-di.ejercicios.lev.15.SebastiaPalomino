<script setup>
import { ref } from 'vue';
import HijoComponent from './HijoComponent.vue';

const counter = ref(0);

function updateCounter(value) {
  counter.value = value;
}
</script>

<template>
  <div>
    <h1>Contador desde el padre: {{ counter }}</h1>
    <HijoComponent :count="counter" @increment="updateCounter" />
  </div>
</template>
