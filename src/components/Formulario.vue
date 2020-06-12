<template>

  <section class="src-components-formulario">
    <div class="jumbotron mt-3">
    <h1>Ingreso de tareas {{CantidadTareas}}</h1>

        <hr>

    <vue-form :state="formState" @submit.prevent="enviar()">

      <validate tag="div">
        <label for="apellido">Descripcion</label>
        <input 
          type="text"
          id="tarea"
          class="form-control"
          autocomplete="off"
          name="tarea"
          v-model.trim="formData.tarea"
          :minlength="tareaMin"
          :maxlength="tareaMax" 
          
          required
        >
        <field-messages name="tarea" show="$dirty">
          <!-- <div class="alert alert-success my-1">Campo correcto</div> -->
          <div slot="required" class="alert alert-danger my-1">Campo de tareas requerido</div>
           <div slot="minlength" class="alert alert-danger my-1">Los caracteres minimos son {{tareaMin}}</div>
          <div slot="maxlength" class="alert alert-danger my-1">Los caracteres maximos son {{tareaMax}}</div>
        </field-messages>
      </validate>
      <br>

      <validate tag="div">
        <label for="nombre">Nombre</label>
        <input 
          type="text"
          id="nombre"
          class="form-control"
          autocomplete="off"
          name="nombre"
          v-model.trim="formData.nombre"
          required
          no-espacios
          :minlength="nomMin"
          :maxlength="nomMax"
        >
        <field-messages name="nombre" show="$dirty">
          <!-- <div class="alert alert-success my-1">Campo correcto</div> -->
          <div slot="required" class="alert alert-danger my-1">Campo Nombre requerido</div>
          <div slot="no-espacios" class="alert alert-danger my-1">No se permiten espacios intermedios en este campo</div>
          <div slot="minlength" class="alert alert-danger my-1">Los caracteres minimos son {{nomMin}}</div>
          <div slot="maxlength" class="alert alert-danger my-1">Los caracteres maximos son {{nomMax}}</div>
          <div v-if="formData.nombre.length == nomMax" class="alert alert-danger my-1">Máximo de caracteres alcanzados ({{nomMax}})</div>
        </field-messages>


      </validate>
      <br>

      <validate tag="div">
        <label for="email">Email</label>
        <input 
          type="email"
          id="email"
          class="form-control"
          autocomplete="off"
          name="email"
          v-model="formData.email"
          required
        >
        <field-messages name="email" show="$dirty">
          <!-- <div class="alert alert-success my-1">Campo correcto</div> -->
          <div slot="required" class="alert alert-danger my-1">Campo email requerido</div>
          <div slot="email" class="alert alert-danger my-1">Email no válido</div>
        </field-messages>
      </validate>
      <br>


      <!-- <button class="btn btn-success my-4" :disabled="enviando" type="submit">Enviar</button> -->
      <button class="btn btn-success my-4" :disabled="formState.$invalid" type="submit">Enviar</button>

    </vue-form>

    <!-- <pre>{{formState}}</pre> -->


    </div>
  </section>

</template>

<script lang="js">

  import { urlPosts } from '../urls'

  export default {
  name: 'src-components-formulario',
  components: {},
  props: [],
  data () {
    return {
      formState : {},
      formData : this.getInitialData(),
      enviando: false,
      nomMin: 4,
      nomMax: 15,
      tareaMin: 10,
      tareaMax: 50
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {

    getInitialData() {
      return {
        nombre: '',
        tarea: '',
        email: ''
      }
    },
    enviar() {
      this.enviando = true
      console.log(this.formData)
      
      
      // ENVIO DE DATOS CON AXIOS
      
      this.axios.post(urlPosts, this.formData, {
        'content-type' : 'application/json'
      })
      .then( res => {
        console.log(res.data)
        this.formData = this.getInitialData()
        this.formState._reset()
        this.enviando = false
      })
      .catch(error => {
        console.log('ERROR POST', error)
        this.enviando = false
      })
    }
  }
}


</script>

<style scoped lang="css">
.jumbotron {
    background-color:steelblue;
    color: white;
}

hr {
    background-color: white;
}

pre {
    color: white;
}
</style>
