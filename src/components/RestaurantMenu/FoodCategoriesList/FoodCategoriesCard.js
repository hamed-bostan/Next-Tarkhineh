export default function FoodCategoriesCard({ item }) {
  return (
    <div className="flex items-center gap-x-1 bg-[#EDEDED] rounded-md px-2 h-6">
      <span className="text-sm text-[#353535]">{item}</span>
      <img
        src="/assets/images/icons/arrow-left.svg"
        alt="arrow left icon"
        className="w-3 h-3"
      />
    </div>
  );
}
