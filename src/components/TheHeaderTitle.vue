<script setup lang="ts">
import { ShoppingCartIcon } from '@heroicons/vue/16/solid'
import { useCartStore } from '@/stores/cart'
import { computed } from 'vue'

const cartStore = useCartStore()

const { getTotalCount } = cartStore

const countTotal = computed(() => getTotalCount())
</script>

<template>
  <div class="flex items-center gap-2 mr-6">
    <span class="font-mono"> Buy </span>
    <div class="relative">
      <ShoppingCartIcon class="h-6 text-green-500" />
      <span
        v-if="countTotal > 0"
        class="absolute z-10 -top-6 -right-6 bg-gray-200 p-1 rounded-full font-mono"
        >{{ countTotal }}</span
      >
    </div>
  </div>
</template>
