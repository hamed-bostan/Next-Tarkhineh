export default function FoodCategoriesCard({ item }) {
  return (
    <div className="flex items-center gap-x-1 bg-[#EDEDED] rounded-md px-2 h-6 md:rounded-xl md:h-8">
      <span className="text-xs text-[#353535] md:text-sm">{item}</span>
      <img
        src="/assets/images/icons/arrow-left.svg"
        alt="arrow left icon"
        className="w-3 h-3 md:w-4 md:h-4"
      />
    </div>
  );
}
