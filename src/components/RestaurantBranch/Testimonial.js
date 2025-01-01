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
    image: "/assets/images/branchImages/branch_05.png",
    name: "آرزو محمدعلیزاده",
    date: "۲۳ اسفند ۱۴۰۱",
    comment:
      "از با صفا بودن شعبه اکباتان هر چی بگم کم گفتم. بهترین غذاهای گیاهی عمرمو اینجا خوردم. از مدیریت شعبه اکباتان رستوران‌های ترخینه واقعا تشکر میکنم. ",
  },
  {
    id: "2",
    image: "/assets/images/branchImages/branch_06.png",
    name: "سردار وظیفه",
    date: "۲۳ اسفند ۱۴۰۱",
    comment:
      "از با صفا بودن شعبه اکباتان هر چی بگم کم گفتم. بهترین غذاهای گیاهی عمرمو اینجا خوردم. از مدیریت شعبه اکباتان رستوران‌های ترخینه واقعا تشکر میکنم. ",
  },
  {
    id: "3",
    image: "/assets/images/branchImages/branch_05.png",
    name: "آرزو محمدعلیزاده",
    date: "۲۳ اسفند ۱۴۰۱",
    comment:
      "از با صفا بودن شعبه اکباتان هر چی بگم کم گفتم. بهترین غذاهای گیاهی عمرمو اینجا خوردم. از مدیریت شعبه اکباتان رستوران‌های ترخینه واقعا تشکر میکنم. ",
  },
  {
    id: "4",
    image: "/assets/images/branchImages/branch_06.png",
    name: "سردار وظیفه",
    date: "۲۳ اسفند ۱۴۰۱",
    comment:
      "از با صفا بودن شعبه اکباتان هر چی بگم کم گفتم. بهترین غذاهای گیاهی عمرمو اینجا خوردم. از مدیریت شعبه اکباتان رستوران‌های ترخینه واقعا تشکر میکنم. ",
  },
  {
    id: "5",
    image: "/assets/images/branchImages/branch_05.png",
    name: "آرزو محمدعلیزاده",
    date: "۲۳ اسفند ۱۴۰۱",
    comment:
      "از با صفا بودن شعبه اکباتان هر چی بگم کم گفتم. بهترین غذاهای گیاهی عمرمو اینجا خوردم. از مدیریت شعبه اکباتان رستوران‌های ترخینه واقعا تشکر میکنم. ",
  },
  {
    id: "6",
    image: "/assets/images/branchImages/branch_06.png",
    name: "سردار وظیفه",
    date: "۲۳ اسفند ۱۴۰۱",
    comment:
      "از با صفا بودن شعبه اکباتان هر چی بگم کم گفتم. بهترین غذاهای گیاهی عمرمو اینجا خوردم. از مدیریت شعبه اکباتان رستوران‌های ترخینه واقعا تشکر میکنم. ",
  },
];
export default function Testimonial() {
  return (
    <div className="mt-14 px-5 py-6">
      <span className="block text-center font-bold text-[#353535] mb-3">
        نظرات کاربران
      </span>
      <Carousel rtl className="w-full">
        <CarouselContent>
          {testimonialDetails.map((item, index) => (
            <CarouselItem key={index}>
              <Card className="border-none shadow-none">
                <CardContent className="p-0 relative h-44">
                  <div className="border border-[#CBCBCB] rounded-md grid grid-cols-[auto_1fr] px-4 py-3">
                    <Image
                      src={item.image}
                      alt={`Profile image of ${item.name}`}
                      width={80}
                      height={80}
                      className="mb-1 w-14 h-14 block mx-auto"
                    />
                    <p className="col-span-full row-span-3 col-start-2 text-[#353535] pr-2 text-justify">
                      {item.comment}
                    </p>
                    <span className="text-[#717171] text-sm text-center">
                      {item.name}
                    </span>
                    <span className="text-[#717171] text-sm text-center">
                      {item.date}
                    </span>
                    <div className="flex gap-x-1 justify-end items-center col-start-2">
                      <img
                        src="/assets/images/icons/star-rate.svg"
                        alt="star rate icon"
                        className="w-3 h-3"
                      />
                      <span>3</span>
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
