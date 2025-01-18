"use client";

import { useState } from "react";
import Banner from "../common/Banner";
import FoodCategoriesList from "./FoodCategoriesList";
import Foods from "./foods";
import FoodTypesList from "./FoodTypesList";

export default function RestaurantMenu() {
  const [selectedCategory, setSelectedCategory] = useState("نمایش همه");


  return (
    <section>
      <Banner
        styleContainer="mb-0"
        text="لذت غذای سالم و گیاهی را با ترخینه تجربه کنید!"
        isButton={false}
        imageSrc="/assets/images/bannerImages/banner-menu.jpg"
      />
      <FoodTypesList />
      <FoodCategoriesList
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <Foods selectedCategory={selectedCategory} />
    </section>
  );
}
