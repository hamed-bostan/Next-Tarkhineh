import { Separator } from "@/components/ui/separator";
import Header from "./Header";
import Details from "./Details";

export default function Address() {
  return (
    <div className="border border-[#CBCBCB] rounded-lg p-4 pb-6 mb-3">
      <Header />
      <Separator className="mb-4" />
      <Details />
    </div>
  );
}
