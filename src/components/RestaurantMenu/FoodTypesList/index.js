import FoodTypesCard from "./FoodTypesCard";

const foodTypes = [
  { id: "1", type: "غذای اصلی" },
  { id: "2", type: "پیش غذا" },
  { id: "3", type: "دسر" },
  { id: "4", type: "نوشیدنی" },
];

export default function FoodTypesList() {
  return (
    <div className="flex gap-x-2 bg-[#EDEDED] mb-2 px-5 h-10">
      {foodTypes.map((item) => (
        <FoodTypesCard item={item.type} key={item.id} />
      ))}
    </div>
  );
}
