<template>
  <div class="container">
    <NavBar class="nav_bar">
      <template v-slot:top>
        <UserBadge :user="currentUser"/>

        <NavBarItem class="spacer" />
        <NavBarItem>Дисциплины</NavBarItem>
        <NavBarItem>Пользователи</NavBarItem>
      </template>

      <template v-slot:bottom>
        test text 2
      </template>
    </NavBar>

    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import NavBar from '@/components/nav-bar/NavBar.vue';
import NavBarItem from '@/components/nav-bar/NavBarItem.vue';
import UserBadge from '@/components/user/UserBadge.vue';

import { AuthRepository } from '@/core/repositories/auth.repository';
import { UserDto } from '@/core/dto/user.dto';

export default defineComponent({
  components: {
    NavBar, NavBarItem, UserBadge,
  },
  computed: {
    currentUser(): UserDto {
      return AuthRepository.currentUser;
    },
  },
});
</script>

<style lang="scss" scoped>
@import "../../styles/init";

$nav_bar_mobile_height: 80px;

.container {
  background-color: tf-map-get($tf-state-colors, light, base);

  min-height: 100vh;

  .nav_bar {
    position: fixed;
    top: 0;

    width: 250px;
    height: 100vh;

    @include tf-mobile {
      width: 100vw;
      height: $nav_bar_mobile_height;
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

    padding-top: $nav_bar_mobile_height;

    & > * {
      padding-left: 20px;
      padding-right: 20px;
    }
  }
}
</style>
