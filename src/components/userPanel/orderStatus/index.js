import FoodList from "./foodList";
import OrderDetails from "./orderDetails";
import StatusFilter from "./statusFilter";

export default function OrderStatus() {
  return (
    <>
      <StatusFilter />
      <div className="border border-[#CBCBCB] rounded-sm p-2 pb-4">
        <OrderDetails />
        <FoodList />
      </div>
    </>
  );
}
