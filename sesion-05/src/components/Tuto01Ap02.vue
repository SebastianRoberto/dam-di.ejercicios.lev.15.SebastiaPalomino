<template>
    <div>
    
    <button @click="mostrarBoton = !mostrarBoton">Mostrar/Ocultar
   Segundo Botón</button>
    <button v-if="mostrarBoton">Segundo Botón</button>
    </div>
   </template>
   <script setup>
   import { ref } from 'vue';
   const mostrarBoton = ref(false);
   </script>