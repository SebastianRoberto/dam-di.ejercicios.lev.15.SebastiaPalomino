<template>
  <div class="app">
    <h1>Sistema de Mensajería</h1>
    <EmisorComponent />
    <ReceptorComponent id="1" />
    <ReceptorComponent id="2" />
  </div>
</template>

<script>
import EmisorComponent from './EJ02/EmisorComponent.vue';
import ReceptorComponent from './EJ02/ReceptorComponent.vue';

export default {
  components: {
    EmisorComponent,
    ReceptorComponent,
  },
};
</script>

<style>
.app {
  font-family: Arial, sans-serif;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  text-align: center;
  color: #333;
}
</style>
