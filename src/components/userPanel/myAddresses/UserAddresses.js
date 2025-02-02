import { Pencil, Trash2 } from "lucide-react";

const information = [
  {
    id: "1",
    address: "تهران: اقدسیه، بزرگراه ارتش، مجتمع شمیران سنتر، طبقه ۱۰",
    title: "محل کار",
    name: "سردار وظیفه",
    phoneNumber: "09123456789",
  },
  {
    id: "2",
    address: "تهران: اقدسیه، بزرگراه ارتش، مجتمع شمیران سنتر، طبقه ۱۰",
    title: "محل کار",
    name: "حسین حسینی",
    phoneNumber: "09123456789",
  },
  {
    id: "3",
    address: "تهران: اقدسیه، بزرگراه ارتش، مجتمع شمیران سنتر، طبقه ۱۰",
    title: "محل کار",
    name: "محمد محمدی",
    phoneNumber: "09123456789",
  },
];

export default function UserAddresses() {
  return (
    <div className="flex flex-col gap-y-2">
      {information.map((item) => (
        <div
          key={item.id}
          className="bg-[#F9F9F9] border border-[#CBCBCB] rounded-sm p-4 text-xs text-[#717171] grid grid-cols-3"
        >
          <p className="text-[#353535] col-span-2 mb-2">{item.address}</p>
          <div className="flex gap-x-3 mr-auto">
            <Pencil className="w-4 h-4 cursor-pointer" color="#353535" />
            <Trash2 className="w-4 h-4 cursor-pointer" color="#353535" />
          </div>
          <span>{item.title}</span>
          <span>{item.name}</span>
          <span className="mr-auto">{item.phoneNumber}</span>
        </div>
      ))}
    </div>
  );
}
