'use client';

import React, { useEffect, useState } from 'react';

// Defines the type for the hero section data
type HeroData = {
  backgroundImage: string;
  headline: string;
  subheadline: string;
 };

const Hero = () => {
  // State to hold the hero data, initialized to null
  const [hero, setHero] = useState<HeroData | null>(null);

  useEffect(() => {
    // Ensure this endpoint correctly serves your content.json
    fetch('/api/content')
      .then(res => res.json())
      .then(data => setHero(data.hero));
  }, []);

  // Display a loading state or return null until data is fetched
  if (!hero) {
    return <section className="h-[90vh] bg-gray-800" />;
  }

  return (
    <section
      id="home"
      className="h-[90vh] bg-cover bg-center flex flex-col justify-center items-center text-white px-4 text-center relative"
      // The background image is now dynamic
      style={{ backgroundImage: `url(${hero.backgroundImage})` }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black opacity-40"></div>
      
      <div className="relative z-10 top-30 flex flex-col items-center">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          {hero.headline}
        </h1>
        <p className="mt-4 text-lg md:text-2xl max-w-2xl">
          {hero.subheadline}
        </p>
        
        
      </div>
    </section>
  );
};

export default Hero;