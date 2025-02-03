"use client";

import { useContext, useState } from "react";
import MyButton from "@/components/common/MyButton";
import MyInput from "@/components/common/MyInput";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { useDispatch } from "react-redux";
import { storeAddress } from "@/redux/reducers/addressReducer";
import { AddressContext } from "@/context/AddressContext";

export default function AddressForm() {
  // Local state to hold title and phone number
  const [title, setTitle] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [familyName, setFamilyName] = useState("");
  const { selectedAddress } = useContext(AddressContext);

  const dispatch = useDispatch();

  function handleFormSubmit(e) {
    e.preventDefault();

    if (!title || !phoneNumber || !familyName) {
      console.error("Title or Phone number or familyName is missing!");
      return;
    }

    // Dispatch an action to store the address, title, and phone number in Redux
    dispatch(
      storeAddress({
        title,
        phoneNumber,
        name: familyName,
        address: selectedAddress,
      })
    );

    setTitle("");
    setPhoneNumber("");
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
        value={selectedAddress}
        readOnly
      />
      <div className="flex justify-between mt-6 gap-x-4">
        <MyButton
          variant="outline"
          label="انصراف"
          buttonStyle="text-[#417F56] border-none hover:text-[#fff] w-full shadow-none hover:shadow-sm"
        />
        <MyButton
          label="ثبت آدرس"
          buttonStyle="bg-[#417F56] border border-[#417F56] w-full"
          type="submit"
        />
      </div>
    </form>
  );
}
