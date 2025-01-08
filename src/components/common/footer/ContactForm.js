import { Textarea } from "@/components/ui/textarea";
import MyInput from "../MyInput";
import MyButton from "../MyButton";

export default function ContactForm() {
  return (
    <div className="hidden md:block">
      <h3 className="text-base mb-3 font-medium text-[#fff]">پیام به ترخینه</h3>
      <div className="grid grid-cols-2 grid-rows-3 gap-x-5 gap-y-2 mb-5">
        <MyInput
          placeholder="نام و نام خانوادگی"
          style="border-[#717171] text-[#EDEDED] placeholder:text-[#F9F9F9] placeholder:text-sm"
        />
        <MyInput
          placeholder="شماره تماس"
          style="border-[#717171] text-[#EDEDED] placeholder:text-[#F9F9F9] placeholder:text-sm"
        />
        <MyInput
          placeholder="آدرس ایمیل (اختیاری)"
          style="border-[#717171] text-[#EDEDED] placeholder:text-[#F9F9F9] placeholder:text-sm"
        />
        <Textarea
          placeholder="پیام شما"
          className="row-start-1 col-start-2 row-span-full resize-none text-[#EDEDED] placeholder:text-[#F9F9F9] border border-[#717171] placeholder:text-sm"
        />
      </div>
      <MyButton
        label="ارسال پیام"
        variant="outline"
        buttonStyle="col-start-2 bg-transparent justify-self-end w-1/3 lg:w-1/4 border-[#717171] text-[#EDEDED] hover:bg-[#717171] hover:text-[#EDEDED]"
      />
    </div>
  );
}
