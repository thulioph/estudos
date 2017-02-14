<script>
  import CcButton from '../button.vue';

  export default {
    components: {
      CcButton
    },

    computed: {
      email() {
        return this.$store.state.user.email;
      }
    }
  }
</script>

<template>
  <div>
    Email: {{ email }}

    <cc-button></cc-button>
  </div>
</template>