"use client";

import { fetchCurrentCustomer } from "@/actions/getCurrentCustomer";
import { Button } from "@/components/ui/button";
import { Currency } from "@/components/ui/currency";
import { useCart } from "@/hooks/use-cart";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

export const Summary = () => {
  const items = useCart((state) => state.items);
  const removeAll = useCart((state) => state.removeAll);
  const totalPrice = items.reduce((total, item) => {
    return total + Number(item.price);
  }, 0);

  const onCheckout = async () => {
    try {
      const currentCustomer = await fetchCurrentCustomer();
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API}/api/${
          currentCustomer?.store?.id ?? "deb85229-40e2-4ee2-9817-c5b021d3a7bcs"
        }/checkout`,
        {
          productIds: items.map((item) => item.id),
        }
      );
      console.log(response.data.message, "response.data.message");
      toast.success(response.data.message);
      removeAll();
    } catch {
      toast.error("error");
    }
  };

  return (
    <div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
      <h2 className="text-lg font-medium text-gray-900">Order Summary</h2>

      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="text-base font-medium text-gray-900">Order total</div>
          <Currency value={totalPrice} />
        </div>
      </div>

      <Button
        disabled={items.length === 0}
        onClick={onCheckout}
        className="w-full mt-6"
      >
        Checkout
      </Button>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};
