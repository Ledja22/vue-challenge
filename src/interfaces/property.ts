import { z } from "zod";

export const Property = z.object({
  id: z.string(),
  address: z.string(),
  price: z.number(),
  description: z.string(),
  status: z.enum(["available", "sold", "under_contract"]),
});

export type Property = z.infer<typeof Property>;