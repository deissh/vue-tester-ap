<template>
  <div class="overview">

    <h3>Дисциплины</h3>

    <SubjectListItem />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import SubjectListItem from '@/components/subject/SubjectListItem.vue';

export default defineComponent({
  components: {
    SubjectListItem,
  },
});
</script>

<style lang="scss" scoped>
@import "../../styles/init";

</style>
