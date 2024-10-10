<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import Tuto01Ap01 from './components/Tuto01Ap01.vue';
import Tuto01Ap02 from './components/Tuto01Ap02.vue';
import Tuto01Ap03 from './components/Tuto01Ap03.vue';
import Tuto01Ap04 from './components/Tuto01Ap04.vue';
import Tuto01Ap05 from './components/Tuto01Ap04.vue';

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
