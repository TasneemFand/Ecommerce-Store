import { getProducts } from "@/actions/get-products";
import { fetchCurrentCustomer } from "@/actions/getCurrentCustomer";
import { ProductList } from "@/components/home/product-list";
import { Container } from "@/components/ui/container";
import { redirect } from "next/navigation";

export const revalidate = 0;

export default async function Home() {
  const currentCustomer = await fetchCurrentCustomer();
  if (!currentCustomer) {
    redirect("/sign-in");
  }
  const products = await getProducts({
    isFeatured: true,
    storeId:
      currentCustomer?.store?.id ?? "deb85229-40e2-4ee2-9817-c5b021d3a7bc",
  });

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
