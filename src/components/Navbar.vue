<template>
  <section class="src-components-navbar">

    <!--
    <p>-------- ROUTER PUSH --------</p>
    <button class="btn btn-primary mr-2" @click="ir()">Tareas</button>
    <br><br>
  
    <p>------ ROUTER HISTORY -------</p>
    <button class="btn btn-primary mr-2" @click="back()">BACK</button>
    <button class="btn btn-primary mr-2" @click="go(2)">GO(2)</button>
    <button class="btn btn-primary mr-2" @click="forward()">FORWARD</button>
    <br><br>
-->

    <nav class="navbar navbar-expand-lg navbar-dark bg-info">
    
       <router-link to="/"> 
        <a class="navbar-brand" href="#">Respuestas</a>
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          
            <li class="nav-item">
            <router-link to="/formulario" tag="li"> 
              <a class="nav-link" href="#">Formulario</a>
            </router-link>
          </li>

          <li class="nav-item">
            <router-link to="/Tareas" tag="li"> 
              <a class="nav-link" href="#">Tareas</a>
            </router-link>
          </li>
          
        </ul>
      </div>
    </nav>
  </section>
</template>

<script lang="js">

  export default  {
    name: 'src-components-navbar',
    props: ['info'],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {
//      ir() {      
//        this.$router.push({
//          path: '/Tareas',
//          name: 'info',
//        })
//      },
//      go(num) {
//        this.$router.go(num)
//      },
//      forward() {
//        this.$router.forward()
//      },
//      back() {
//        this.$router.back()
//      }*
    },
    computed: {

    }
}


</script>

<style scoped lang="css">

</style>
