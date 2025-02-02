"use client";

import { useState } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { LocateFixed, MapPin } from "lucide-react";
import MyButton from "@/components/common/MyButton";

// Fix missing marker issue in Leaflet
const customIcon = new L.Icon({
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

export default function LocationPicker({ onLocationSelect }) {
  const [position, setPosition] = useState([36.2976, 59.5671]); // Default: Mashhad Azadi Square
  const [address, setAddress] = useState("مشهد، میدان آزادی");

  // Reverse geocoding function to get Persian address
  const fetchAddress = async (lat, lng) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&accept-language=fa`
      );
      const data = await response.json();

      if (data && data.display_name) {
        let parts = data.display_name.split(","); // ✅ Convert address into an array

        // ✅ Extract most relevant parts: Street, City, Province, Country
        let filteredAddress = parts.slice(0, 3).join(", "); // Take the first 3 most important parts

        setAddress(filteredAddress.trim()); // ✅ Set cleaned address
      } else {
        setAddress("آدرس یافت نشد");
      }
    } catch (error) {
      console.error("خطا در دریافت آدرس:", error);
      setAddress("خطا در دریافت آدرس");
    }
  };

  // Click event handler for setting location
  const LocationMarker = () => {
    useMapEvents({
      click: async (e) => {
        const { lat, lng } = e.latlng;
        setPosition([lat, lng]);
        await fetchAddress(lat, lng);
        onLocationSelect(lat, lng);
      },
    });

    return position ? <Marker position={position} icon={customIcon} /> : null;
  };

  console.log(address);

  return (
    <div className="w-full h-[400px] relative">
      {/* Map with default location set to Mashhad Azadi Square */}
      <MapContainer
        center={position}
        zoom={12}
        className="h-full w-full"
        style={{ zIndex: 0 }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <LocationMarker />
      </MapContainer>

      {/* "موقعیت من" Button */}
      <div
        className="bg-[#fff] rounded-sm shadow-2xl absolute flex items-center justify-center gap-x-1 top-5 right-5 h-8 w-24"
        style={{ zIndex: 1000 }}
      >
        <LocateFixed color="#417F56" size={16} />
        <span className="text-xs text-[#417F56]">موقعیت من</span>
      </div>

      {/* Address Display */}
      {address && (
        <div className="flex items-center gap-x-1 bg-[#fff] shadow-md rounded-sm p-2 absolute bottom-16 right-4 left-4">
          <MapPin size={16} color="#353535" />
          <p className="text-xs text-[#353535]">{address}</p>
        </div>
      )}

      {/* Submit Button */}
      <MyButton
        label="ثبت موقعیت"
        buttonStyle="bg-[#417F56] absolute bottom-5 right-1/2 translate-x-1/2 w-36 h-8"
      />
    </div>
  );
}
