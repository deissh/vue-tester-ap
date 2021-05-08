<template>
  <div class="overview">

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

import SubjectListItem from '@/components/subject/SubjectListItem.vue';
import { SubjectRepository } from '@/core/repositories/subject.repository';

const subjectRepository = new SubjectRepository();

export default defineComponent({
  components: {
    SubjectListItem,
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

.subjects_list {
  &__item {
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
