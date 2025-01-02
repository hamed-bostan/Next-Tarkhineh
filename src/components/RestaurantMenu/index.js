import Banner from "../common/Banner";
import FoodCategoriesList from "./FoodCategoriesList";
import FoodList from "./foodList";
import FoodTypesList from "./FoodTypesList";

export default function RestaurantMenu() {
  return (
    <>
      <Banner
        text="لذت غذای سالم و گیاهی را با ترخینه تجربه کنید!"
        isButton={false}
        imageSrc='/assets/images/bannerImages/banner-menu.jpg'
      />
      <FoodTypesList />
      <FoodCategoriesList />
      <section className="px-5 py-6">
        <FoodList />
      </section>
    </>
  );
}
