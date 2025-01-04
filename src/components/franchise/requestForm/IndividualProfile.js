import MyInput from "../../common/MyInput";

export default function IndividualProfile() {
  return (
    <div className="mb-10">
      <span className="mb-6 block">مشخصات فردی متقاضی</span>
      <div className="flex gap-x-4">
        <MyInput placeholder="نام و نام خانوادگی" />
        <MyInput placeholder="کدملی" />
        <MyInput placeholder="شماره تماس" />
      </div>
    </div>
  );
}
