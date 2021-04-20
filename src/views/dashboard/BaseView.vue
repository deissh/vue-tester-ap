<template>
  <div class="container">
    <NavBar class="nav_bar" />

    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavBar from '@/components/nav-bar/NavBar.vue';

export default defineComponent({
  components: { NavBar },
});
</script>

<style lang="scss" scoped>
@import "../../styles/init";

.container {
  background-color: tf-map-get($tf-state-colors, light, base);

  min-height: 100vh;

  .nav_bar {
    position: absolute;

    width: 250px;
    height: 100vh;
  }

  @include tf-mobile {
    padding-right: 15px;
    padding-left: 15px;
  }
}
</style>
