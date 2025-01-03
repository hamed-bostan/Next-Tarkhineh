import MyInput from "../../common/MyInput";

export default function IndividualProfile() {
  return (
    <>
      <span className="mb-6 block">مشخصات فردی متقاضی</span>
      <div className="flex gap-x-6">
        <MyInput placeholder="نام و نام خانوادگی" />
        <MyInput placeholder="کدملی" />
        <MyInput placeholder="شماره تماس" />
      </div>
    </>
  );
}
