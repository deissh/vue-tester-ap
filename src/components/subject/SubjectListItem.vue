<template>
  <div class="subject_list_item">
    <div class="content">
      <div class="start">

        <img src="https://avatars.redforester.com/?name=ts" width="40" height="40">

        <div class="title">
          <span>First line</span>
          <span class="desc">second</span>
        </div>

      </div>

      <div class="end"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({});
</script>

<style lang="scss" scoped>
.subject_list_item {
  padding: 15px;
  border-radius: 10px;

  background-color: white;
  filter: drop-shadow(0px 0px 15px rgba(0, 0, 0, 0.1));

  .content {
    display: flex;
    flex-direction: row;
    align-items: center;
    align-content: space-between;

    .title {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    .start, .end {
      flex: 1 1 auto;

      display: flex;
      flex-direction: row;
    }
  }
}
</style>
