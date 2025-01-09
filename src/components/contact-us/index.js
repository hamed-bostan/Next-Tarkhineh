import Banner from "../common/Banner";
import BranchList from "./BranchList";

export default function ContactUs() {
  return (
    <section className="container mx-auto">
      <Banner
        imageSrc="/assets/images/bannerImages/slider_04.png"
        text="با ترخینه در تماس باشید."
      />
      <BranchList />
    </section>
  );
}
