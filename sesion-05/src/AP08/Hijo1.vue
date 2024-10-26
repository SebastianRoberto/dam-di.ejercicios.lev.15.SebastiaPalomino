<script setup>
import { store } from './store';

function cambiarEstado() {
  store.estado = 'Estado actualizado desde Hijo 1';
}
</script>

<template>
  <div>
    <button @click="cambiarEstado">Actualizar Estado</button>
  </div>
</template>
