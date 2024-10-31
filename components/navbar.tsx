import Link from "next/link";
import { Container } from "./ui/container";
import { NavbarActions } from "./navbar-actions";
import { fetchCurrentCustomer } from "@/actions/getCurrentCustomer";

export const Navbar = async () => {
  const customerData = await fetchCurrentCustomer();
  return (
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
            <p className="font-bold text-xl">STORE</p>
          </Link>
          <NavbarActions customerData={customerData}/>
        </div>
      </Container>
    </div>
  );
};
