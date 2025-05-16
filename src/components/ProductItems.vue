<script setup lang="ts">
import { ShoppingCartIcon } from '@heroicons/vue/16/solid'
import type { ProductsDto } from '@/stores/products/state'
import { useCartStore } from '@/stores/cart'
import { useToast } from 'vue-toastification'

const cartStore = useCartStore()
const toast = useToast()

const { add } = cartStore

defineProps<{
  product: ProductsDto
}>()

const addToCart = (product: ProductsDto) => {
  add({
    id: product.id,
    title: product.title,
  })
  toast.success('One Item Added')
}
</script>

<template>
  <div
    class="max-w-sm h-[400px] flex flex-col justify-between bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 transition ease-in-out hover:scale-105"
  >
    <a href="#">
      <img class="rounded-t-lg w-full h-40 object-cover" src="/src/assets/img/food.jpeg" alt="" />
    </a>
    <div class="p-5 flex flex-col flex-grow">
      <a href="#">
        <h5
          class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white line-clamp-2"
        >
          {{ product.title }}
        </h5>
      </a>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-3">
        {{ product.body }}
      </p>
      <div class="mt-auto">
        <button
          @click="addToCart(product)"
          class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add to Cart
          <ShoppingCartIcon class="ml-1 w-5 h-5" />
        </button>
      </div>
    </div>
  </div>
</template>
