import CartDetails from "./cartDetails";
import CartHeader from "./header";

export default function Cart() {
  return (
    <section className="px-5 py-6">
      <CartHeader />
      <CartDetails />
    </section>
  );
}
