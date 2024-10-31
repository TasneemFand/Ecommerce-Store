// store-app/utils/fetchCustomer.js
'use server'
import axios from "axios";
import { cookies } from "next/headers";

export async function login(values) {
  try {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_API}/api/customer/auth/login`,
      {
        ...values,
      }
    );
    const cookiesData = await cookies(); // Ensure that cookies() is awaited if needed in your environment
    cookiesData.set({
      name: "authToken",
      value: res.data.token, // Replace with actual token
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 24, // 1 day expiration
    });
  } catch (error) {
    console.error("Error fetching current customer:", error);
    return null;
  }
}
