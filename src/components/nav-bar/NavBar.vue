<template>
  <div class="nav_bar">
    <div class="content">
      <div class="top">
        <UserBadge :user="currentUser"/>
      </div>

      <div class="bottom">
        asd
      </div>
    </div>
  </div>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/camelcase */
import { defineComponent } from 'vue';

import UserBadge from '@/components/user/UserBadge.vue';
import { UserDto } from '@/core/dto/user.dto';

export default defineComponent({
  components: { UserBadge },
  props: {
    currentUser: { type: UserDto, required: true },
  },
});
</script>

<style scoped lang="scss">
@import "src/styles/init";

.nav_bar {
  flex: 1 1 auto;

  display: flex;
  flex-direction: column;

  background: #FFFFFF;
  border-radius: 0 10px 10px 0;

  .content {
    flex: 1 1 auto;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    padding: 20px;

    .top, .bottom {
      display: flex;
      flex-direction: column;

      width: 100%;
      @include tf-mobile {
        width: auto;
      }
    }

    @include tf-mobile {
      flex-direction: row;
    }
  }
}
</style>
