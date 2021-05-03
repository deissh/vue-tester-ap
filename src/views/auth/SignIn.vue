<template>
  <form v-on:submit="login">
    <TFCard class="card_content">
      <div class="logo">
        <img src="../../assets/rgatu-new-logo.png" />
      </div>

      <TFInput
        placeholder="Username"
        v-model="cred.username" />
      <TFInput
        placeholder="Password"
        type="password"
        v-model="cred.pwd" />

<!-- TODO: remember me checkbox-->

      <TFButton>Войти</TFButton>
    </TFCard>
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { AuthUseCase } from '@/core/usecase/auth.usecase';

import TFInput from '@/components/tf/TFInput.vue';
import TFCard from '@/components/tf/TFCard.vue';
import TFButton from '@/components/tf/TFButton.vue';

const LAST_LOGIN_USERNAME = 'LAST_LOGIN_USERNAME';

export default defineComponent({
  components: {
    TFCard, TFButton, TFInput,
  },

  data() {
    return {
      cred: {
        username: localStorage.getItem(LAST_LOGIN_USERNAME) || '',
        pwd: '',
      },

      authUseCase: new AuthUseCase(),
    };
  },

  methods: {
    async login(e: Event) {
      e.preventDefault();

      // some logic
      await this.authUseCase.login(this.cred.username, this.cred.pwd);
      this.onLoginSuccess();
    },

    onLoginSuccess() {
      this.$router.push('/dashboard');
    },
  },
});
</script>

<style scoped lang="scss">
@import "../../styles/init";

.card_content {
  display: flex;
  flex-direction: column;

  width: 250px;

  & > * {
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
    }
  }
}

.logo {
  display: flex;
  flex-direction: row;
  flex: 1 1 auto;
  justify-content: center;

  img {
    width: 200px;
  }
}

</style>
