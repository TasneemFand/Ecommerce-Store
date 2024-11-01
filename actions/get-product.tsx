import { Product } from '@/types'
import { fetchCurrentCustomer } from './getCurrentCustomer';


export const getProduct = async (id: string): Promise<Product> => {
  const currentCustomer = await fetchCurrentCustomer();
  const URL = `${process.env.NEXT_PUBLIC_API}/api/${currentCustomer?.store?.id ?? "13787ec5-d05d-4f50-99f0-d8ceb68185e4"}/products`

  const res = await fetch(`${URL}/${id}`)

  return res.json()
}
