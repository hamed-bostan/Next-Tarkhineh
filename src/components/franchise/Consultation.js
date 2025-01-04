import MyButton from "../common/MyButton";
import MyInput from "../common/MyInput";

export default function Consultation() {
  return (
    <div className="py-9">
      <span className="text-center block mb-6">دریافت مشاوره</span>
      <div className="flex gap-x-6 mb-6">
        <MyInput placeholder="نام و نام‌خانوادگی" />
        <MyInput placeholder="شماره تماس" />
        <MyInput placeholder="زمان ایده‌آل" />
      </div>
      <MyButton
        containerStyle="text-center"
        buttonStyle="bg-[#417F56] text-[#fff]"
        label="درخواست مشاوره"
      />
    </div>
  );
}
