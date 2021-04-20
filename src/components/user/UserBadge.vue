<template>
  <div class="user_badge">
    <CircleAvatar
      class="avatar"
      :user="user" />

    <div class="user_name">
      <span>{{ user.first_name }} {{ user.last_name }}</span>
      <span class="role">студент, ИПБ-20</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { UserDto } from '@/core/dto/user';
import CircleAvatar from '@/components/user/CircleAvatar.vue';

export default defineComponent({
  components: { CircleAvatar },
  props: {
    user: { required: true, type: Object as PropType<UserDto> },
  },
});
</script>

<style scoped lang="scss">
.user_badge {
  flex: 1 1 auto;

  display: flex;
  flex-direction: row;
  align-items: center;

  .avatar {
    margin-right: 10px;
  }

  .user_name {
    flex: 1 1 auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    .role {
      font-size: 14px;
      color: #808080;
    }
  }
}
</style>
