import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";

const testimonialDetails = [
  {
    id: "1",
    image: "/assets/images/avatars/01.png",
    name: "محمد محمدی",
    date: "۲۳ اسفند ۱۴۰۱",
    comment:
      "از با صفا بودن شعبه اکباتان هر چی بگم کم گفتم. بهترین غذاهای گیاهی عمرمو اینجا خوردم. از مدیریت شعبه اکباتان رستوران‌های ترخینه واقعا تشکر میکنم. ",
  },
  {
    id: "2",
    image: "/assets/images/avatars/02.png",
    name: "آرزو حسن زاده",
    date: "۲۳ اسفند ۱۴۰۱",
    comment:
      "از با صفا بودن شعبه اکباتان هر چی بگم کم گفتم. بهترین غذاهای گیاهی عمرمو اینجا خوردم. از مدیریت شعبه اکباتان رستوران‌های ترخینه واقعا تشکر میکنم. ",
  },
  {
    id: "3",
    image: "/assets/images/avatars/03.png",
    name: "حسین حسینی",
    date: "۲۳ اسفند ۱۴۰۱",
    comment:
      "از با صفا بودن شعبه اکباتان هر چی بگم کم گفتم. بهترین غذاهای گیاهی عمرمو اینجا خوردم. از مدیریت شعبه اکباتان رستوران‌های ترخینه واقعا تشکر میکنم. ",
  },
  {
    id: "4",
    image: "/assets/images/avatars/04.png",
    name: "فرزانه رمضانی",
    date: "۲۳ اسفند ۱۴۰۱",
    comment:
      "از با صفا بودن شعبه اکباتان هر چی بگم کم گفتم. بهترین غذاهای گیاهی عمرمو اینجا خوردم. از مدیریت شعبه اکباتان رستوران‌های ترخینه واقعا تشکر میکنم. ",
  },
  {
    id: "5",
    image: "/assets/images/avatars/01.png",
    name: "سجاد رحیمی",
    date: "۲۳ اسفند ۱۴۰۱",
    comment:
      "از با صفا بودن شعبه اکباتان هر چی بگم کم گفتم. بهترین غذاهای گیاهی عمرمو اینجا خوردم. از مدیریت شعبه اکباتان رستوران‌های ترخینه واقعا تشکر میکنم. ",
  },
  {
    id: "6",
    image: "/assets/images/avatars/02.png",
    name: "آنا عسگری",
    date: "۲۳ اسفند ۱۴۰۱",
    comment:
      "از با صفا بودن شعبه اکباتان هر چی بگم کم گفتم. بهترین غذاهای گیاهی عمرمو اینجا خوردم. از مدیریت شعبه اکباتان رستوران‌های ترخینه واقعا تشکر میکنم. ",
  },
];
export default function Testimonials() {
  return (
    <div className="mt-14 px-5 py-6 lg:py-7 lg:px-10 2xl:px-28">
      <span className="block text-center font-bold text-[#353535] mb-3 text-sm md:text-base md:mb-4">
        نظرات کاربران
      </span>
      <Carousel rtl className="w-full">
        <CarouselContent>
          {testimonialDetails.map((item, index) => (
            <CarouselItem key={index} className="md:basis-auto">
              <Card className="border-none shadow-none">
                <CardContent className="p-0 relative min-h-44 md:max-w-sm lg:max-w-xl">
                  <div className="border border-[#CBCBCB] rounded-sm grid grid-cols-[auto_1fr] p-4 text-xs text-[#353535] lg:text-sm">
                    <Image
                      src={item.image}
                      alt={`Profile image of ${item.name}`}
                      width={80}
                      height={80}
                      className="mb-1 w-14 h-14 block mx-auto md:w-20 md:h-20 md:mb-2"
                    />
                    <p className="col-span-full row-span-3 col-start-2 pr-3 pt-2 text-justify md:p-4">
                      {item.comment}
                    </p>
                    <span className="text-[#717171] text-center md:mb-1">
                      {item.name}
                    </span>
                    <span className="text-[#717171] text-center">
                      {item.date}
                    </span>
                    <div className="flex gap-x-1 justify-end items-center col-start-2 md:gap-x-2">
                      <img
                        src="/assets/images/icons/star-rate.svg"
                        alt="star rate icon"
                        className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5"
                      />
                      <span className="text-sm lg:text-base">3</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
