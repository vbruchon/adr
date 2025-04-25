"use client";

import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import { MapContainer, Marker, TileLayer, useMap } from "react-leaflet";

export default function Map() {
  return (
    <MapContainer
      center={[45.018910574657674, 5.037158156868926]}
      zoom={16}
      scrollWheelZoom={false}
      className="w-full h-[450px] rounded-2xl"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[45.018910574657674, 5.037158156868926]} />
    </MapContainer>
  );
}
