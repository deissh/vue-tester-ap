<template>
  <img
    class="app_tumb"
    :src="url"
    :alt="alt">
</template>

<script lang="ts">
import { defineComponent } from 'vue';

// todo: fallback
export default defineComponent({
  props: {
    url: { required: true, type: String },
    alt: { required: false, type: String, default: 'image' },
  },
});
</script>

<style scoped lang="scss">
.app_tumb {
  width: 40px;
  height: 40px;

  border-radius: 100px;
}
</style>
