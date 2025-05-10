import {z} from 'zod';
import type { getproducDetailsResAPi, producDetailsResAPi } from '../schemas/recipe.schemas';

export type Products = z.infer<typeof producDetailsResAPi>
export type GetProducts = z.infer<typeof getproducDetailsResAPi>