<template>
  <input
    class="user_badge"
    :type="type"
    :value="modelValue"
    :placeholder="placeholder"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    type: { required: false, type: String, default: 'text' },
    modelValue: { required: false, type: String },
    placeholder: { required: false, type: String },
  },
});
</script>

<style scoped lang="scss">
@import "../../styles/init";

.user_badge {
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
