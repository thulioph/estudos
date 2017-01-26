//
// criando uma nova instância do Vue e adicionando ela
// ao window pode-se compartilhar eventos
// aproveitando foi criado uma classe pra abstrair
// o uso do Vue
//

window.Event = new class {
  constructor() {
    this.vue = new Vue();
  }

  fire(event, data = null) {
    this.vue.$emit(event, data);
  }

  listen(event, callback) {
    this.vue.$on(event, callback);
  }
}

//
// Adicionei um "listener" ao evento de (v-on:blur)
// e preciso criar um método dentro do meu componente.
//

Vue.component('coupon', {
  template: `
    <input
      placeholder="Enter your coupon code here"
      @blur="onCouponApplied"
    />`
  ,

  methods: {
    onCouponApplied() {
      Event.fire('applied');
    }
  }
});

//
// A instância do vue sempre fica no final.
//

new Vue({
  el: '#root',

  data: {
    isCouponApplied: false
  },

  created() {
    Event.listen('applied', () => this.isCouponApplied = true);
  }
});
