"use client";
import { useState } from "react";
import LocationPicker from "./LocationPicker";

export default function MyAddresses() {
  const [location, setLocation] = useState(null);
  const [address, setAddress] = useState(null);

  // Function to get address from coordinates
  const fetchAddress = async (lat, lon) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`
      );
      const data = await response.json();
      return data.display_name; // Full address
    } catch (error) {
      console.error("Error fetching address:", error);
      return "Address not found";
    }
  };

  // Function to handle location selection
  const handleLocationSelect = async (lat, lon) => {
    setLocation({ lat, lon });

    const fetchedAddress = await fetchAddress(lat, lon);
    setAddress(fetchedAddress);
  };

  return (
    <div className="">
      <LocationPicker
        onLocationSelect={handleLocationSelect}
        address={address}
      />
    </div>
  );
}
