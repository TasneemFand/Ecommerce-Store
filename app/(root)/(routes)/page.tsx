import { getProducts } from "@/actions/get-products";
import { fetchCurrentCustomer } from "@/actions/getCurrentCustomer";
import { ProductList } from "@/components/home/product-list";
import { Container } from "@/components/ui/container";

export const revalidate = 0

export default async function Home() {
  const currentCustomer = await fetchCurrentCustomer();
  const products = await getProducts({ isFeatured: true, storeId: currentCustomer?.store?.id ?? "13787ec5-d05d-4f50-99f0-d8ceb68185e4" })

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  );
}
