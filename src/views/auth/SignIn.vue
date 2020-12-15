<template>
  <div class="max-w-md w-full space-y-8">
    <div>
      <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
        Авторизация
      </h2>
    </div>

    <form class="mt-8 space-y-6" v-on:submit="onSubmit">
      <div class="rounded-md shadow-sm -space-y-px">
        <div>
          <label for="email-address" class="sr-only">Email address</label>
          <input
            v-model="email"
            id="email-address"
            class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
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
            class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
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
              class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              type="checkbox">

          <label for="remember_me" class="ml-2 block text-sm text-gray-900">
            Запомнить меня
          </label>
        </div>
      </div>

      <button
        v-on:click="onSubmit"
        class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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

  /**
   * Вызыватеся при попытке авторизоваться
   */
  public onSubmit(e: Event) {
    console.log('send req \\w', this.email, this.password, this.rememberMe);
    e.preventDefault();
  }
}
</script>

<style scoped lang="scss">

</style>
