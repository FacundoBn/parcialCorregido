import Vue from 'vue'



Vue.filter('capitalize', function (value) {
    if (!value) return ''
    value = value.toString()
    return value.charAt(0).toUpperCase() + value.slice(1)
  })

Vue.filter('fechaFormat', function(value) {
    let fecha = value.substr(8,2)+"/"+value.substr(5,2)+"/"+value.substr(0,4)+" "+value.substr(11,8)
    return fecha
})