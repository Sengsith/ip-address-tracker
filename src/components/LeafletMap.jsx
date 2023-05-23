import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

import iconLocation from "../assets/icon-location.svg";

const LeafletMap = ({ resultObject }) => {
  const { location } = resultObject;
  const customIcon = L.icon({
    iconUrl: iconLocation,
    iconSize: [50, 61],
  });

  // Todo: Move map when user inputs another IP address into user input

  return (
    <MapContainer
      center={
        location == undefined ? [40.65, -73.94] : [location.lat, location.lng]
      }
      zoom={18}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker
        position={
          location == undefined ? [40.65, -73.94] : [location.lat, location.lng]
        }
        icon={customIcon}
      ></Marker>
    </MapContainer>
  );
};

export default LeafletMap;
