import { Product } from "@/types";
import axios from "axios";
import qs from "query-string";

interface Query {
  storeId?: string;
  isFeatured?: boolean;
}

export const getProducts = async (query: Query): Promise<Product[]> => {
  const url = qs.stringifyUrl({
    url: `http://localhost:3000/api/${query.storeId}/products`,
    query: {
      isFeatured: query.isFeatured,
    },
  });

  try {
    const res = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res.data; // Axios puts the response data in res.data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // Handle specific Axios error with status and response
      console.error(
        `Failed to fetch products: ${error.response?.status} ${error.response?.statusText}`
      );
      console.error("Response data:", error.response?.data);
    } else {
      // Handle any other errors
      console.error("Error in getProducts:", error);
    }

    throw new Error("An error occurred while fetching products.");
  }
};
