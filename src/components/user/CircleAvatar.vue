<template>
  <AppTumb :url="avatarUrl" />
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { UserDto } from '@/core/dto/user.dto';

import AppTumb from '@/components/app-tumb/AppTumb.vue';

export default defineComponent({
  components: { AppTumb },
  props: {
    user: { required: true, type: Object as PropType<UserDto> },
  },
  computed: {
    avatarUrl(): string {
      // TODO: getting image from user profile
      return `https://avatars.redforester.com/?name=${this.user.first_name} ${this.user.last_name}`;
    },
  },
});
</script>

<style scoped>
.avatar {
  width: 40px;
  height: 40px;

  border-radius: 100px;
}
</style>
