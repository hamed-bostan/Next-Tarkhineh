import MyButton from "@/components/common/MyButton";
import { Separator } from "@/components/ui/separator";
import { OctagonAlert, Trash2 } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { clear } from "@/redux/actions/cartAction";
import formatToPersianStyle from "@/lib/formattedPrice";
import { useCheckoutTab } from "@/context/CheckoutTabContext";
import ItemsOverviewMobile from "./itemsOverviewMobile";

export default function CartSummary() {
  const dispatch = useDispatch();
  const { activeTab } = useCheckoutTab();
  const hasBorder = activeTab === 1 || activeTab === 2;
  const hasQuantitySelector = activeTab === 1 || activeTab === 2;

  // Fetch the itemsCounter from the Redux store
  const itemsCounter = useSelector((state) => state.cart.itemsCounter);
  const selectedItems = useSelector((state) => state.cart.selectedItems);

  // Calculate total discount
  const totalDiscount = selectedItems
    .reduce((total, item) => {
      const itemDiscount = ((item.price * item.discount) / 100) * item.quantity;
      return total + itemDiscount;
    }, 0)
    .toFixed(2); // Round to 2 decimal places

  // Calculate total payable amount
  const totalPayable = selectedItems
    .reduce((total, item) => {
      const discountedPrice = item.price - (item.price * item.discount) / 100;
      return total + discountedPrice * item.quantity;
    }, 0)
    .toFixed(2);

  // Handler to clear the cart
  const handleClearCart = () => {
    dispatch(clear());
  };

  return (
    <div
      className={`text-sm text-[#353535] md:border md:border-[#CBCBCB] md:p-6 md:rounded-lg md:h-fit ${
        hasBorder && "border border-[#CBCBCB] rounded-lg p-4"
      }`}
    >
      <div className="hidden md:flex justify-between mb-3">
        <span className="text-base">سبد خرید ({itemsCounter})</span>
        <Trash2
          color="#353535"
          size={20}
          onClick={handleClearCart}
          className="cursor-pointer"
        />
      </div>
      <Separator className="hidden md:block md:mb-3" />
      {hasQuantitySelector && (
        <div className="hidden md:block">
          <ItemsOverviewMobile selectedItems={selectedItems} />
        </div>
      )}
      <div className="flex justify-between py-3">
        <span>تخفیف محصولات</span>
        <span className="text-[#717171]">
          {formatToPersianStyle(totalDiscount)} تومان
        </span>
      </div>
      <Separator />
      <div className="flex justify-between mt-3 mb-2">
        <span>هزینه ارسال</span>
        <span className="text-[#717171]">0 تومان</span>
      </div>
      <div className="flex gap-x-2 mb-3">
        <div>
          <OctagonAlert size={16} color="#A9791C" />
        </div>
        <p className="text-xs text-[#A9791C]">
          هزینه ارسال در ادامه بر اساس آدرس، زمان و نحوه ارسال انتخابی شما
          محاسبه و به این مبلغ اضافه خواهد شد.
        </p>
      </div>
      <Separator />
      <div className="flex justify-between py-3">
        <span>مبلغ قابل پرداخت</span>
        <span className="text-[#417F56]">
          {formatToPersianStyle(totalPayable)} تومان
        </span>
      </div>
      <MyButton label="ورود / ثبت‌ نام" buttonStyle="bg-[#417F56] w-full" />
    </div>
  );
}
