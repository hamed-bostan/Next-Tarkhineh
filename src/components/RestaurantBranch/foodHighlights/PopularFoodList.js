import { Carousel, CarouselContent } from "@/components/ui/carousel";
import { foodInformation } from "@/lib/data";
import PopularFoodCard from "./PopularFoodCard";

export default function PopularFoodList() {
  const FoodInformation = foodInformation.filter(
    (item) => item.filter === "غذاهای محبوب"
  );

  return (
    <div className="px-5 mb-6 bg-[#315F41] pt-3 pb-6">
      <span className="font-bold mb-3 block text-[#FFFFFF]">غذاهای محبوب</span>
      <Carousel rtl>
        <CarouselContent>
          {FoodInformation.map((item) => (
            <PopularFoodCard item={item} key={item.id} />
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
