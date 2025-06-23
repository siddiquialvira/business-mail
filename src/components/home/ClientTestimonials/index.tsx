"use client";

import React, { useState, useEffect } from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Dianna Kersey",
      title: "CEO",
      quote: "When I first contacted Skynetiks Technologies Pvt. Ltd. about my project, I was skeptical not because I had doubts about their professional expertise and abilities but about the concept behind my own project. My ideas were fuzzy and lacked clarity. The engineers at Skynetiks Technologies Pvt. Ltd. helped me to first transform my rough sketch into concrete shape and then into concrete reality. I am ecstatic about the quality of their service and recommend them strongly."
    },
    {
      id: 2,
      name: "Dr Koushik Lahiri",
      title: "Senior Dermatologist",
      quote: "I really appreciate Skynetiks Technologies Pvt. Ltd. for the professionalism in their approach, committed, sincere and focused method of working and deep sense of responsibility and dignified way to carry out the project in a time bound and fully transparent manner. It was a pleasure working with Skynetiks Technologies Pvt. Ltd. I highly recommend them for any web-based project anywhere in the globe."
    },
    {
      id: 3,
      name: "Stuart Rubenstein",
      title: "CEO",
      quote: "The experienced techies at Skynetiks Technologies Pvt. Ltd. an official partner with Google Workspace know it all. There is probably no web project that they can't do for you. Their search engine optimization and SEM strategies deliver results. Projects are always completed on time and on budget. I am very pleased with their servicing standards."
    },
    {
      id: 4,
      name: "Gaurav Uppal",
      title: "CEO",
      quote: "It is just not about providing the services & after sales support, Skynetiks Technologies Pvt. Ltd. shares the technical knowledge too if needed. Personalize attention is their USP. I am very pleased with their servicing standards."
    },
    {
      id: 5,
      name: "Nidhi Bhatnagar",
      title: "Fashion Designer",
      quote: "Dear Team Skynetiks Technologies Pvt. Ltd., Thanks for all your continuous Support. It's been a wonderful experience with Skynetiks. We appreciate all your hard work and efforts."
    },
    {
      id: 6,
      name: "S.K Rathore",
      title: "Managing Director",
      quote: "Trying to find a good software development and design company that will do your work for you the way you want it done is a logistical nightmare. Skynetiks Technologies Pvt. Ltd. is an exception. They take the time to develop a blueprint before implementing the project. Their after sales support leaves virtually nothing to be desired. I will continue to use their service for the foreseeable future."
    },
    {
      id: 7,
      name: "Mr. Anirudh Lal",
      title: "MD, Macsam Apparels Pvt. Ltd.",
      quote: "The decision criteria for Google Apps boiled down to three things: cost, storage, and capability. Had we selected a different email infrastructure, our cost would have been 4 times higher than Google Apps."
    },
    {
      id: 8,
      name: "Rajeev Bansal",
      title: "MD, Celestial Knits & Fabs Pvt Ltd",
      quote: "We're big on finding better ways to do things, and Google Apps had what we needed. We use Google Calendar so we can all keep up with our people and the places they'll be"
    },
    {
      id: 9,
      name: "Mr. Kishan Aggarwal",
      title: "MD, World Wide Insurance Brokers Limited",
      quote: "Switching to Google Apps gave us a rock-solid email solution that our users love. When we roll out any technology that's that simple for us to maintain and universally loved by our staff, that's a win in our books."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isAutoPlaying && !isHovering) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000); // Rotate every 5 seconds
    }

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length, isHovering]);

  const goToPrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToTestimonial = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <section className="py-16 px-4 sm:px-8 bg-gray-50">
      <h2 className="text-3xl mb-12 text-center text-gray-800 font-bold">
        CLIENT TESTIMONIALS
      </h2>

      <div 
        className="max-w-4xl mx-auto relative"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* Testimonial Card */}
        <div className="bg-white p-8 rounded-lg shadow-md text-left mb-8 min-h-[300px] transition-all duration-300">
          <div className="mb-4">
            <h3 className="text-xl font-semibold">{testimonials[currentIndex].name}</h3>
            <p className="text-gray-600">{testimonials[currentIndex].title}</p>
          </div>
          <p className="text-gray-700">{testimonials[currentIndex].quote}</p>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-between absolute top-1/2 left-0 right-0 -translate-y-1/2 px-4">
          <button 
            onClick={goToPrev}
            className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Previous testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={goToNext}
            className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Next testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-colors ${currentIndex === index ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'}`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;