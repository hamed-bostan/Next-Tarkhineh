"use client";

import { AddressContext } from "@/context/AddressContext";
import { useAddressDialog } from "@/context/AddressDialogContext";
import { deleteAddress } from "@/redux/reducers/addressReducer";
import { Pencil, Trash2 } from "lucide-react";
import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function UserAddressList() {
  const dispatch = useDispatch();
  const addresses = useSelector((state) => state.address.addresses); // Get addresses from Redux
  const { openAddressDialog } = useAddressDialog(); // Access the context values

  const { setEditingAddress } = useContext(AddressContext);

  const handleEdit = (address) => {
    setEditingAddress(address); // Set the editing address
    openAddressDialog();
  };

  const handleDelete = (id) => {
    dispatch(deleteAddress(id)); // Dispatch the delete action
  };

  return (
    <div className="grid gap-y-2 md:grid-cols-2 md:gap-x-2 lg:gap-x-4">
      {addresses.map((item, index) => (
        <div
          key={index}
          className="bg-[#F9F9F9] border border-[#CBCBCB] rounded-sm p-4 text-xs text-[#717171] grid grid-cols-3"
        >
          <p className="text-[#353535] col-span-2 mb-2">{item.address}</p>
          <div className="flex gap-x-3 mr-auto">
            <Pencil
              onClick={() => handleEdit(item)}
              className="w-4 h-4 cursor-pointer"
              color="#353535"
            />
            <Trash2
              onClick={() => handleDelete(item.id)}
              className="w-4 h-4 cursor-pointer"
              color="#353535"
            />
          </div>
          <span>{item.title}</span>
          <span>{item.name}</span>
          <span className="mr-auto">{item.phoneNumber}</span>
        </div>
      ))}
    </div>
  );
}
