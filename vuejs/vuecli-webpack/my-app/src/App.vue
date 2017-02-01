<template>
  <div id="app">
    <message>Hello World!</message>

    <message>Hello World again!</message>

    <modal>
      <template slot="header">Qualquer Título</template>

      <template slot="footer">
        <a class="button is-primary">Save changes</a>
        <a class="button">Cancel</a>
      </template>
    </modal>
  </div>
</template>

<script>
  import Message from './components/Messave.vue';
  import Modal from './components/Modal.vue';

  export default {
    name: 'app',

    components: { Message, Modal },

    data () {
      return {
      }
    }
  }
</script>

<style>

</style>

<!--
  O `components` "avisa" ao root component para ouvir
  os componentes filhos.

 -->