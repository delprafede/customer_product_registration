import axios from 'axios';
import type { Products } from "../types"
import { producDetailsResAPi } from '../schemas/recipe.schemas';
// import type { ProductSliceType } from '../store/productsSlace';

export const createProducts = async (product: Products) => {
    const URL = `${import.meta.env.VITE_API_URL}/createProducts`;
    const { data } = await axios.post(URL, product)
    const result = producDetailsResAPi.safeParse(data)
    if (result.success) {
        return result.data
    }

}

export const getProducts = async () => {
    const URL = `${import.meta.env.VITE_API_URL}/products`;
    const { data } = await axios.get(URL)
    // const result = producDetailsResAPiArray.safeParse(data)
    // if (result.success) {
    //     // return result.data
    // }
    return data.data
}

export const getProductId = async (id: number) => {
    const URL = `${import.meta.env.VITE_API_URL}/product/${id}`;
    const { data } = await axios.get(URL)
    // const result = producDetailsResAPi.safeParse(data)
    // if (result.success) {
    //     return result.data
    // }
    return data.data
}
export const updateProduct = async (id: number, product: Products) => {
    const URL = `${import.meta.env.VITE_API_URL}/product/${id}`;
    const { data } = await axios.put(URL, product)
    // const result = producDetailsResAPi.safeParse(data)
    // if (result.success) {
    //     return result.data
    // }
    return data.data
}

export const deleteProductId = async (id: number) => {
    const URL = `${import.meta.env.VITE_API_URL}/product/${id}`;
    const { data } = await axios.delete(URL)
    // const result = producDetailsResAPi.safeParse(data)
    // if (result.success) {
    //     return result.data
    // }
    return data.data
}
export const updateAvailableId = async (id: number) => {
    const URL = `${import.meta.env.VITE_API_URL}/product/${id}`;
    const { data } = await axios.patch(URL)
    // const result = producDetailsResAPi.safeParse(data)
    // if (result.success) {
    //     return result.data
    // }
    return data.data
}