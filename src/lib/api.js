import axios from "axios";

export const fetchProducts = async () => {
  try {
    const response = await axios.get("/api/products");
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error; // Rethrow error so it can be handled in the component if needed
  }
};
