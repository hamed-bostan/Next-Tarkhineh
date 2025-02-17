import FoodList from "./FoodList";

export default function Foods({ selectedCategory, products, loading, error }) {
  const isAllCategories = selectedCategory === "نمایش همه";

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
