<script setup lang="ts">
import { ShoppingCartIcon, BuildingStorefrontIcon } from '@heroicons/vue/16/solid'
import { useRoute } from 'vue-router'

const route = useRoute()

const linkClasses = (path: string) => {
  const base = 'flex flex-col items-center p-2 text-xs capitalize'
  const active = 'bg-gray-300'
  const inactive = 'hover:bg-gray-100'
  return `${base} ${route.path === path ? active : inactive}`
}
</script>

<template>
  <nav class="sticky bottom-0 bg-white z-10">
    <ul class="flex justify-around items-center border-t">
      <li class="flex-1">
        <RouterLink to="/" :class="linkClasses('/')">
          <BuildingStorefrontIcon class="w-6 h-6" />
          Home
        </RouterLink>
      </li>

      <li class="flex-1">
        <RouterLink to="/go-to-cart" :class="linkClasses('/go-to-cart')">
          <ShoppingCartIcon class="w-6 h-6" />
          Basket
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>
