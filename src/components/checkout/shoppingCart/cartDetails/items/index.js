import ItemsDesktop from "./itemsDesktop";
import ItemsOverviewMobile from "@/components/checkout/itemsOverviewMobile";

export default function Items({ selectedItems }) {
  return (
    <>
      <ItemsOverviewMobile selectedItems={selectedItems} containerStyle="md:hidden" />
      <ItemsDesktop selectedItems={selectedItems} />
    </>
  );
}
