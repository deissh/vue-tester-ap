<template>
  <AppCard horizontal class="subject_list_item">
    <div class="start">

      <AppTumb
        class="tumb"
        url="https://avatars.redforester.com/?name=опf" />

      <div class="title">
        <span>Основы программирования</span>
        <span class="desc">1 семестр</span>
      </div>

    </div>

    <div class="end"></div>
  </AppCard>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import AppTumb from '@/components/app-tumb/AppTumb.vue';
import AppCard from '@/components/app-card/AppCard.vue';

export default defineComponent({
  components: { AppTumb, AppCard },
});
</script>

<style lang="scss" scoped>
.subject_list_item {
  &:hover {
    cursor: pointer;

    transition: filter 0.1s ease-in-out;
    filter: drop-shadow(0px 0px 15px rgba(0, 0, 0, 0.1));
  }

  .tumb {
    border-radius: 10px;
    margin-right: 15px;
  }

  .title {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    color: #2D2D2D;
    font-size: 16px;

    .desc {
      color: #808080;
      font-size: 14px;
    }
  }

  .start {
    flex: 1 1 auto;
  }
  .start, .end {
    display: flex;
    flex-direction: row;
  }
}
</style>
