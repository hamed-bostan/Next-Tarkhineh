import MyButton from "@/components/common/MyButton";
import Image from "next/image";

export default function BranchItem({ branch }) {
  return (
    <div className="grid grid-cols-2 grid-rows-2 border border-[#CBCBCB] rounded-sm overflow-hidden md:grid-cols-1 md:grid-rows-[auto_1fr] md:rounded-lg group">
      <DisplayingImage branch={branch} />
      <DisplayingDetails branch={branch} />
    </div>
  );
}

function DisplayingImage({ branch }) {
  return (
    <div className="relative col-span-1 row-span-2 h-20 md:h-40 lg:h-52 md:row-span-1 md:group-hover:h-36 lg:group-hover:h-44 transition-all duration-300">
      <Image
        width={100}
        height={100}
        src={branch.image}
        alt={branch.title}
        className="w-full h-full object-cover"
      />
      <div className="hidden md:block absolute inset-0 bg-[#181818] opacity-0 group-hover:opacity-65 transition-opacity duration-300 z-20"></div>
      <Image
        src="/assets/images/icons/expand_01.png"
        width={30}
        height={30}
        alt="expand icon"
        className="absolute bottom-2 right-2 w-4 h-4 md:hidden"
      />
      <Image
        width={40}
        height={40}
        src="/assets/images/icons/expand-desktop.svg"
        alt="expand icon"
        className="hidden absolute top-1/2 left-1/2 w-12 h-12 -translate-x-1/2 -translate-y-1/2 z-30 md:group-hover:block cursor-pointer"
      />
    </div>
  );
}

function DisplayingDetails({ branch }) {
  return (
    <div className="p-2 col-span-1 row-span-2 text-center md:row-span-1 md:py-4">
      <h3 className="text-sm font-medium text-[#353535] row-span-1 mb-1 md:mb-3 md:text-lg md:font-semibold">
        {branch.title}
      </h3>
      <p className="text-xs text-[#717171] row-span-1 md:text-sm md:mb-4">
        {branch.address}
      </p>
      <MyButton
        containerStyle="hidden md:block opacity-0 md:group-hover:opacity-100 transition-all duration-300"
        label="صفحه شعبه"
        variant="outline"
        imageSrc="/assets/images/icons/arrow-left.svg"
        alt="arrow left icon"
        iconStyle="w-4 h-4 order-2 md:w-5 md:h-5"
        buttonStyle="bg-transparent mx-auto text-[#315F41] border border-[#315F41] md:hover:text-[#FFF]"
      />
    </div>
  );
}
