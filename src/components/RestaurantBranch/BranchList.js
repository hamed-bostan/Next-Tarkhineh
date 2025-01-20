import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export default function BranchList() {
  const images = [
    "/assets/images/branchImages/branch-01.jpg",
    "/assets/images/branchImages/branch-02.jpg",
    "/assets/images/branchImages/branch-03.jpg",
  ];

  return (
    <>
      <h3 className="font-bold mb-3 text-center">شعبه اکباتان</h3>
      <Carousel rtl className="w-full">
        <CarouselContent>
          {images.map((src, index) => (
            <CarouselItem key={index}>
              <Card className="border-none shadow-none">
                <CardContent className="p-0 relative h-44">
                  <Image
                    src={src}
                    alt={`Carousel image ${index + 1}`}
                    width={800}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="border-none shadow-none absolute right-3 top-1/2 -translate-y-1/2 z- w-6 h-6 md:w-8 md:h-8" />
        <CarouselNext className="border-none shadow-none absolute left-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 md:w-8 md:h-8" />
      </Carousel>
    </>
  );
}
