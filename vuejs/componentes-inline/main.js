//
// O componente precisa de um `template`
// de acordo com a necessidade, pode-se utilizar o atributo direto no elemento HTML
// `inline-template`
//
Vue.component('progress-view', {
  data() {
    return {
      progressRate: 50
    }
  }
});

new Vue({
  el: '#root'
});