import { Product } from '@/types'
import { fetchCurrentCustomer } from './getCurrentCustomer';


export const getProduct = async (id: string): Promise<Product> => {
  const currentCustomer = await fetchCurrentCustomer();
  const URL = `${process.env.NEXT_PUBLIC_API}/api/${currentCustomer?.store?.id ?? "deb85229-40e2-4ee2-9817-c5b021d3a7bc"}/products`

  const res = await fetch(`${URL}/${id}`)

  return res.json()
}
