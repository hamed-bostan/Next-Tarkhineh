import ItemsDesktop from "./itemsDesktop";
import ItemsMobile from "./itemsMobile";

export default function Items({ selectedItems }) {
  return (
    <>
      <ItemsMobile selectedItems={selectedItems} containerStyle="md:hidden" />
      <ItemsDesktop selectedItems={selectedItems} />
    </>
  );
}
