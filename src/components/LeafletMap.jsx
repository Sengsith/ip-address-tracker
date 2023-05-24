import React, { useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

import iconLocation from "../assets/icon-location.svg";

const LeafletMap = ({ resultObject }) => {
  const { location } = resultObject;
  const markerPosition = {
    lat: location?.lat || 40.65,
    lng: location?.lng || -73.94,
  };
  const customIcon = L.icon({
    iconUrl: iconLocation,
    iconSize: [50, 61],
  });
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current) {
      const map = mapRef.current;
      map.flyTo(markerPosition, map.getZoom(), {
        animate: true,
        duration: 3,
      });
    }
  }, [resultObject]);

  // Todo: Remove ability to click via + or - to zoom in or out
  return (
    <MapContainer
      ref={mapRef}
      center={
        location == undefined ? [40.65, -73.94] : [location.lat, location.lng]
      }
      zoom={18}
      scrollWheelZoom={true}
      zoomControl={false}
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
