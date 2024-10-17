
<template>
    <div class="lista-tareas">
      <h1>Lista de Tareas</h1>
      
      
      <div v-bind:class="{ visible: mostrarInstrucciones }" class="instrucciones">
        <p>Estas son las instrucciones para gestionar las tareas.</p>
        <button @click="toggleInstrucciones">
          {{ mostrarInstrucciones ? 'Ocultar Instrucciones' : 'Mostrar Instrucciones' }}
        </button>
      </div>
  
     
      <div class="add-task">
        <input type="text" v-model="nuevaTarea" placeholder="Añadir una nueva tarea" />
        <button @click="agregarTarea">Añadir Tarea</button>
      </div>
  
      
      <div class="filtros">
        <label>
          <input type="checkbox" v-model="mostrarCompletadas" />
          Mostrar solo tareas completadas
        </label>
      </div>
  
     
      <ul v-if="tareas.length > 0">
        <li v-for="(tarea, index) in tareasFiltradas" :key="index">
          <input type="checkbox" v-model="tarea.completado" />
          <span :class="{ completada: tarea.completado }">{{ tarea.nombre }}</span>
        </li>
      </ul>
  
      
      <p v-else>No hay tareas disponibles</p>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  
 
  const tareas = ref([]);
  
 
  const nuevaTarea = ref('');
  
  
  const mostrarCompletadas = ref(false);
  

  const mostrarInstrucciones = ref(true);
  

  const agregarTarea = () => {
    if (nuevaTarea.value.trim() !== '') {
      tareas.value.push({
        nombre: nuevaTarea.value,
        completado: false,
      });
      nuevaTarea.value = ''; 
    }
  };
  
  
  const tareasFiltradas = computed(() => {
    return mostrarCompletadas.value
      ? tareas.value.filter(tarea => tarea.completado)
      : tareas.value;
  });
  
  
  const toggleInstrucciones = () => {
    mostrarInstrucciones.value = !mostrarInstrucciones.value;
  };
  </script>
  
  <style scoped>
  .lista-tareas {
    max-width: 600px;
    margin: 0 auto;
    text-align: center;
  }
  
  .add-task {
    margin: 20px 0;
  }
  
  .completada {
    text-decoration: line-through;
  }
  
  .instrucciones {
    background-color: #f0f0f0;
    padding: 10px;
    margin-bottom: 20px;
  }
  
  .instrucciones.visible {
    display: block;
  }
  
  .filtros {
    margin: 10px 0;
  }
  </style>
  