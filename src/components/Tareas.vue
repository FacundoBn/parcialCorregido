<template >

  <section class="src-components-info-almacenada">
    <div class="jumbotron mt-3" :style="{'background-color': colorDeFondo}">
      <h2>Listado de tareas</h2>

        <h3 v-if="this.$store.state.formTareas.length == 0" class="alert alert-warning"> Sin tareas!!!</h3>
          <table v-else class="table table-bordered">
        <tr>
          <td>Descripcion</td>
          <td>Nombre</td>
          <td>Mail</td>
          <td>Creada</td>
          <td>Cantidad de Tareas: {{ CantidadTareas }}</td>
        </tr>
        <tr v-for="(dato, index) in this.$store.state.formTareas" :key="index">
          <td>{{ dato.tarea | capitalize }}</td>
          <td>{{ dato.nombre | capitalize}}</td>
          <td>{{ dato.email }}</td>
          <td>{{ dato.fecha | fechaFormat }}</td>
          <td><button class="btn btn-danger" @click="deleteUsuario(dato.id)">DELETE</button></td>
        </tr>
      </table>
      
      
      

    </div>
  </section>

</template>

<script lang="js">

  //import axios from 'axios'
  import { urlPosts } from '../urls'

  export default  {
    name: 'src-components-http',
    props: ['colorDeFondo','titulo'],
    mounted () {
      //OBTENGO LOS DATOS DEL FORMULARIO//
      this.getUrlPost()
    },
    data () {
      return {
        //formContactos: [],
        
      }
    },
    methods: {

      //OBTENGO LOS DATOS DEL FORMULARIO//
      getUrlPost(){
      this.axios.get(urlPosts)
      .then(res =>{this.$store.dispatch('getForm', res.data)
      })
      .catch(error =>{
        console.log('ERROR GET', error)
      })
      },
      
      /* API REST -> DELETE */
      
      deleteUsuario(id) {
        this.axios.delete(urlPosts+id)
        .then( res => {
          console.log(res.data)

          //this.getUsuarios()
          let offset = this.$store.state.formTareas.findIndex(dato => dato.id == id)
          //delete usuarios[offset]
          this.$store.state.formTareas.splice(offset, 1)
        })
        .catch(error => {
          console.log('ERROR DELETE HTTP', error)
        })
      }
     },
    computed: {

    }
}


</script>

<style scoped lang="css">
  

  .jumbotron{
    background-color: rgb(51, 81, 138);
    color: white;
  }
  h3{
    background-color: rgb(185, 6, 6);
    color: white;
  }
  table{
    background-color: rgb(221, 217, 217);
    color: black;
  }
</style>

