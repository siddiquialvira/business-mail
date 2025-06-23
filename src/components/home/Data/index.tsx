"use client";

import GetAQuote from '@/components/GetAQuote';
import React, { useState, useEffect } from 'react';

const CounterSection = () => {
  const [years, setYears] = useState(0);
  const [clients, setClients] = useState(0);
  const [repeatCustomers, setRepeatCustomers] = useState(0);
  const [satisfaction, setSatisfaction] = useState(0);

  useEffect(() => {
    // Animation duration in milliseconds
    const duration = 2000;
    const startTime = Date.now();
    
    const animateCounters = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Calculate current values based on progress
      setYears(Math.floor(progress * 22));
      setClients(Math.floor(progress * 5247));
      setRepeatCustomers(Math.floor(progress * 82));
      setSatisfaction(Math.floor(progress * 90));
      
      if (progress < 1) {
        requestAnimationFrame(animateCounters);
      }
    };
    
    animateCounters();
  }, []);

  return (
    <section className="py-16 px-4 sm:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
          What Makes Us Proud
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Years in Business */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <span className="text-4xl font-bold text-blue-600">{years}</span>
            <p className="text-xl mt-2 text-gray-700">Years In Business</p>
          </div>
          
          {/* Clients Served */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <span className="text-4xl font-bold text-blue-600">{clients}</span>
            <p className="text-xl mt-2 text-gray-700">Clients Served</p>
          </div>
          
          {/* Repeat Customers */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <span className="text-4xl font-bold text-blue-600">{repeatCustomers}%</span>
            <p className="text-xl mt-2 text-gray-700">Repeat Customers</p>
          </div>
          
          {/* Satisfaction Score */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <span className="text-4xl font-bold text-blue-600">{satisfaction}%</span>
            <p className="text-xl mt-2 text-gray-700">Satisfaction Score</p>
          </div>
        </div>

        {/* Get A Quote Section - Centered */}
        <div className="mt-12">
          <GetAQuote />
        </div>
      </div>
    </section>
  );
};

export default CounterSection;
