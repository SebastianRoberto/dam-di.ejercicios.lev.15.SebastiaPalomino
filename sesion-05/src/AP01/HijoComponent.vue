<script setup>
import { ref, defineEmits } from 'vue';

const count = ref(0);
const emit = defineEmits(['increment']);

function increment() {
  count.value++;
  emit('increment', count.value);
}
</script>

<template>
  <div>
    <p>Contador desde el hijo: {{ count }}</p>
    <button @click="increment">Incrementar</button>
  </div>
</template>