import Link from "next/link";
import MyButton from "../common/MyButton";
import { NotepadText } from "lucide-react";

export default function ActionButton() {
  return (
    <div className="text-center mb-6 w-fit mx-auto">
      <Link href="/menu">
        <MyButton
          icon={<NotepadText />}
          variant="outline"
          buttonStyle="text-[#417F56] border border-[#417F56] px-4 h-8 md:hover:text-[#fff] md:h-9"
          iconStyle="w-4 h-4 md:w-5 md:h-5"
          alt="note icon"
          label="مشهاده منوی کامل"
        />
      </Link>
    </div>
  );
}
