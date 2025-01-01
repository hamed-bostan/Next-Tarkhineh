import { Carousel, CarouselContent } from "@/components/ui/carousel";
import { foodInformation } from "@/lib/data";
import SpecialOfferCard from "./SpecialOfferCard";

export default function SpecialOfferList() {
  const FoodInformation = foodInformation.filter(
    (item) => item.filter === "پیشنهاد ویژه"
  );

  return (
    <div className="px-5 mb-6">
      <span className="font-bold text-[#353535] mb-3 block">پیشنهاد ویژه</span>
      <Carousel rtl>
        <CarouselContent>
          {FoodInformation.map((item) => (
            <SpecialOfferCard item={item} key={item.id} />
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
