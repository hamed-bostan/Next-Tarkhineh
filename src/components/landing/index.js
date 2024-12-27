import Header from "./Header";
import MenuSection from "./MenuSection";
import DescriptionSection from "./DescriptionSection";
import BranchOverview from "./BranchOverview";

export default function index() {
  return (
    <>
      <Header />
      <MenuSection />
      <DescriptionSection />
      <BranchOverview />
    </>
  );
}
