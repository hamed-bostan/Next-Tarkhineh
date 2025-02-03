import { Input } from "../ui/input";

export default function MyInput({
  placeholder,
  style,
  value,
  onChange,
  type = "text",
}) {
  return (
    <Input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`border border-[#CBCBCB] placeholder:text-xs text-xs ${style}`}
    />
  );
}
