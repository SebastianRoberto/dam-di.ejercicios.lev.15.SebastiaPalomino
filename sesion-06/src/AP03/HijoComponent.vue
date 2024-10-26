<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps(['modelValue']);
const emit = defineEmits(['update:modelValue']);

function updateText(event) {
  emit('update:modelValue', event.target.value);
}
</script>

<template>
  <div>
    <input type="text" :value="modelValue" @input="updateText" />
  </div>
</template>
