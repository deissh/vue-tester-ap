<template>
  <div class="container">
    <router-view />
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

export default class BaseView extends Vue {}
</script>

<style lang="scss" scoped>
  @import "../../styles/init";

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    height: 100vh;

    background-color: e-map-get($e-state-colors, dark, inverse);

    @include e-mobile {
      padding-right: 15px;
      padding-left: 15px;
    }
  }
</style>
