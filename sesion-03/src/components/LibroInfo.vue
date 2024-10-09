<script setup> 

const libro = {

titulo: "Interfaces",
autor: "Profesor",
año: 2024,
    }

</script>


<template>
 <div>
  <h5>EJ:LibroInfo</h5>
    <h2>Libro</h2>
    <p><strong>Título:</strong> {{ libro.titulo }}</p>
    <p><strong>Autor:</strong> {{ libro.autor }}</p>
    <p><strong>Año de Publicación:</strong> {{ libro.año }}</p>
  </div>
 
</template>


<style scope>

</style>