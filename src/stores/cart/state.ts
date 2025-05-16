export interface CartDto {
  id: string
  title: string
  count: number
}

export type CartOnlyDto = Omit<CartDto, 'count'>

export interface CartState {
  data: CartDto[]
}

export const state = (): CartState => ({
  data: [],
})
