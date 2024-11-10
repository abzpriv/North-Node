import React from 'react';
import Image from 'next/image';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import TestimonialImage1 from '../assets/TestimonialImage1.png'; 

const Testimonial = () => {
  return (
<div className="flex flex-col bg-custom-gradient md:flex-row justify-between items-center text-white py-8 px-6 md:py-12 md:px-16 space-y-8 md:space-y-0 md:space-x-12 max-w-7xl mx-auto">
      {/* Left Side: Testimonial Text */}
      <div className="flex flex-col md:w-1/2 space-y-4">
        <h4 className="text-lg md:text-xl text-customGold font-thin uppercase mb-2 font-vogue"><span className="text-white bg-clip-text font-vogue"
    style={{
      textShadow: `
    
    0 0 5px rgba(199, 145, 0, 0.6),   
    0 0 10px rgba(199, 145, 0, 0.7),  
    0 0 15px rgba(199, 145, 0, 0.8)  
      `,
      letterSpacing: '2px',
      fontWeight: '100',
      transform: 'translateY(-2px)',     
    }}>Testimonials</span></h4>
        {/* <h2 className="text-2xl md:text-4xl font-semibold mb-6 leading-snug text-customGold font-segoe">What Our Clients Are Saying</h2> */}
        <p className="text-gray-300 leading-relaxed font-segoe">See what our clients have to say about their experience with us.        </p>
      </div>

      {/* Divider Line */}
      <div className="h-24 md:h-48 w-px bg-gradient-to-b from-customGold to-customGold"></div>

      {/* Right Side: Testimonial Content */}
      <div className="flex flex-col md:w-1/2 space-y-4 relative">
        <p className="text-gray-300 leading-relaxed font-segoe">
         North Node has completely transformed my understanding of ESP, providing insights I never thought possible.
        </p>
        <div className="flex items-center space-x-4">
          <Image
            src={TestimonialImage1} 
            alt="Profile Image"
            className="rounded-full"
            width={50}
            height={50}
          />
          <div className="flex flex-col">
            <span className="font-semibold font-segoe">Jonathan Vallem</span>
            <span className="text-gray-400 text-sm font-segoe">New York, USA</span>
          </div>
        </div>

        {/* Navigation Arrows Positioned Below */}
        <div className="flex items-center space-x-4 mt-8 absolute right-0 bottom-0">
          <button className="p-3 bg-gray-800 rounded-full hover:bg-yellow-600 transition-colors">
            <FaArrowLeft className="text-white" />
          </button>
          <button className="p-3 bg-gray-800 rounded-full hover:bg-yellow-600 transition-colors">
            <FaArrowRight className="text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
