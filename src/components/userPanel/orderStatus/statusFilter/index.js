import FilterCard from "./FilterCard";

const filterLists = ["همه", "جاری", "تحویل شده", "لغو شده"];

export default function StatusFilter({
  setSelectedCategory,
  selectedCategory,
}) {
  return (
    <div className="flex gap-2 flex-wrap mb-5 md:gap-3 ">
      {filterLists.map((item, index) => (
        <FilterCard
          item={item}
          key={index}
          setSelectedCategory={setSelectedCategory}
          isSelected={selectedCategory === item}
        />
      ))}
    </div>
  );
}
