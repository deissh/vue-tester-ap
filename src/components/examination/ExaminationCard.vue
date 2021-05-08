<template>
  <AppCard class="examination_card">
    <div class="content">
      <div class="start">

        <div class="title">
          <span>Обработка строк</span>
          <span class="desc">18:00 — 19:30 04.11.20</span>
        </div>

      </div>

      <div class="end">
        <SubjectListItem class="subject" />
      </div>
    </div>
  </AppCard>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import AppCard from '@/components/app-card/AppCard.vue';
import SubjectListItem from '@/components/subject/SubjectListItem.vue';

export default defineComponent({
  components: { AppCard, SubjectListItem },
});
</script>

<style lang="scss" scoped>
.examination_card {
  height: 150px;

  .content {
    flex: 1 1 auto;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &:hover {
    cursor: pointer;

    transition: filter 0.1s ease-in-out;
    filter: drop-shadow(0px 0px 15px rgba(0, 0, 0, 0.1));
  }

  .title {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    color: #2D2D2D;
    font-size: 16px;

    .desc {
      color: #808080;
      font-size: 14px;
    }
  }

  .end > .subject {
    padding: 0;
  }

  .start, .end {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }
}
</style>
