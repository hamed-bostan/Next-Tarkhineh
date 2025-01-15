import EmptyCartMessage from "../EmptyCartMessage";
import ItemsCard from "./ItemsCard";

export default function ItemsMobile({ selectedItems }) {
  return (
    <div className="h-52 overflow-y-scroll mb-3 md:hidden">
      {selectedItems.length > 0 ? (
        selectedItems.map((item, index) => (
          <ItemsCard key={item.id} item={item} index={index} />
        ))
      ) : (
        <EmptyCartMessage />
      )}
    </div>
  );
}
