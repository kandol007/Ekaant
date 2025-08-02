'use client';

import React, { useEffect, useState } from 'react';

// --- Updated Type Definitions to match the new JSON structure ---
type RightContent = {
  contact: string;
  email: string;
  Instagram: string;
  Location: string;
};

type FooterData = {
  leftContent: string;
  rightContent: RightContent;
};

// --- Updated Footer Component ---
const Footer = () => {
  const [footer, setFooter] = useState<FooterData | null>(null);

  useEffect(() => {
    // This fetch call remains the same
    fetch('/api/content')
      .then(res => res.json())
      .then(data => setFooter(data.footer));
  }, []);

  // Render a placeholder or nothing while data is loading
  if (!footer) {
    return <footer className="bg-[#0E2D1D] p-8"></footer>;
  }

  return (
    <footer className="bg-[#003E17] text-white p-8 md:p-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
        
        {/* Left Side: A friendly message */}
        <div className="md:w-1/2">
          <h3 className="text-2xl font-semibold">{footer.leftContent}</h3>
        </div>

        {/* Right Side: Contact Details */}
        <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-sm">
          {/* Map over the entries of the rightContent object to display them */}
          {Object.entries(footer.rightContent).map(([key, value]) => (
            <div key={key}>
              <p className="font-light opacity-80 uppercase">{key}</p>
              <p className="font-semibold">{value.split(': ')[1]}</p>
            </div>
          ))}
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
