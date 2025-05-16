<script setup lang="ts">
import { ShoppingCartIcon } from '@heroicons/vue/16/solid'
import { useCartStore } from '@/stores/cart'
import { storeToRefs } from 'pinia'
import type { CartOnlyDto } from '@/stores/cart/state'
import { useToast } from 'vue-toastification'
import router from '@/router'

const cartStore = useCartStore()
const toast = useToast()

const { data: cartsData } = storeToRefs(cartStore)
const { add, remove, reset } = cartStore

const addCount = (cartDto: CartOnlyDto) => {
  add({
    id: cartDto.id,
    title: cartDto.title,
  })
}

const removeCount = (id: string) => {
  remove(id)
}

const handleOrder = () => {
  reset()
  router.push('/')
  toast.success('Ordered Successfully.!')
}
</script>
<template>
  <div class="flex flex-col items-center justify-center">
    <div class="w-full max-w-[70%] bg-gray-300 rounded-xs">
      <header class="flex justify-between p-4 capitalize font-mono">
        <span class="font-mono capitalize">title</span>
        <span class="font-mono capitalize">count</span>
      </header>
    </div>
    <div class="w-full max-w-[70%] bg-gray-100 mt-2 divide-y-2">
      <ul class="flex justify-between p-4 font-mono" v-for="cart in cartsData" :key="cart.id">
        <li class="flex items-center">{{ cart.title }}</li>
        <li class="flex justify-center items-center gap-2">
          <button
            @click="addCount(cart)"
            class="text-3xl bg-green-600 transition hover:scale-110 ease-in-out rounded px-2 py-0.5 cursor-pointer"
          >
            +
          </button>
          <span class="font-mono px-4 py-2 bg-white text-2xl">{{ cart.count }}</span>
          <button
            @click="removeCount(cart.id)"
            class="text-3xl bg-red-600 transition hover:scale-110 ease-in-out rounded px-2 py-0.5 cursor-pointer"
          >
            -
          </button>
        </li>
      </ul>
    </div>
    <div class="flex justify-end mt-2 text-2xl font-mono w-full max-w-7/10">
      <button
        @click="handleOrder"
        class="flex gap-1 items-center text-white font-mono capitalize bg-blue-600 rounded hover:bg-blue-700 transition hover:scale-110 ease-in-out px-1.5 py-1"
      >
        <ShoppingCartIcon class="h-6 w-6" /> order
      </button>
    </div>
  </div>
</template>
