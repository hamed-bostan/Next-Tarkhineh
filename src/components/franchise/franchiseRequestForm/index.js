import AddressProperty from "./AddressProperty";
import IndividualProfile from "./IndividualProfile";

export default function FranchiseRequestForm() {
  return (
    <div className="py-9">
      <span className="text-center mb-11 block">فرم درخواست نمایندگی</span>
      <IndividualProfile />
      <AddressProperty />
    </div>
  );
}
