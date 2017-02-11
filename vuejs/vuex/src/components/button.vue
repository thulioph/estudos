<!--
  Os helpers do vuex, fazem o mapeamento dos
  elementos da store para os components.
 -->

<script>
  import { mapActions } from 'vuex';

  export default {
    methods: {
      mudarDados() {
        const payload = {
          name: 'Outro nome',
          email: 'Outro email',
          level: 'usuario'
        }

        this.changeUser(payload);
      },

      ...mapActions(['changeUser'])
    },

    computed: {
      hasUser() {
        return this.$store.state.user.name !== '';
      }
    }
  }
</script>

<template>
  <div>
    <button
      :disabled="!hasUser"
      @click="mudarDados">

      Mudar dados do usuário
    </button>
  </div>
</template>