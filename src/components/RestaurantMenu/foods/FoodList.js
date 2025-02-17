"use client";

import FoodCard from "./FoodCard";
import { useEffect, useState } from "react";
import { fetchProducts } from "@/lib/api";

export default function FoodList({ filter, title }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // Handle error state
  console.log(products);

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

  const filteredFood = products.filter((item) => item.category === filter);

  return (
    <>
      {title && (
        <h3 className="text-sm text-[#353535] font-bold self-end md:text-lg mb-3 md:mb-5">
          {title}
        </h3>
      )}
      <div className="grid grid-cols-1 gap-y-3 mb-6 md:grid-cols-2 md:gap-5">
        {filteredFood.map((foodItem) => {
          return <FoodCard foodItem={foodItem} key={foodItem.id} />;
        })}
      </div>
    </>
  );
}
