import { Separator } from "@/components/ui/separator";

export default function HeaderDesktop({ label }) {
  return (
    <div className="hidden md:block mb-8">
      <span className="block mb-2 text-[#353535]">{label}</span>
      <Separator className="bg-[#CBCBCB]" />
    </div>
  );
}
