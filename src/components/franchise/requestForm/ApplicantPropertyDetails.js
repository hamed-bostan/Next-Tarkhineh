import MyInput from "@/components/common/MyInput";

export default function ApplicantPropertyDetails() {
  return (
    <div className="mb-12">
      <span className="mb-6 block">مشخصات ملک متقاضی</span>
      <div className="flex gap-x-4">
        <MyInput placeholder="نوع مالکیت" />
        <MyInput placeholder="مساحت ملک (متر مربع)" />
        <MyInput placeholder="سن بنا" />
      </div>
    </div>
  );
}
