<template>
  <div class="modal" :class="{ 'is-active' : isActive }">
    <div class="modal-background"></div>

    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">
          <slot name="header"></slot>
        </p>

        <button class="delete" @click="closeModal"></button>
      </header>

      <section class="modal-card-body">
        <slot>Conteúdo default aqui!</slot>
      </section>

      <footer class="modal-card-foot">
        <slot name="footer">
          <a class="button is-primary">Ok</a>
        </slot>
      </footer>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      closeModal() {
        this.isActive = false;
      }
    },

    data() {
      return {
        isActive: true
      }
    }
  }
</script>

<style></style>