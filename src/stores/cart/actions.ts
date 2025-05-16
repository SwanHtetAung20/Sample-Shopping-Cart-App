import type { CartStore } from '.'
import type { CartOnlyDto } from './state'

export const actions = {
  add(cartDto: CartOnlyDto) {
    const state = this as CartStore
    const existing = state.data.find((item) => item.id === cartDto.id)
    if (existing) {
      existing.count += 1
    } else {
      state.data.push({
        ...cartDto,
        count: 1,
      })
    }
  },
  remove(id: string) {
    const state = this as CartStore
    const existing = state.data.find((item) => item.id === id)
    if (existing) {
      existing.count -= 1
      if (existing.count <= 0) {
        state.data = state.data.filter((item) => item.id !== id)
      }
    }
  },
  reset() {
    const state = this as CartStore
    if (state.data) {
      state.data = []
    }
  },
}
