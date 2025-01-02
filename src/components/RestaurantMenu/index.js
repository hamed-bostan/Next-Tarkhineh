import Banner from "../common/Banner";
import FoodCategoriesList from "./FoodCategoriesList";
import FoodList from "./foodList";
import FoodTypesList from "./FoodTypesList";

export default function RestaurantMenu() {
  return (
    <section>
      <Banner
        styleContainer="mb-0"
        text="لذت غذای سالم و گیاهی را با ترخینه تجربه کنید!"
        isButton={false}
        imageSrc="/assets/images/bannerImages/banner-menu.jpg"
      />
      <FoodTypesList />
      <FoodCategoriesList />
      <FoodList />
    </section>
  );
}
