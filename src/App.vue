<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheHeader from './components/TheHeader.vue'
import TheNav from './components/TheNav.vue'
</script>

<template>
  <TheHeader />
  <main class="flex grow flex-col p-8">
    <RouterView />
  </main>
  <TheNav />
</template>
