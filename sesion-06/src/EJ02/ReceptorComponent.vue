<template>
    <div class="receptor">
      <h2>Receptor {{ id }}</h2>
      <p>{{ displayMessage }}</p>
    </div>
  </template>
  
  <script>
  import { ref, watch } from 'vue';
  import { eventBus } from './eventBus';
  
  export default {
    props: ['id'],
    setup(props) {
      const displayMessage = ref('No hay mensajes');
  
      watch(() => eventBus.message, () => {
        if (eventBus.id === props.id) {
          displayMessage.value = eventBus.message;
        }
      });
  
      return { displayMessage };
    },
  };
  </script>
  
  <style scoped>
  .receptor {
    border: 1px solid #ccc;
    padding: 10px;
    margin: 10px 0;
    border-radius: 5px;
  }
  </style>
  