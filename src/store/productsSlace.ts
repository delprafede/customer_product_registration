import { type StateCreator } from "zustand"
import type { Products } from "../types"
import { createProducts } from "../api/products"


// import { set } from "react-hook-form"




export type ProductSliceType = {
    products: Products,
    // setProducts: (products: Product[]) => void,
    addProduct: (product: Products) => void,

}


export const createProductSlice: StateCreator<ProductSliceType> = () => ({
    products: {} as Products, // Initialize products as an empty array or appropriate default value

    addProduct: (product) => {
      createProducts(product)
      
    }
})