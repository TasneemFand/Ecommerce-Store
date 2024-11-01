"use client";

import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { UserButton } from "./ui/user-button";
import { useCart } from "@/hooks/use-cart";

interface NavbarActionsprops {
  customerData: unknown;
}
export const NavbarActions = ({ customerData }: NavbarActionsprops) => {
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();
  const cart = useCart();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="ml-auto flex items-center gap-x-4">
      {customerData ? (
        <>
          <Button
            className="flex items-center rounded-full bg-black px-4 py-2"
            onClick={() => router.push("/cart")}
          >
            <ShoppingBag size={20} color="white" />
            <span className="ml-2 text-sm font-medium text-white">
              {cart.items.length}
            </span>
          </Button>
          <UserButton currentUser={customerData} />
        </>
      ) : (
        <Button
          className="bg-white text-black border border-black hover:bg-white"
          onClick={() => {
            router.push("/sign-in");
          }}
        >
          Sign In
        </Button>
      )}
    </div>
  );
};
