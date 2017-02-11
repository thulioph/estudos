<!--
  Simulando uma requisição ajax que altera os dados da store
  no hook `mounted()`

  o mapState é um método helper que permite acessar o state
  sem a necessidade de utilizar o `this.$store`

  o dispatch utiliza uma action com o nome de `changeUser`
  para realizar o commit.
 -->

<script>
  import CcUsers from './components/users/main.vue';
  import { mapState, mapActions } from 'vuex'

  export default {
    name: 'ManoChaoApp',

    mounted() {
      const payload = {
        name: 'Thulio',
        email: 'thulioph@gmail.com',
        level: 'admin'
      }

      setTimeout(() => {
        this.changeUser(payload);
      }, 3000)
    },

    methods: {
      ...mapActions(['changeUser'])
    },

    components: {
      CcUsers
    },

    computed: {
      ...mapState({
        user: state => {
          const { name, email } = state.user
          return `O usuário logado é ${name} e possui um email ${email}.`
        }
      })
    }
  }
</script>

<template>
  <div>
    <h1>Welcome Vuex 2</h1>
    <h4>{{ user }}</h4>

    <hr>

    <cc-users></cc-users>
  </div>
</template>