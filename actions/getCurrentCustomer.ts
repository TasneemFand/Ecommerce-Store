import axios from "axios";
import { cookies } from "next/headers";

export async function fetchCurrentCustomer() {
  try {
     const cookiesData = await cookies();
    const token = cookiesData.get("authToken")
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API}/api/customer/auth/current-user?authToken=${token?.value}`
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching current customer:", error);
    return null;
  }
}
