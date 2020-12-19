<template>
  <div class="sign_in">
    <h2 class="sign_in__title">
      Авторизация
    </h2>

    <form class="sign_in__form" v-on:submit="onSubmit">
      <div class="">
        <div>
          <label for="email-address" class="sr-only">Email address</label>
          <input
            v-model="email"
            id="email-address"
            class=""
            placeholder="Email"
            autocomplete="email"
            required
            type="email">
        </div>
        <div>
          <label for="password" class="sr-only">Password</label>
          <input
            v-model="password"
            id="password"
            autocomplete="current-password"
            class=""
            placeholder="Пароль"
            required
            type="password">
        </div>
      </div>

      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <input
              v-model="rememberMe"
              id="remember_me"
              class=""
              type="checkbox">

          <label for="remember_me" class="">
            Запомнить меня
          </label>
        </div>
      </div>

      <button
        v-on:click="onSubmit"
        class="btn btn-round"
      >
        Войти
      </button>
    </form>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

export default class SignIn extends Vue {
  public rememberMe = false;

  public email = '';

  public password = '';

  public onSubmit(e: Event) {
    console.log('send req \\w', this.email, this.password, this.rememberMe);
    e.preventDefault();
  }
}
</script>

<style scoped lang="scss">
@import "../../styles/init";

.btn {
  width: 100%;
  color: #fff;

  border: transparent;

  cursor: pointer;
  background-color: e-map-get($e-state-colors, brand, base);

  padding: 0.5rem 1rem;

  font-size: 0.875rem;
  line-height: 1.25rem;

  &-round {
    border-radius: 5px;
  }
}

.sign_in {
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 30rem;
  padding: 30px;

  &__title {
    font-size: 1.875rem;
    line-height: 2.25rem;
    font-weight: 800;

    margin: 30px 0 0;
  }

  &__form {
    & > * {
      margin-top: 30px;
    }
  }
}
</style>
