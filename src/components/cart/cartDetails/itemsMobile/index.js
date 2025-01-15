import EmptyCartMessage from "../EmptyCartMessage";
import ItemsCard from "./ItemsCard";

export default function ItemsMobile({ selectedItems }) {
  return (
    <div className="h-52 overflow-y-scroll mb-3 md:hidden">
      {selectedItems.length > 0 ? (
        selectedItems.map((foodItem, index) => (
          <ItemsCard foodItem={foodItem} key={foodItem.id} index={index} />
        ))
      ) : (
        <EmptyCartMessage />
      )}
    </div>
  );
}
