<template>
  <div>
 <slot name="heading"></slot>
  <slot></slot>

<div class="memory">
    <slot name="author">
        <h3>Author</h3>
        <p>Buraya bişey gelmemiş</p>
    </slot>
</div>

  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
div {
  border: 1px solid #ccc;
  box-shadow: 1px 1px 2px #666;
  padding: 20px 20px;
  margin-top: 20px;
}
</style>
