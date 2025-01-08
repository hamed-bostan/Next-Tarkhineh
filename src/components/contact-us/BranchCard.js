import Image from "next/image";
import MyButton from "../common/MyButton";

export default function BranchCard({ data }) {
  const { title, image, address, phoneNumber, workTime } = data;

  return (
    <div className="border border-[#CBCBCB] rounded-sm overflow-hidden md:grid md:grid-cols-2 md:h-52 group md:rounded-lg md:hover:shadow-md">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="h-28 w-full object-cover md:h-52"
        />
        <div className="hidden md:block absolute inset-0 bg-[#181818] opacity-0 group-hover:opacity-65 transition-opacity duration-300 z-20"></div>
        <Image
          width={40}
          height={40}
          src="/assets/images/icons/expand-desktop.svg"
          alt="expand icon"
          className="hidden absolute top-1/2 left-1/2 w-12 h-12 -translate-x-1/2 -translate-y-1/2 z-30 md:group-hover:block cursor-pointer"
        />
      </div>
      <div className="text-[#717171] text-xs text-center p-4 pt-2 md:px-3 md:text-sm md:flex md:flex-col md:justify-center md:py-0">
        <h3 className="block text-sm mb-2 text-[#353535] md:text-base md:font-medium md:mb-3">
          {title}
        </h3>
        <p className="mb-0.5 md:mb-1">آدرس: {address}</p>
        <p className="mb-0.5 md:mb-1">شماره تماس: {phoneNumber}</p>
        <p className="mb-3 md:mb-4">ساعت کاری: {workTime}</p>
        <div className="flex gap-x-4 justify-center md:opacity-0 md:group-hover:opacity-100 transition-all duration-300">
          <MyButton
            variant="outline"
            label="صفحه شعبه"
            buttonStyle="h-6 py-0 w-full text-[#417F56] border-[#417F56] rounded-sm md:h-9 md:w-2/5 hover:text-[#fff]"
          />
          <MyButton
            label="دیدن در نقشه"
            buttonStyle="h-6 bg-[#417F56] py-0 w-full rounded-sm md:h-9 md:w-2/5"
          />
        </div>
      </div>
    </div>
  );
}
