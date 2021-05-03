<template>
  <div class="nav_bar">
    <div class="content">
      <div class="top">
        <slot name="top"></slot>
      </div>

      <div class="bottom">
        <slot name="bottom"></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({});
</script>

<style scoped lang="scss">
@import "src/styles/init";

.nav_bar {
  flex: 1 1 auto;

  display: flex;
  flex-direction: column;

  background: #FFFFFF;
  border-radius: 0 10px 10px 0;

  .content {
    flex: 1 1 auto;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    padding: 20px;

    .top, .bottom {
      display: flex;
      flex-direction: column;

      width: 100%;
      @include tf-mobile {
        width: auto;
      }
    }

    @include tf-mobile {
      flex-direction: row;
    }
  }
}
</style>
