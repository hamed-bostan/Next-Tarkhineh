import ContactForm from "./ContactForm";
import Navigation from "./Navigation";

export default function Footer() {
  return (
    <section className="bg-[url('/assets/images/bannerImages/footer.jpg')] bg-center bg-cover min-h-36 w-full grid grid-cols-2 md:h-72 px-5 py-4">
      <Navigation />
      <ContactForm />
    </section>
  );
}
