import Banner from "../common/Banner";
import Details from "./Details";
import Highlights from "./Highlights";

export default function AboutUs() {
  return (
    <>
      <Banner
        imageSrc="/assets/images/bannerImages/slider_05.png"
        text="درباره ترخینه بیشتر بدانید!"
      />
      <Details />
      <Highlights />
    </>
  );
}
