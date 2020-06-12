import Vue from 'vue'

var miMixin = {
    computed: {
        CantidadTareas() {
            console.log('mostrarContadorVuex: Mixin global')
            return this.$store.state.formTareas.length
        }
    }
}

Vue.mixin(miMixin)