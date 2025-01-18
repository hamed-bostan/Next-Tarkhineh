import HeaderMobile from "./HeaderMobile";
import HeaderDesktop from "./HeaderDesktop";

export default function Header({ setActiveTab, activeTab }) {
  return (
    <>
      <HeaderMobile setActiveTab={setActiveTab} activeTab={activeTab} />
      <HeaderDesktop setActiveTab={setActiveTab} activeTab={activeTab} />
    </>
  );
}
