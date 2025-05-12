import { type StateCreator } from "zustand"
import type { GetProducts, Products } from "../types"
import { createProducts, updateProduct } from "../api/products"








export type ProductSliceType = {
    products: Products 
    addProduct: (product: Products) => void,
    editProduct: (id: GetProducts["id"], product:Products) => void,

}


export const createProductSlice: StateCreator<ProductSliceType> = () => ({
    products: {} as Products, // Initialize products as an empty array or appropriate default value

    addProduct: (product) => {
      createProducts(product)
    },
    editProduct: (id, product) => {
      updateProduct(id, product)
     
    }
})