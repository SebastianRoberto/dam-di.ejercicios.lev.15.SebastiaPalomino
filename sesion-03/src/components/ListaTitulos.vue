<template>
    <div class="lista-titulos">
        <h5>EJ: ListaTitulos</h5>
      <h2 v-for="(titulo, index) in titulos" :key="index">{{ titulo }}</h2>
    </div>
  </template>
  
  <script setup>
  const titulos = ["Titulo1", "TItulo2", "Titulo3"]; 
  </script>
  
  <style scoped>
  .lista-titulos {
    text-align: center;
    margin: 20px;
  }
  </style>
  