import { Separator } from "@/components/ui/separator";

export default function HeaderDesktop({ label, style }) {
  return (
    <div className={`hidden md:block ${style}`}>
      <span className="block mb-2 text-[#353535]">{label}</span>
      <Separator className="bg-[#CBCBCB]" />
    </div>
  );
}
