<template>
    <div class="imagen-estatica">
        <h5>EJ:ImagenEstatica</h5>
      <h2>Imagen Local</h2>
      <img :src="imagenLocal" alt="Imagen Local" />
  
      <h2>Imagen Externa</h2>
      <img :src="imagenExterna" alt="Imagen Externa" />
    </div>
  </template>
  
  <script>
import imagenLocal from '@/assets/imagen-local.png'; 
export default {
  name: 'ImagenEstatica',
  data() {
    return {
      imagenLocal: imagenLocal,
      imagenExterna: 'https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/9db5/live/48fd9010-c1c1-11ee-9519-97453607d43e.jpg.webp'
    };
  }
};
</script>

  
  <style scoped>
  .imagen-estatica {
    text-align: center;
    margin: 20px;
  }
  
  .imagen-estatica img {
    max-width: 100%;
    height: auto;
    margin-bottom: 20px;
    border: 2px solid #ccc;
    border-radius: 8px;
  }
  
  .imagen-estatica h2 {
    margin-bottom: 10px;
    color: #333;
  }
  </style>
  