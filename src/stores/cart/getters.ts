import type { CartState } from './state'

export const getters = {
  getTotalCount: (state: CartState) => {
    return () => state.data.reduce((total, item) => total + item.count, 0)
  },
}
