import { Input } from "../ui/input";

export default function MyInput({ placeholder, style }) {
  return (
    <Input
      type="text"
      placeholder={placeholder}
      className={`border border-[#CBCBCB] placeholder:text-xs text-xs ${style}`}
    />
  );
}
