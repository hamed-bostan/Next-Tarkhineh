import ItemsCard from "./ItemsCard";

export default function ItemsMobile({ selectedItems ,containerStyle}) {
  return (
    <div className={`h-52 overflow-y-scroll mb-3 ${containerStyle}`}>
      {selectedItems.map((foodItem, index) => (
        <ItemsCard foodItem={foodItem} key={foodItem.id} index={index} />
      ))}
    </div>
  );
}
