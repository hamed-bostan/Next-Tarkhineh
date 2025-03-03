import Banner from "../common/Banner";
import { Separator } from "../ui/separator";
import Consultation from "./Consultation";
import Highlights from "./Highlights";
import Privilege from "./Privilege";
import RequestForm from "./requestForm";

export default function Franchise() {
  return (
    <div className="hidden md:block">
      <Banner
        styleContainer="md:mb-0"
        imageSrc="/assets/images/bannerImages/banner-06.jpg"
        text="همین الان به خانواده بزرگ ترخینه بپیوندید!"
        isButton={false}
      />
      <div className="px-10 2xl:px-28 container">
        <Highlights />
        <Separator />
        <Privilege />
        <Separator />
        <Consultation />
        <Separator />
        <RequestForm />
      </div>
    </div>
  );
}
