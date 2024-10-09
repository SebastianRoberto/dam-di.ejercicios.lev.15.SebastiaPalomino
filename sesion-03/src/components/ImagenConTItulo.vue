<template>
    <div class="imagen-con-titulo">
      <img :src="imagenUrl" alt="Imagen relacionada" />
      <h2>{{ titulo }}</h2>
    </div>
  </template>
  
  <script setup>
  const imagenUrl = 'https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/9db5/live/48fd9010-c1c1-11ee-9519-97453607d43e.jpg.webp';
  const titulo = 'Imagen de un arbol'; 
  </script>
  
  <style scoped>
  .imagen-con-titulo {
    text-align: center;
    margin: 20px;
  }
  
  .imagen-con-titulo img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
  }
  </style>
  