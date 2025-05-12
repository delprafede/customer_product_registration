import { z } from 'zod';

export const producDetailsResAPi = z.object({

   name: z.string(),
   price: z.number(),
   available: z.boolean(),
})

export const getproducDetailsResAPi = z.object({
   id: z.number(),
   name: z.string(),
   price: z.number(),
   available: z.boolean(),

})
export const producDetailsResAPiArray = z.array(getproducDetailsResAPi)