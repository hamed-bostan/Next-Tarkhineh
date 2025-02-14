import { Separator } from "@/components/ui/separator";
import ItemsCard from "./ItemsCard";
import { useCheckoutTab } from "@/context/CheckoutTabContext";

export default function ItemsOverviewMobile({ selectedItems, containerStyle }) {
  const { activeTab } = useCheckoutTab();
  const shoppingCartTab = activeTab === 0;

  return (
    <>
      <div className={`h-52 overflow-y-scroll mb-3 ${containerStyle}`}>
        {selectedItems.map((foodItem, index) => (
          <ItemsCard foodItem={foodItem} key={foodItem.id} index={index} />
        ))}
      </div>
      <Separator className={`${shoppingCartTab ? "md:hidden" : ""}`} />
    </>
  );
}
