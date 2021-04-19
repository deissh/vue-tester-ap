<template>
  <div class="card">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({});
</script>

<style scoped lang="scss">
@import "../../styles/init";

.card {
  padding: 30px;

  background: tf-map-get($tf-state-colors, content-bg, base);
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}
</style>
