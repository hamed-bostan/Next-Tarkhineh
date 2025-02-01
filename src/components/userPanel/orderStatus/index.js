import HeaderDesktop from "../header/HeaderDesktop";
import FoodList from "./foodList";
import OrderDetails from "./orderDetails";
import StatusFilter from "./statusFilter";

export default function OrderStatus() {
  return (
    <div className="md:border md:border-[#CBCBCB] md:rounded-lg md:p-5">
      <HeaderDesktop label="سفارشات" style='mb-4' />
      <StatusFilter />
      <div className="border border-[#CBCBCB] rounded-sm p-2 pb-4 md:p-5 md:pt-4">
        <OrderDetails />
        <FoodList />
      </div>
    </div>
  );
}
