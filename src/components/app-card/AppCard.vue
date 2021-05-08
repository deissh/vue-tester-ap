<template>
  <div class="app_card">
    <div :class="{
        content: true,
        'content--horizontal': horizontal
    }" >
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: { horizontal: { type: Boolean } },
});
</script>

<style scoped lang="scss">
.app_card {
  padding: 15px;
  border-radius: 10px;

  background-color: white;

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: space-between;

    height: inherit;
    width: inherit;

    &--horizontal {
      flex-direction: row;
    }
  }
}
</style>
