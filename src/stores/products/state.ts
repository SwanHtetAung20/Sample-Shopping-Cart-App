export interface ProductsDto {
  id: string
  title: string
  body: string
}

export interface ProductsState {
  data: Array<ProductsDto>
}

export const state = (): ProductsState => ({
  data: [],
})
