<script setup lang="ts">
import ProductItems from '@/components/ProductItems.vue'
import { useProductStore } from '@/stores/products'
import { onMounted } from 'vue'
import { computed } from 'vue'

const productStore = useProductStore()

const { findAll, getData } = productStore

const productsData = computed(() => getData())

onMounted(() => {
  findAll()
})
</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
    <ProductItems v-for="product in productsData" :key="product.id" :product="product" />
  </div>
</template>
