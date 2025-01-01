import { Carousel, CarouselContent } from "@/components/ui/carousel";
import { foodInformation } from "@/lib/data";
import NotIranianFoodCard from "./NotIranianFoodCard";

export default function NotIranianFoodList() {
  const FoodInformation = foodInformation.filter(
    (item) => item.category === "غذاهای غیر ایرانی"
  );

  return (
    <div className="px-5 mb-6">
      <span className="font-bold text-[#353535] mb-3 block">
        غذاهای غیر ایرانی
      </span>
      <Carousel rtl>
        <CarouselContent>
          {FoodInformation.map((item) => (
            <NotIranianFoodCard item={item} key={item.id} />
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
