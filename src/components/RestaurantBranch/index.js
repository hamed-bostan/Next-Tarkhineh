import Banner from "../common/Banner";
import ActionButton from "./ActionButton";
import Address from "./Address";
import BranchList from "./BranchList";
import FoodHighlights from "./foodHighlights";
import Testimonial from "./Testimonial";

export default function RestaurantBranch() {
  return (
    <section className="container mx-auto">
      <Banner
        imageSrc="/assets/images/bannerImages/Slider-RestaurantBranch.jpg"
        text="طعم بی‌نظیر طبیعت!"
      />
      <FoodHighlights />
      <ActionButton />
      <div className="relative">
        <BranchList />
        <Address />
      </div>
      <Testimonial />
    </section>
  );
}
