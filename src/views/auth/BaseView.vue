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

    background-color: #f9fafb;

    @include e-mobile {
      margin-left: 15px;
      margin-right: 15px;
    }
  }
</style>
