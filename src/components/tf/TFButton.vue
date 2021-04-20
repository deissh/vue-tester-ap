<template>
  <button class="btn"
          :class="staticClass"
          :style="style"
          :disabled="sending || disabled"
          :title="title"
          v-on="on">
    <span v-show="sending"
      class="spinner-border spinner-border-sm"
      role="status"
      aria-hidden="true" />

    <span class="content">
      <slot>Ok</slot>
    </span>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    staticClass: { required: false, type: String },
    style: { required: false, type: String },
    on: { required: false, type: Function },
    disabled: { required: false, type: Boolean, default: false },
    sending: { required: false, type: Boolean, default: false },
    title: { required: false, type: String },
  },
});
</script>

<style scoped lang="scss">
@import "../../styles/init";

.btn {
  flex: 1 1 auto;

  height: 40px;
  padding: 10px 20px;

  background-color: tf-map-get($tf-state-colors, brand, base);
  border: unset;
  border-radius: 5px;

  cursor: pointer;

  .content {
    align-items: center;
    text-align: center;

    color: tf-map-get($tf-state-colors, brand, inverse);
  }

  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
}
</style>
