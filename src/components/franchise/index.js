import Banner from "../common/Banner";
import { Separator } from "../ui/separator";
import FranchiseConsultation from "./FranchiseConsultation";
import FranchiseHighlights from "./FranchiseHighlights";
import FranchisePrivilege from "./FranchisePrivilege";
import FranchiseRequestForm from "./franchiseRequestForm";

export default function Franchise() {
  return (
    <div className="hidden md:block">
      <Banner
        styleContainer="md:mb-0"
        imageSrc="/assets/images/bannerImages/banner-franchise.jpg"
        text="همین الان به خانواده بزرگ ترخینه بپیوندید!"
        isButton={false}
      />
      <div className="px-12">
        <FranchiseHighlights />
        <Separator />
        <FranchisePrivilege />
        <Separator />
        <FranchiseConsultation />
        <Separator />
        <FranchiseRequestForm />
      </div>
    </div>
  );
}
