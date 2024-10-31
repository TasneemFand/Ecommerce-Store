"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const NavbarActions = () => {
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button className="bg-white text-black border border-black hover:bg-white" onClick={() => {
        router.push("/sign-up")
      }}>
        Sign In
      </Button>
    </div>
  );
};
