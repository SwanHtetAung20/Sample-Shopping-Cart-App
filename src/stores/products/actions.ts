import axios from 'axios'
import type { ProductStore } from '.'
import type { ProductsDto } from './state'

const url = import.meta.env.VITE_API_URL

export const actions = {
  async findAll() {
    const { data } = await axios.get(url + 'posts')
    const state = this as ProductStore
    state.data = data.map((item: ProductsDto) => ({
      id: item.id,
      title: item.title,
      body: item.body,
    }))
  },
}
