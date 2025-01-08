import MyButton from "../common/MyButton";

export default function BranchCard({ data }) {
  const { title, image, address, phoneNumber, workTime } = data;

  return (
    <div className="border border-[#CBCBCB] rounded-sm overflow-hidden md:grid md:grid-cols-2 md:h-48">
      <img
        src={image}
        alt={title}
        className="h-28 w-full object-cover md:h-44"
      />
      <div className="text-[#717171] text-xs text-center px-4 pb-4 pt-2 md:text-sm">
        <h3 className="block text-sm mb-2 text-[#353535] md:text-base md:font-medium md:mb-5">
          {title}
        </h3>
        <p className="mb-0.5">آدرس: {address}</p>
        <p className="mb-0.5">شماره تماس: {phoneNumber}</p>
        <p className="mb-0.5">ساعت کاری: {workTime}</p>
        <div className="mt-3 flex gap-x-4 justify-center">
          <MyButton
            variant="outline"
            label="صفحه شعبه"
            buttonStyle="h-6 py-0 w-full text-[#417F56] border-[#417F56] rounded-sm md:h-9 md:w-2/3 hover:text-[#fff]"
          />
          <MyButton
            label="دیدن در نقشه"
            buttonStyle="h-6 bg-[#417F56] py-0 w-full rounded-sm md:h-9 md:w-2/3"
          />
        </div>
      </div>
    </div>
  );
}
