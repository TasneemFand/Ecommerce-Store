"use client";

import { Button } from "@/components/ui/button";
import { Currency } from "@/components/ui/currency";
import { useCart } from "@/hooks/use-cart";
import { Product } from "@/types";
import { ShoppingCart } from "lucide-react";
import { MouseEventHandler } from "react";

interface InfoProps {
  data: Product;
}

export const Info: React.FC<InfoProps> = ({ data }) => {
  const cart = useCart();

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();

    cart.addItem(data);
  };
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">{data?.name}</h1>

      <div className="mt-3 flex items-end justify-between">
        <p className="text-2xl text-gray-900">
          <Currency value={data?.price} />
        </p>
      </div>

      <hr className="my-4" />

      <div className="mt-10 flex items-center gap-x-3">
        <Button className="flex items-center gap-x-2" onClick={onAddToCart}>
          Add to cart
          <ShoppingCart />
        </Button>
      </div>
    </div>
  );
};
