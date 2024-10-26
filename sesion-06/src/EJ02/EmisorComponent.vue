<template>
    <div class="emisor">
      <h2>Emisor</h2>
      <button @click="sendMessage(1)">Enviar a componente 1</button>
      <button @click="sendMessage(2)">Enviar a componente 2</button>
    </div>
  </template>
  
  <script>
  import { eventBus } from './eventBus';
  
  export default {
    setup() {
      const sendMessage = (id) => {
        eventBus.message = `Tienes un mensaje`;
        eventBus.id = id.toString();
      };
      return { sendMessage };
    },
  };
  </script>
  
  <style scoped>
  .emisor {
    margin-bottom: 20px;
  }
  
  button {
    margin-right: 10px;
    padding: 5px 10px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 3px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #45a049;
  }
  </style>
  