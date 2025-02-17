import FoodList from "./FoodList";
import { useProducts } from "@/hooks/useProducts";

export default function Foods({ selectedCategory }) {
  const isAllCategories = selectedCategory === "نمایش همه";
  const { products, loading, error } = useProducts();

  if (loading) return <div>در حال بارگزاری ...</div>;
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
