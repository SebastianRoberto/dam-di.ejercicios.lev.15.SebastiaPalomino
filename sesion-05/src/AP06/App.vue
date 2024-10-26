<script setup>
import { ref } from 'vue';
import Hijo1 from './Hijo1.vue';
import Hijo2 from './Hijo2.vue';

const mensaje = ref('');

function recibirMensaje(mensajeRecibido) {
  mensaje.value = mensajeRecibido;
}
</script>

<template>
  <div>
    <Hijo1 @enviarMensaje="recibirMensaje" />
    <Hijo2 :mensaje="mensaje" />
  </div>
</template>
