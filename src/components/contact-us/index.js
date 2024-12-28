import React from "react";
import Banner from "../common/Banner";
import BranchList from "./BranchList";

export default function ContactUs() {
  return (
    <section>
      <Banner
        imageSrc="/assets/images/bannerImages/slider_04.png"
        text="با ترخینه در تماس باشید."
      />
      <BranchList />
    </section>
  );
}
