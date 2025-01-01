import IranianFoodList from "./iranianFood/IranianFoodList";
import NonIranianFoodList from "./nonIranianFood/NonIranianFoodList";
import PizzaList from "./pizza/PizzaList";
import SandwichesList from "./sandwiches/SandwichesList";

export default function FoodList() {
  return (
    <>
      <IranianFoodList />
      <NonIranianFoodList />
      <PizzaList />
      <SandwichesList />
    </>
  );
}
