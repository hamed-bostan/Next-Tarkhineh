import { Carousel, CarouselContent } from "@/components/ui/carousel";
import { foodInformation } from "@/lib/data";
import FoodCard from "./FoodCard";

export default function FoodList({ title, filter }) {
  const filteredFood = foodInformation.filter((item) => item.filter === filter);
  const nonIranianFood = foodInformation.filter(
    (item) => item.category === filter
  );

  return (
    <div className="px-5 mb-6">
      <span className="font-bold text-[#353535] mb-3 block md:text-lg md:mb-5">{title}</span>
      <Carousel rtl>
        <CarouselContent>
          {filteredFood.map((item) => (
            <FoodCard item={item} key={item.id} />
          ))}
        </CarouselContent>
      </Carousel>
      <Carousel rtl>
        <CarouselContent>
          {nonIranianFood.map((item) => (
            <FoodCard item={item} key={item.id} />
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
