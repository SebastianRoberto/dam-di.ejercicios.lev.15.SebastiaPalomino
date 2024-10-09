<template>
    <div class="titulo-dinamico">
        <h5>EJ:TituloDinamico:</h5>
      <h1>{{ titulo }}</h1>
    </div>
  </template>
  
  <script setup>
  const titulo = "Titulo Dinamico"
  </script>
  
  <style scoped>
  .titulo-dinamico {
    text-align: center;
    margin: 20px;
  }
  </style>
  