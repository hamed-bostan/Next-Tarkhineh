import { Button } from "../ui/button";

export default function BranchCard({ data }) {
  const { title, image, address, phoneNumber, workTime } = data;

  return (
    <div className="text-[#717171] text-sm text-center border border-[#CBCBCB] rounded-md overflow-hidden">
      <img src={image} alt={title} className="h-28 w-full object-cover mb-1" />
      <span className="block text-sm font-bold mb-1 text-[#353535]">
        {title}
      </span>
      <p className="">آدرس: {address}</p>
      <p>شماره تماس: {phoneNumber}</p>
      <p>ساعت کاری: {workTime}</p>
      <div className="mt-3 mb-4 flex gap-x-4 px-4">
        <Button variant="outline" className="w-full text-sm h-6">
          صفحه شعبه
        </Button>
        <Button className="w-full text-sm h-6">دیدن در نقشه</Button>
      </div>
    </div>
  );
}
