import Vue from  'vue'
import VueRouter from 'vue-router'


import Formulario from "./components/Formulario.vue";
import Tareas from "./components/Tareas.vue";


Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes: [
    {path: '/Formulario', component: Formulario},
    {path: '/Tareas', component: Tareas}
    ]
    })