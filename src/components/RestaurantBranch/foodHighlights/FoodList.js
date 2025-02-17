import { Carousel, CarouselContent } from "@/components/ui/carousel";
import FoodCard from "./FoodCard";

export default function FoodList({
  title,
  filter,
  containerStyle = "",
  titleStyle = "text-[#353535]",
  products,
}) {
  const filteredFood = products.filter((item) => item.filter === filter);
  const nonIranianFood = products.filter((item) => item.category === filter);

  return (
    <div className={`p-5 md:p-6 lg:p-7 ${containerStyle}`}>
      <span className={`font-bold mb-3 block md:text-lg md:mb-5 ${titleStyle}`}>
        {title}
      </span>
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
