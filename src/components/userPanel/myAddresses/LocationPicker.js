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

export default function LocationPicker({
  onLocationSelect,
  address,
}) {
  const [position, setPosition] = useState(null);

  // Click event handler for setting location
  const LocationMarker = () => {
    useMapEvents({
      click(e) {
        setPosition([e.latlng.lat, e.latlng.lng]);
        onLocationSelect(e.latlng.lat, e.latlng.lng);
      },
    });

    return position ? <Marker position={position} icon={customIcon} /> : null;
  };

  return (
    <div className="w-full h-[400px] relative">
      {/* Set default location to Mashhad Azadi Square */}
      <MapContainer
        center={[36.2976, 59.5671]}
        zoom={12}
        className="h-full w-full"
        style={{ zIndex: 0 }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <LocationMarker />
      </MapContainer>
      <div
        className="bg-[#fff] rounded-sm shadow-2xl absolute flex items-center justify-center gap-x-1 top-5 right-5 h-8 w-24"
        style={{ zIndex: 1000 }}
      >
        <LocateFixed color="#417F56" size={16} />
        <span className="text-xs text-[#417F56]">موقعیت من</span>
      </div>
      {address && (
        <div className="flex items-center gap-x-1 bg-[#fff] shadow-md rounded-sm p-2 absolute bottom-8 right-4 left-4">
          <div>
            <MapPin size={16} color="#353535" />
          </div>
          <p className="text-xs text-[#353535]">{address}</p>
        </div>
      )}
      <MyButton
        label="ثبت موقعیت"
        buttonStyle="bg-[#417F56] absolute bottom-5 right-1/2 translate-x-1/2 w-36 h-8"
      />
    </div>
  );
}
