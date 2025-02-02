import EmptyStateMessage from "@/components/common/EmptyStateMessage";
import FetchAddress from "./FetchAddress";
import Details from "./Details";
import { useSelector } from "react-redux";

export default function MyAddresses() {
  const address = useSelector((state) => state.address.address); // Get address from Redux

  return (
    <EmptyStateMessage
      text="شما در حال حاضر هیچ آدرسی ثبت نکرده‌اید!"
      button={true}
      buttonText="افزودن آدرس"
    />
  );
}

// return (
//   <>
//     {address ? (
//       <Details />
//     ) : (
//       <EmptyStateMessage
//         text="شما در حال حاضر هیچ آدرسی ثبت نکرده‌اید!"
//         button={true}
//         buttonText="افزودن آدرس"
//       />
//     )}
//   </>
// );
