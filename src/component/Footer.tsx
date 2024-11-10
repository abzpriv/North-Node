import Image from 'next/image';
import React from 'react';
import { FaTwitter, FaFacebook, FaVimeoV, FaYoutube } from 'react-icons/fa';
import logo from '../assets/logo-north-node.png';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className=" text-white py-16 relative">
      {/* Top Curve Section */}
      <div className="absolute top-0 left-0 right-0 h-16 rounded-b-[50%]"></div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Subscribe Section */}
        <div className="bg-gradient-to-r from-black via-[rgba(199,145,0,0.2)] to-black shadow-lg py-8 px-6 sm:px-8 lg:px-10 rounded-lg mb-12 mx-auto max-w-4xl">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 md:space-x-4">
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-customGold font-segoe">
              Subscribe to Our Newsletter
            </h3>
            <form className="relative w-full max-w-lg flex flex-col space-y-4 md:space-y-0 md:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="border border-gray-400 font-segoe px-4 py-3 rounded-md w-full text-base sm:text-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-customGold"
              />
              <button
                type="submit"
                className="relative md:absolute md:right-2 font-segoe md:top-1 bg-customGold text-white px-6 py-2 rounded-md h-auto hover:bg-opacity-90 transition-all duration-300 ease-in-out text-base sm:text-lg md:text-xl w-full md:w-auto"
              >
                Subscribe Now
              </button>
            </form>
          </div>
        </div>

        {/* Navigation and Social Icons */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 space-y-6 md:space-y-0">
          {/* Navigation Links */}
          <div className="flex flex-col font-segoe sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm sm:text-base">
            <Link href="/about-us" className="text-gray-300 hover:text-white transition-all duration-300">
              About Us
            </Link>
            <Link href="/contact-us" className="text-gray-300 font-segoe hover:text-white transition-all duration-300">
              Contact Us
            </Link>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-6">
           
            <a href="#" className="text-gray-300 hover:text-customGold transition-all duration-300">
              <FaYoutube size={24} />
            </a>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-700 py-6 flex flex-col font-segoe sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-sm text-gray-400">
            © 2024 North Node. All rights reserved.
          </p>
          <Link href="/" passHref>
            <Image src={logo} alt="North Node Logo" className="h-10 w-auto mx-auto sm:mx-0" />
          </Link>
          <div className="text-sm text-gray-400 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
            <a href="#" className="hover:text-white font-segoe transition-all duration-300">Terms of Service</a>
            <a href="#" className="hover:text-white transition-all font-segoe duration-300">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
