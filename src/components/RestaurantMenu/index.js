import CheckoutButton from "./CheckoutButton";
import FoodList from "./FoodList";

export default function RestaurantMenu() {
  return (
    <section className="px-5 py-6">
      <CheckoutButton />
      <FoodList />
    </section>
  );
}
