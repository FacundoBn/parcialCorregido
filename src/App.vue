<template>
  <div id="app" class="container">
    <div class="jumbotron mt-3">
      <h1> Parcial NT2 </h1>
      
      

      <!--<Formulario />-->
      <Navbar />
      <!--<Tareas />-->
     <router-view></router-view>
     <h3>Respuesta del Cuestionario: </h3>
     <p>1-D</p>
     <br>
     <p>2-C</p>
     <br>
     <p>3-C</p>
     <br>
     <p>4-B</p>
     <br>
     <p>5-A</p>
     <br>
     <p>6-B</p>
     <br>
     <p>7-D</p>
     <br>
     <p>8-D</p>
     <br>
     <p>9-D</p>
     <br>
     <p>10-B</p>
     <br>
      
    </div>
  </div>
</template>

<script>

import Navbar from "./components/Navbar.vue";
//import Formulario from "./components/Formulario.vue";
//import Tareas from "./components/Tareas.vue";

export default {
  name: "App",
  components: {
    Navbar,
    //Formulario,
    //Tareas,
  },
  data() {
    return {
    }
  }
};
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
