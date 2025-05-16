import type { ProductsState } from './state'

export const getters = {
  getData: (state: ProductsState) => {
    return () => state.data
  },
}
