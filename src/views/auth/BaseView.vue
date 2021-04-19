<template>
  <div class="container">
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({});
</script>

<style lang="scss" scoped>
  @import "../../styles/init";

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    height: 100vh;

    background-color: tf-map-get($tf-state-colors, light, base);

    @include tf-mobile {
      padding-right: 15px;
      padding-left: 15px;
    }
  }
</style>
