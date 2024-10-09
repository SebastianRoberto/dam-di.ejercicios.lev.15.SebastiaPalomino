<template>
    <header class="cabecera-sesion">
        <h5>EJ:CabeceraSesion</h5>
      <h1>Datos de la sesión</h1>
      <p>Usuario: {{ usuario }}</p>
      <p>Fecha: {{ fecha }}</p>
      <p>A continuacion los ejercicios:</p>
      
    </header>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const usuario = ref('Sebastian Palomino'); 
  const fecha = ref(new Date().toLocaleDateString()); 
  </script>
  
  <style scoped>
  .cabecera-sesion {
    background-color: #4CAF50; 
    color: white; 
    padding: 10px;
    text-align: center;
  }
  
  .cabecera-sesion h1 {
    margin: 0; 
  }
  </style>
  