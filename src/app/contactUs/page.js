"use client";
import ContactUs from '../school_office/page';
import Suporters from '../supporters/page'
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const ContactMap = dynamic(() => import('./ContactMap'), { ssr: false });
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

      {renderMap && <ContactMap />}
      <ContactUs/>
      <Suporters/>
    </div>
  );
};

export default ContactUsPage;
