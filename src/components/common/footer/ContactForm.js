import { Textarea } from "@/components/ui/textarea";
import MyInput from "../MyInput";
import MyButton from "../MyButton";

export default function ContactForm() {
  return (
    <div className="hidden md:block">
      <h3>پیام به ترخینه </h3>
      <MyInput placeholder="نام و نام خانوادگی" />
      <MyInput placeholder="شماره تماس" />
      <MyInput placeholder="آدرس ایمیل (اختیاری)" />
      <Textarea placeholder="پیام شما" />
      <MyButton label="ارسال پیام" variant="outline" />
    </div>
  );
}
