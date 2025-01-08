import ContactForm from "./ContactForm";
import Navigation from "./Navigation";

export default function Footer() {
  return (
    <section className="bg-[url('/assets/images/bannerImages/footer.jpg')] bg-center bg-cover w-full grid grid-cols-2 px-5 py-4">
      <Navigation />
      <ContactForm />
    </section>
  );
}
