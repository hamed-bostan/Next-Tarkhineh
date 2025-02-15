import { useSelector } from "react-redux";
import ItemsDesktop from "./itemsDesktop";
import ItemsMobile from "@/components/checkout/itemsOverviewMobile";

export default function Items() {
  const selectedItems = useSelector((state) => state.cart.selectedItems);

  return (
    <>
      <ItemsMobile selectedItems={selectedItems} containerStyle="md:hidden" />
      <ItemsDesktop selectedItems={selectedItems} />
    </>
  );
}
