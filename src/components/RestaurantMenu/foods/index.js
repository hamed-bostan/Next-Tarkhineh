"use client";

import { useEffect, useState } from "react";
import FoodList from "./FoodList";
import { fetchProducts } from "@/lib/api";

export default function Foods({ selectedCategory }) {
  const isAllCategories = selectedCategory === "نمایش همه";

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // Handle error state

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (err) {
        setError("Failed to load products");
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <>
      {isAllCategories ? (
        <>
          <FoodList
            title="غذاهای غیر ایرانی"
            filter="غذاهای غیر ایرانی"
            products={products}
          />
          <FoodList
            filter="غذاهای ایرانی"
            title="غذاهای ایرانی"
            products={products}
          />
          <FoodList title="پیتزاها" filter="پیتزاها" products={products} />
          <FoodList
            title="ساندویچ‌ها"
            filter="ساندویچ‌ها"
            products={products}
          />
        </>
      ) : (
        <FoodList
          filter={selectedCategory}
          title={selectedCategory}
          products={products}
        />
      )}
    </>
  );
}
