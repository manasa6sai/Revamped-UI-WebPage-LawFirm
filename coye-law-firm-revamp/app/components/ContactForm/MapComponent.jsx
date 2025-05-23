'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for Leaflet icon issue
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

export default function MapComponent() {
  const [mapInitialized, setMapInitialized] = useState(false);

  useEffect(() => {
    // To prevent the map from being initialized multiple times
    if (!mapInitialized) {
      setMapInitialized(true);
    }
  }, [mapInitialized]);

  if (!mapInitialized) return null;

  return (
    <MapContainer
      center={[28.5383, -81.3792]}
      zoom={12}
      scrollWheelZoom={false}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[28.5383, -81.3792]}>
        <Popup>Orlando, FL - Service Location</Popup>
      </Marker>
    </MapContainer>
  );
}
