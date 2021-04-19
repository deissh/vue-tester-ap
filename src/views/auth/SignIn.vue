<template>
  <form v-on:submit="login">
    <TFCard class="card_content">
      <div class="logo">
        <img src="../../assets/rgatu-new-logo.png" width="120"/>
      </div>

      <TFInput
        placeholder="Username"
        :value="username" />
      <TFInput
        placeholder="Password"
        :value="password" />

<!-- TODO: remember me checkbox-->

      <TFButton>Войти</TFButton>
    </TFCard>
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
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
      username: localStorage.getItem(LAST_LOGIN_USERNAME) || '',
      password: '',
    };
  },

  methods: {
    login(e: Event) {
      console.log('login w/', this.username, this.password);

      this.$router.push('/dashboard');

      e.preventDefault();
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
}

</style>
