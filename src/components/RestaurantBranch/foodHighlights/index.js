import NotIranianFoodList from "./NotIranianFoodList";
import PopularFoodList from "./PopularFoodList";
import SpecialOfferList from "./SpecialOfferList";

export default function FoodHighlights() {
  return (
    <>
      <SpecialOfferList />
      <PopularFoodList />
      <NotIranianFoodList />
    </>
  );
}
