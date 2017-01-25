// props: [] é um array de propriedades
// que o componente pode receber
//
// para alterar o estado do componente
// você atribui um data pra ele e altera o data do elemento
//
// o componente também pode possuir methods
// que são os @event que rolar dentro do elemento

Vue.component('my-message', {
  props: ['title', 'body'],

  data() {
    return {
      isVisible: true
    }
  },

  template:`
    <article class="message" v-show="isVisible">
      <div class="message-header">
        <p>{{ title }}</p>

        <button
          type="button"
          @click="hideContent"
          class="delete">

          x
        </button>
      </div>

      <div class="message-body">
        {{ body }}
      </div>
    </article>
  `,

  methods: {
    hideContent() {
      this.isVisible = false;
    }
  }
});


// O <slot></slot> permite que realize o bind
// de tudo que for digitado dentro da tag do component
//
// para realizar a comunicacão entre os componentes
// utiliza o $emit('evento') e quem tiver
// ouvindo esse evento (@evento) sofre alguma coisa
Vue.component('my-modal', {
  template: `
    <div class="modal is-active">
      <div class="modal-background"></div>

      <div class="modal-content">
        <div class="box">
          <slot></slot>
        </div>
      </div>

      <button
        class="modal-close"
        @click="clickToClose()">
      </button>
    </div>
  `,

  methods: {
    clickToClose() {
      this.$emit('close')
    }
  }
});


// Para alterar os dados do elemento
// atribui-se a ele um data e controla o estado a partir daí
//
new Vue({
  el: '#root',

  data: {
    isDisplayed: false
  },

  methods: {
    toggleModal() {
      return this.isDisplayed = true;
    },

    closeModal() {
      return this.isDisplayed = false;
    }
  }
});