import Image from "next/image";

export default function Testimonial() {
  return (
    <div className="mt-14 px-5 py-6">
      <span className="block text-center font-bold text-[#353535] mb-3">
        نظرات کاربران
      </span>
      <div className="border border-[#CBCBCB] rounded-md grid grid-cols-[auto_1fr] px-4 py-3">
        <Image
          src="/assets/images/branchImages/branch_05.png"
          width={70}
          height={70}
          alt="profile image"
          className="mb-1 w-14 h-14 block mx-auto"
        />
        <p className="col-span-full row-span-3 col-start-2 text-[#353535] pr-2 text-justify">
          از با صفا بودن شعبه اکباتان هر چی بگم کم گفتم. بهترین غذاهای گیاهی
          عمرمو اینجا خوردم. از مدیریت شعبه اکباتان رستوران‌های ترخینه واقعا
          تشکر میکنم.
        </p>
        <span className="text-[#717171] text-sm text-center">
          آرزو محمدعلیزاده
        </span>
        <span className="text-[#717171] text-sm text-center">
          اسفند 1401 23
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
    </div>
  );
}
