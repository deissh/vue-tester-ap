<template>
  <div class="overview">
    <h3>Активные контрольные работы</h3>
    <div class="examinations_list">
      <ExaminationCard
        v-for="item in subjects"
        v-bind:key="item"
        hover
        class="examinations_list__item"
      />
    </div>

    <h3>Дисциплины</h3>

    <div class="subjects_list">
      <SubjectListItem
        class="subjects_list__item"
        v-for="item in subjects"
        v-bind:key="item"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { SubjectRepository } from '@/core/repositories/subject.repository';

import SubjectListItem from '@/components/subject/SubjectListItem.vue';
import ExaminationCard from '@/components/examination/ExaminationCard.vue';

const subjectRepository = new SubjectRepository();

export default defineComponent({
  components: {
    SubjectListItem, ExaminationCard,
  },
  data: () => ({}),
  computed: {
    subjects() {
      return subjectRepository.all;
    },
  },
});
</script>

<style lang="scss" scoped>
@import "../../styles/init";

.examinations_list {
  display: flex;
  flex-direction: row;

  &__item {
    margin-right: 20px;

    &:last-child {
      margin-right: 0;
    }
  }
}

.subjects_list {
  display: flex;
  flex-direction: column;

  &__item {
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
    }

    &:hover {
      cursor: pointer;

      transition: filter 0.1s ease-in-out;
      filter: drop-shadow(0px 0px 15px rgba(0, 0, 0, 0.1));
    }
  }
}
</style>
