import axios from 'axios';
import type { Products } from "../types"
import { producDetailsResAPi } from '../schemas/recipe.schemas';

export const createProducts = async (product: Products) => {
    const URL = `${import.meta.env.VITE_API_URL}/createProducts`;
    const { data } = await axios.post(URL, product)
    const result = producDetailsResAPi.safeParse(data)
    if (result.success) {
        return result.data
    }
    console.log(result)
    console.log(data)
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