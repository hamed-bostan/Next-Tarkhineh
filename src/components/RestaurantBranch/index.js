import Banner from "../common/Banner";
import ActionButton from "./ActionButton";
import Address from "./Address";
import BranchList from "./BranchList";
import Testimonial from "./Testimonial";

export default function RestaurantBranch() {
  return (
    <>
      <Banner
        imageSrc="/assets/images/bannerImages/Slider-RestaurantBranch.jpg"
        text="طعم بی‌نظیر طبیعت!"
      />
      <ActionButton />
      <div className="relative">
        <BranchList />
        <Address />
      </div>
      <Testimonial />
    </>
  );
}
