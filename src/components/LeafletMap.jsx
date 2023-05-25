import React, { useState, useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

import iconLocation from "../assets/icon-location.svg";

const LeafletMap = ({ resultObject }) => {
  // Get location object for readability
  const { location } = resultObject;
  // markerPosition also used for map coords
  const markerPosition = {
    lat: location.lat,
    lng: location.lng,
  };
  const customIcon = L.icon({
    iconUrl: iconLocation,
    iconSize: [50, 61],
  });
  // Check if the map ever changes to call flyTo
  const mapRef = useRef(null);
  // Stop map from jittering on initial mount
  const [isInitialMount, setIsInitialMount] = useState(true);

  // Call flyTo whenever our resultObject changes
  useEffect(() => {
    if (mapRef.current) {
      const map = mapRef.current;
      map.flyTo(markerPosition, map.getZoom(), {
        animate: isInitialMount ? false : true,
        duration: 3,
      });
      // No longer initial mount
      setIsInitialMount(false);
    }
  }, [resultObject]);

  return (
    <MapContainer
      ref={mapRef}
      center={markerPosition}
      zoom={18}
      scrollWheelZoom={true}
      zoomControl={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={markerPosition} icon={customIcon}></Marker>
    </MapContainer>
  );
};

export default LeafletMap;
