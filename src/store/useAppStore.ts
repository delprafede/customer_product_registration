import { create } from "zustand";
import { createProductSlice, type ProductSliceType } from "./productsSlace";


export const useAppStore = create<ProductSliceType>((...a)=> ({
    ...createProductSlice(...a)
}))