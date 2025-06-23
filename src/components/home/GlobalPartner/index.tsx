"use client";

import React, { useEffect, useRef, useState } from "react";

const PartnersSection = () => {
  const partnerImages = [
    '/google-cloud-partner-business-solutions-skynetiks-technologies.png',
    '/microsoft-business-solutions-partner-skynetiks-technologies.png',
    '/amazon-web-services-cloud-solutions-partner-skynetiks-technologies.png',
    '/azure-cloud-partner-business-solutions-skynetiks-technologies.png',
    '/acronis-business-data-protection-partner-skynetiks-technologies.png',
    '/sap-business-technology-partner-skynetiks-technologies.png',
  ];

  // Duplicate images for infinite loop illusion
  const images = [...partnerImages, ...partnerImages];

  const [offset, setOffset] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prev) => (prev + 1) % partnerImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 px-8 text-center bg-gray-50 overflow-hidden">
      <h2 className="text-3xl mb-12 text-gray-800">We work with Global Partners</h2>
      <div className="relative w-full overflow-hidden max-w-6xl mx-auto">
        <div
          ref={sliderRef}
          className="flex transition-transform duration-1000 ease-in-out"
          style={{
            transform: `translateX(-${offset * (100 / images.length)}%)`,
            width: `${images.length * (100 / images.length)}%`,
          }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="flex justify-center items-center p-4 h-24 w-[16.66%] min-w-[16.66%]"
            >
              <img
                src={image}
                alt={`Partner ${index + 1}`}
                className="max-w-full max-h-full object-contain hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
