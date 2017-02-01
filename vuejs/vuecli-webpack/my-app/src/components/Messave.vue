<template>
  <div class="box is-info">
    <p>
      <slot></slot>
    </p>
  </div>
</template>

<script>
  export default {}
</script>

<style>
  .box {
    padding: 10px;
    border: 1px solid #C5C5C5;
    background-color: #E3E3E3;
    margin-bottom: 1em;
  }
</style>