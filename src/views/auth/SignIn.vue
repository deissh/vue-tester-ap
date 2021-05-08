<template>
  <form v-on:submit="login">
    <AppCard class="card">
      <div class="card_content">
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
      </div>
    </AppCard>
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { authUseCase } from '@/core/usecase/auth.usecase';

import TFInput from '@/components/app-input/AppInput.vue';
import TFButton from '@/components/app-button/AppButton.vue';
import AppCard from '@/components/app-card/AppCard.vue';

const LAST_LOGIN_USERNAME = 'LAST_LOGIN_USERNAME';

export default defineComponent({
  components: {
    AppCard,
    TFButton,
    TFInput,
  },

  data: () => ({
    cred: {
      username: localStorage.getItem(LAST_LOGIN_USERNAME) || '',
      pwd: '',
    },
  }),

  methods: {
    async login(e: Event) {
      e.preventDefault();

      // some logic
      await authUseCase.login(this.cred.username, this.cred.pwd);
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

.card {
  padding: 30px;

  background: tf-map-get($tf-state-colors, content-bg, base);
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}

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
