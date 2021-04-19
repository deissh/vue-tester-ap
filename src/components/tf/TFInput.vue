<template>
  <input
    class="root"
    type="text"
    :value="value"
    :placeholder="placeholder" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    value: { required: true, type: String },
    placeholder: { required: false, type: String },
  },
});
</script>

<style scoped lang="scss">
@import "../../styles/init";

.root {
  height: 40px;

  padding-left: 20px;

  border: unset;
  border-radius: 5px;

  color: tf-map-get($tf-state-colors, brand, base);
  background: tf-map-get($tf-state-colors, light, base);

  &::placeholder {
    color: #9F9F9F;
  }

  &:focus {
    outline: unset;
  }
}
</style>
