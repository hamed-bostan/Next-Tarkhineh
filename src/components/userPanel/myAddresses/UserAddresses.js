import { deleteAddress } from "@/redux/reducers/addressReducer";
import { Pencil, Trash2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";

export default function UserAddresses() {
  const dispatch = useDispatch();
  const addresses = useSelector((state) => state.address.addresses); // Get addresses from Redux

  const handleDelete = (id) => {
    dispatch(deleteAddress(id)); // Dispatch the delete action
  };

  return (
    <div className="flex flex-col gap-y-2">
      {addresses.map((item, index) => (
        <div
          key={index}
          className="bg-[#F9F9F9] border border-[#CBCBCB] rounded-sm p-4 text-xs text-[#717171] grid grid-cols-3"
        >
          <p className="text-[#353535] col-span-2 mb-2">{item.address}</p>
          <div className="flex gap-x-3 mr-auto">
            <Pencil className="w-4 h-4 cursor-pointer" color="#353535" />
            <Trash2
              onClick={() => handleDelete(item.id)}
              className="w-4 h-4 cursor-pointer"
              color="#353535"
            />
          </div>
          <span>{item.title}</span>
          <span>محمد محمدی</span>
          <span className="mr-auto">{item.phoneNumber}</span>
        </div>
      ))}
    </div>
  );
}
