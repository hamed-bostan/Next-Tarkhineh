import ItemsDesktop from "./itemsDesktop";
import ItemsMobile from "./itemsMobile";

export default function Items({ selectedItems }) {
  return (
    <>
      <ItemsMobile selectedItems={selectedItems} />
      <ItemsDesktop selectedItems={selectedItems} />
    </>
  );
}
