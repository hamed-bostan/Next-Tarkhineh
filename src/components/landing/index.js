import MenuSection from "./MenuSection";
import DescriptionSection from "./DescriptionSection";
import BranchOverview from "./BranchOverview";
import Banner from "../common/Banner";

export default function index() {
  return (
    <>
      <Banner
        imageSrc="/assets/images/bannerImages/slider_01.png"
        text="تجربه غذای سالم و گیاهی به سبک ترخینه"
      />
      <MenuSection />
      <DescriptionSection />
      <BranchOverview />
    </>
  );
}
