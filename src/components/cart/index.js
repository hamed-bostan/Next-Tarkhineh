import CartDetails from "./cartDetails";
import CartHeader from "./header";

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
