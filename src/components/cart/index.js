import { ArrowRight, Trash2 } from "lucide-react";
import CartDetails from "./cartDetails";

const data = [
  { name: "پاستا سبزیجات", price: "140000 تومان" },
  { name: "پیتزا اسفناج", price: "160000 تومان" },
  { name: "پیتزا بادمجان و زیتون", price: "180000 تومان" },
  { name: "پیتزا بادمجان و زیتون", price: "180000 تومان" },
  { name: "پیتزا بادمجان و زیتون", price: "180000 تومان" },
  { name: "پیتزا بادمجان و زیتون", price: "180000 تومان" },
];

export default function Cart() {
  return (
    <section className="px-5 py-6">
      <CartHeader />
      <CartDetails data={data} />
    </section>
  );
}

function CartHeader() {
  return (
    <div className="flex justify-between mb-6">
      <ArrowRight color="#353535" size={16} />
      <h1 className="text-sm font-bold text-[#353535]">سبد خرید</h1>
      <Trash2 color="#353535" size={16} />
    </div>
  );
}
