<template>
  <div class="container">
    <NavBar class="nav_bar" />

    <div class="content">
      <router-view />
    </div>
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

    @include tf-mobile {
      width: 100vw;
      height: auto;
    }
  }
}

.content {
  display: flex;
  flex-direction: column;

  padding: 20px 0;

  margin-left: auto;
  margin-right: auto;

  width: 100%;
  max-width: 600px;

  @include tf-mobile {
    max-width: 100%;

    padding-left: 20px;
    padding-right: 20px;
  }
}
</style>
