"use server"
import axios from "axios";
import { cookies } from "next/headers";

export async function fetchCurrentCustomer() {
  try {
    const cookiesData = await cookies();
    const token = cookiesData.get("authToken");
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API}/api/customer/auth/current-user?authToken=${token?.value}`
    );

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      if (error.response.status === 404) {
        console.warn("Customer not found.");
        return null; // Handle 404 gracefully
      } else if (error.response.status === 403) {
        console.error("Access denied. Token may be invalid or expired.");
      }
    } else {
      console.error("An unexpected error occurred:", error);
    }
    return null; // Return null to avoid unhandled error
  }
}
