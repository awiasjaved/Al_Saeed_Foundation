"use client";
import ContactUs from '../school_office/page';
import Suporters from '../supporters/page'
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, CircleMarker, Popup, useMap } from 'react-leaflet';
import { useEffect, useState } from 'react';
// Sample coordinates
const locations = [
  { name: "Lahore, Pakistan", coords: [31.5204, 74.3587] },
  { name: "Sahiwal, Pakistan", coords: [30.6667, 73.1064] },
];

// Auto-fit map to marker bounds
const FitToMarkers = ({ bounds }) => {
  const map = useMap();
  useEffect(() => {
    map.fitBounds(bounds);
  }, [map, bounds]);
  return null;
};

const ContactUsPage = () => {
  const [renderMap, setRenderMap] = useState(false);

  useEffect(() => {
    setRenderMap(true);
  }, []);

  const bounds = locations.map(loc => loc.coords);

  return (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '1rem' }}>Our Global Locations</h1>

      {renderMap && (
        <div
          style={{
            marginTop: '7rem',
            borderRadius: '16px',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
            overflow: 'hidden',
            border: '1px solid #ddd',
          }}
        >
          <MapContainer
            style={{ height: '500px', width: '100%' }}
            scrollWheelZoom={false}
          >
            {/* ✅ Modern Light Tile Style */}
            <TileLayer
              url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
              attribution='&copy; <a href="https://carto.com/">CARTO</a>'
            />

            <FitToMarkers bounds={bounds} />

            {locations.map((loc, idx) => (
              <CircleMarker
                key={idx}
                center={loc.coords}
                radius={10}
                fillOpacity={0.9}
                stroke={true}
                weight={1}
                pathOptions={{
                  color: "#006400",
                  fillColor: "#28a745",
                }}
              >
                <Popup>{loc.name}</Popup>
              </CircleMarker>
            ))}
          </MapContainer>
        </div>
      )}
      <ContactUs/>
      <Suporters/>
    </div>
  );
};

export default ContactUsPage;
