"use client";

import { useContext, useEffect, useState } from "react";
import MyButton from "@/components/common/MyButton";
import MyInput from "@/components/common/MyInput";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { useDispatch, useSelector } from "react-redux";
import { storeAddress, updateAddress } from "@/redux/reducers/addressReducer";
import { AddressContext } from "@/context/AddressContext";
import { useAddressDialog } from "@/context/AddressDialogContext";

export default function AddressForm() {
  // Local state to hold title and phone number
  const [title, setTitle] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [familyName, setFamilyName] = useState("");
  const {
    selectedAddress,
    setSelectedAddress,
    editingAddress,
    setEditingAddress,
  } = useContext(AddressContext);

  const { closeAddressDialog } = useAddressDialog(); // Access the context values
  const addresses = useSelector((state) => state.address.addresses); // Get addresses from Redux

  const dispatch = useDispatch();

  useEffect(() => {
    if (editingAddress) {
      setTitle(editingAddress.title || "");
      setPhoneNumber(editingAddress.phoneNumber || "");
      setFamilyName(editingAddress.name || "");
      setSelectedAddress(editingAddress.address || ""); // Ensure correct field
    }
  }, [editingAddress, setSelectedAddress]);

  function handleFormSubmit(e) {
    e.preventDefault();

    if (!title || !phoneNumber || !familyName) {
      console.error("Title or Phone number or familyName is missing!");
      return;
    }

    if (editingAddress) {
      dispatch(
        updateAddress({
          id: editingAddress.id, // Keep the same ID
          title,
          phoneNumber,
          name: familyName,
          address: addresses.address,
        })
      );
    } else {
      dispatch(
        storeAddress({
          title,
          phoneNumber,
          name: familyName,
          address: selectedAddress,
        })
      );
    }

    closeAddressDialog();
    setEditingAddress(null);
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <MyInput
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="عنوان آدرس"
        style="placeholder:text-[#717171] text-[#353535] mb-3"
      />
      <div className="flex items-center gap-x-1 mb-2">
        <Checkbox id="term1" />
        <label htmlFor="term1" className="text-xs text-[#353535]">
          تحویل گیرنده خودم هستم.
        </label>
      </div>
      <MyInput
        placeholder="نام و نام‌خانوادگی تحویل گیرنده"
        style="placeholder:text-[#717171] text-[#353535] mb-3"
        value={familyName}
        onChange={(e) => setFamilyName(e.target.value)}
      />
      <MyInput
        type="number"
        placeholder="شماره همراه تحویل گیرنده"
        style="placeholder:text-[#717171] text-[#353535] mb-3"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <Textarea
        placeholder="آدرس دقیق شما"
        className="resize-none text-[#353535] placeholder:text-[#717171] border border-[#CBCBCB] placeholder:text-xs text-xs"
        onChange={(e) => setSelectedAddress(e.target.value)}
        value={selectedAddress}
      />
      <div className="flex justify-between mt-6 gap-x-4">
        <MyButton
          variant="outline"
          label="انصراف"
          buttonStyle="text-[#417F56] border-none hover:text-[#fff] w-full shadow-none hover:shadow-sm"
        />
        <MyButton
          label={editingAddress ? "ویرایش آدرس" : "ثبت آدرس"}
          buttonStyle="bg-[#417F56] border border-[#417F56] w-full"
          type="submit"
        />
      </div>
    </form>
  );
}
