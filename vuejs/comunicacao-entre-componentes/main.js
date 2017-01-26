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
        this.$emit('applied');
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

  methods: {
    onCouponApplied() {
      this.isCouponApplied = true;
    }
  }
});
