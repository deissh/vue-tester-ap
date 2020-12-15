<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <router-view />
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

export default class BaseView extends Vue {}
</script>
