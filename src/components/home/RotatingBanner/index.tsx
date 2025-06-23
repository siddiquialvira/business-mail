'use client';

import { useState, useEffect } from 'react';
import clsx from 'clsx';

const slides = [
  {
    title: "BUSINESS MAIL, SATISFIES THE NEED.",
    subtitle: "Your Business just need a Right Move!",
    list: [
      "Enterprise-grade email solutions",
      "24/7 technical support",
      "Secure and reliable infrastructure",
      "Seamless integration with business tools"
    ],
    from: "from-blue-500",
    to: "to-purple-600"
  },
  {
    title: "BUSINESS MAIL MIGRATION IS AWESOME",
    subtitle: "Your Business just need a Right Move!",
    list: [
      "Zero data loss migration",
      "Minimal downtime transition",
      "Full mailbox migration (emails, contacts, calendars)",
      "Post-migration support and training"
    ],
    from: "from-green-500",
    to: "to-teal-600"
  },
  {
    title: "GOOGLE WORKSPACE IS AWESOME!",
    subtitle: "Google is the Ultimate Technology.",
    list: [
      "Certified Google Workspace Partner",
      "Direct escalation to Google support",
      "Admin console management",
      "Security & compliance configuration"
    ],
    from: "from-orange-500",
    to: "to-red-600"
  },
  {
    title: "Premium Services",
    subtitle: "Quality that exceeds expectations",
    list: [
      "SLA-based enterprise support",
      "Telephonic and screen-sharing assistance",
      "Onboarding and user training",
      "Custom workflow implementation"
    ],
    from: "from-purple-500",
    to: "to-pink-600"
  },
  {
    title: "Get Started Today",
    subtitle: "Your journey begins here",
    list: [
      "Free initial consultation",
      "Custom migration planning",
      "Dedicated implementation team",
      "Ongoing optimization services"
    ],
    from: "from-indigo-500",
    to: "to-blue-600"
  }
];

export default function RotatingBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isAutoPlaying && !isHovering) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
      }, 5000); // change slide every 5s
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, isHovering]);

  const goToPrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  const currentSlide = slides[currentIndex];

  return (
    <div 
      className={clsx(
        "relative h-[500px] text-white transition-all duration-1000 ease-in-out",
        `bg-gradient-to-r ${currentSlide.from} ${currentSlide.to}`
      )}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Navigation Arrows */}
      <button
        onClick={goToPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-3 rounded-full z-10 transition-all"
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-3 rounded-full z-10 transition-all"
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slide Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{currentSlide.title}</h1>
          <p className="text-lg md:text-xl mb-8">{currentSlide.subtitle}</p>
          <div className="p-6 md:p-8 rounded-lg max-w-2xl mx-auto bg-white/10 backdrop-blur-sm">
          
            <ul className="text-center space-y-2 text-sm md:text-base">
              {currentSlide.list.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={clsx(
              "w-3 h-3 rounded-full transition-all",
              currentIndex === index ? "bg-white" : "bg-white/50 hover:bg-white/70"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}