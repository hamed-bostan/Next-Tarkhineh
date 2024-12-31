import MyButton from "../common/MyButton";

export default function ActionButton() {
  return (
    <div className="text-center mb-6">
      <MyButton
        imageSrc="/assets/images/icons/note.svg"
        variant="outline"
        buttonStyle="text-[#417F56] border border-[#417F56] px-4 h-8"
        iconStyle="w-4 h-4"
        alt="note icon"
        label="مشهاده منوی کامل"
      />
    </div>
  );
}
