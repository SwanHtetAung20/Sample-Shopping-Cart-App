import { state } from './state'
import { getters } from './getters'
import { actions } from './actions'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart_store', {
  state: state,
  getters: getters,
  actions: actions,
})

export type CartStore = ReturnType<typeof useCartStore>
