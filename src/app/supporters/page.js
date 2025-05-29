"use client";

import React from 'react';

const contacts = [
  {
    country: "Supporters of TCF",
    contactPerson: "Sarah Memon",
    address: "Plot No. 20, Sector # 14, Near Brookes Chowrangi, Korangi Industrial Zone, Karachi. 74900, Pakistan.",
    email: "sarah.memon@tcf.org.pk",
  },
  {
    country: "Australia",
    contactPerson: "Sanam Thariani",
    address: "42 Foxall Road, Kellyville 2155, Sydney, Australia.",
    email: "info@tcfaustralia.org",
    phone: "+614-23331665",
    website: "www.tcfaustralia.org",
  },
  {
    country: "Canada",
    contactPerson: "Farhan Sadiq",
    address: "407 Iroquois Shore Rd., Unit 8, Suite 136, Oakville, ON L6H 1M3",
    email: "info@tcfcanada.org",
  },
  {
    country: "USA",
    contactPerson: "Ayesha Khan",
    address: "PO Box 488, Saddle River, NJ 07458, USA",
    email: "info@tcfusa.org",
    phone: "+1 866 922 8232",
    website: "www.tcfusa.org",
  },
  {
    country: "UK",
    contactPerson: "Ali Raza",
    address: "Unit 5, 132-138 Nathan Way, London SE28 0AU, United Kingdom",
    email: "info@tcf-uk.org",
    phone: "+44 20 3589 4916",
    website: "www.tcf-uk.org",
  },
];

const ContactCard = ({ data }) => (
  <div style={{ marginBottom: '2rem' }}>
    <h3>{data.country}</h3>
    <p><strong>Contact Person:</strong> {data.contactPerson}</p>
    <p><strong>Address:</strong> {data.address}</p>
    {data.email && <p><strong>Email:</strong> <a href={`mailto:${data.email}`}>{data.email}</a></p>}
    {data.phone && <p><strong>Phone:</strong> {data.phone}</p>}
    {data.website && <p><strong>Website:</strong> <a href={`https://${data.website}`} target="_blank">{data.website}</a></p>}
  </div>
);

const TCFSupportGroups = () => {
  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>TCF Support Groups</h2>
      {contacts.map((item, index) => (
        <ContactCard key={index} data={item} />
      ))}
    </div>
  );
};

export default TCFSupportGroups;
