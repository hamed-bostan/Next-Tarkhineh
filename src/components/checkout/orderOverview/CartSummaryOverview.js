import MyButton from "@/components/common/MyButton";
import { Separator } from "@/components/ui/separator";
import { OctagonAlert, Trash2 } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { clear } from "@/redux/actions/cartAction";
import ItemsMobile from "../shoppingCart/cartDetails/items/itemsMobile";

export default function CartSummaryOverview() {
  const dispatch = useDispatch();

  // Fetch the itemsCounter from the Redux store
  const itemsCounter = useSelector((state) => state.cart.itemsCounter);
  const selectedItems = useSelector((state) => state.cart.selectedItems);

  // Handler to clear the cart
  const handleClearCart = () => {
    dispatch(clear());
  };

  return (
    <div className="text-sm text-[#353535] border border-[#CBCBCB] p-4 md:p-6 rounded-lg md:h-fit">
      <div className="hidden md:flex justify-between mb-3">
        <span className="text-base">سبد خرید ({itemsCounter})</span>
        <Trash2
          color="#353535"
          size={20}
          onClick={handleClearCart}
          className="cursor-pointer"
        />
      </div>
      <ItemsMobile
        selectedItems={selectedItems}
        containerStyle="hidden md:block"
      />
      <Separator className="hidden md:block" />
      <div className="flex justify-between py-3">
        <span>تخفیف محصولات</span>
        <span className="text-[#717171]">63000 تومان</span>
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
        <span className="text-[#417F56]">542000 تومان</span>
      </div>
      <MyButton label="ورود / ثبت‌ نام" buttonStyle="bg-[#417F56] w-full" />
    </div>
  );
}
