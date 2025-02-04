"use client";

import { useContext, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  useMapEvents,
  useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { LocateFixed, MapPin } from "lucide-react";
import MyButton from "@/components/common/MyButton";
import { AddressContext } from "@/context/AddressContext";
import {
  fetchAddress,
  handleGetCurrentLocation,
} from "@/components/utils/locationUtils";

const customIcon = new L.Icon({
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

export default function LocationPicker({
  onLocationSelect,
  setIsInformedAddress,
  onClose,
}) {
  const [position, setPosition] = useState([36.2976, 59.5671]); // Default: Mashhad Azadi Square
  const [address, setAddress] = useState("مشهد، میدان آزادی");
  const { setSelectedAddress } = useContext(AddressContext);

  const handleGetLocationClick = () => {
    handleGetCurrentLocation(
      setPosition,
      fetchAddress,
      setAddress,
      onLocationSelect
    );
  };

  const handleConfirmLocation = () => {
    if (!address) {
      return;
    }
    setSelectedAddress(address); // Store in Context api
    setIsInformedAddress(true);
    onClose();
  };

  // Click event handler for setting location
  const LocationMarker = () => {
    useMapEvents({
      click: async (e) => {
        const { lat, lng } = e.latlng;
        setPosition([lat, lng]);
        await fetchAddress(lat, lng, setAddress);
        onLocationSelect(lat, lng);
      },
    });

    return position ? <Marker position={position} icon={customIcon} /> : null;
  };

  // Update the map center when the position changes, with increased zoom level
  const MapCenter = () => {
    const map = useMap();
    map.setView(position, 14); // Zoom in more by setting a higher zoom level (e.g., 14)
    return null;
  };

  return (
    <div className="w-full h-[25rem] relative">
      {/* Map with default location set to Mashhad Azadi Square */}
      <MapContainer
        center={position}
        zoom={12} // Default zoom level (can be adjusted)
        className="h-full w-full"
        style={{ zIndex: 0 }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <LocationMarker />
        <MapCenter /> {/* Update the map center */}
      </MapContainer>

      <div
        className="bg-[#fff] rounded-sm shadow-2xl absolute flex items-center justify-center gap-x-1 top-14 right-5 h-8 w-24 cursor-pointer"
        onClick={handleGetLocationClick}
        style={{ zIndex: 1000 }}
      >
        <LocateFixed color="#417F56" size={16} />
        <span className="text-xs text-[#417F56]">موقعیت من</span>
      </div>
      {address && (
        <div className="flex items-center gap-x-1 bg-[#fff] shadow-md rounded-sm p-2 absolute bottom-16 right-4 left-4">
          <MapPin size={16} color="#353535" />
          <p className="text-xs text-[#353535]">{address}</p>
        </div>
      )}
      <MyButton
        label="ثبت موقعیت"
        buttonStyle="bg-[#417F56] absolute bottom-5 right-1/2 translate-x-1/2 w-36 h-8"
        onClick={handleConfirmLocation}
      />
    </div>
  );
}
