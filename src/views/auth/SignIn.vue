<template>
  <div class="sign_in">
    <h2 class="sign_in__title">
      Авторизация
    </h2>

    <form class="sign_in__form" v-on:submit="onSubmit">
      <div class="cred">
        <input
          v-model="email"
          class="input"
          placeholder="Email"
          autocomplete="email"
          required
          type="email">

        <input
          v-model="password"
          autocomplete="current-password"
          class="input input-password"
          placeholder="Пароль"
          required
          type="password">
      </div>

      <div class="option">
        <div class="option__remember">
          <input
              v-model="rememberMe"
              id="remember_me"
              class=""
              type="checkbox">

          <label for="remember_me" class="">
            Запомнить меня
          </label>
        </div>

        <router-link
          class="option__restore"
          to="/auth/restore"
        >
          Забыли пароль?
        </router-link>
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

.input {
  width: auto;

  border-width: 1px;
  border-radius: 10px;
  border-style: solid;
  border-color: rgb(209, 213, 219);

  padding: 0.5rem 0.75rem;

  font-size: 0.875rem;
  line-height: 1.25rem;

  &:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;

    border-color: e-map-get($e-state-colors, brand, base);
  }
}

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
  max-width: 350px;

  &__title {
    text-align: center;

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

.option {
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  &__remember {
    flex: 1 1 auto;
  }

  &__restore {
    color: e-map-get($e-state-colors, brand, base);
    text-decoration: unset;
  }
}

.cred {
  display: flex;
  flex-direction: column;

  .input {
    &:first-child {
      border-bottom-color: transparent;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }

    &:last-child {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }
  }
}
</style>
