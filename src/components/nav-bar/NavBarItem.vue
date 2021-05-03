<template>
  <div class="navbar_item">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({});
</script>

<style scoped>
.navbar_item {
  flex: none;

  order: 0;
  align-self: stretch;
  flex-grow: 0;
  margin: 10px 0px;
}
</style>
