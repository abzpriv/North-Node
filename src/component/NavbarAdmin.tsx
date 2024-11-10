'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { FaBars, FaTimes, FaChevronRight } from 'react-icons/fa'; 
import logo from '../assets/logo-north-node.png';
import Link from 'next/link';

const NavbarAdmin: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-lg z-20">
        <div className="max-w-6xl mx-auto flex items-center p-4">
          {/* Menu Icon on the Left */}
          <div className="flex-none"> 
            <button 
              className="p-2 rounded-md hover:bg-gray-200 focus:outline-none focus:ring focus:ring-gray-300"
              onClick={toggleMenu} 
            >
              <FaBars className="text-2xl text-gray-800" />
            </button>
          </div>
          {/* Logo Centered */}
          <div className="flex-1 flex justify-center">
           <Link href="/admin" passHref>
           <Image
           src={logo}
            alt="Logo"
            className="h-10 w-28 cursor-pointer"
              />
            </Link>
            </div>
        </div>
      </nav>

      {/* Side Menu Backdrop */}
      <div 
        className={`fixed inset-0 bg-gray-800 bg-opacity-50 transition-opacity duration-300 z-30 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} 
        onClick={toggleMenu} 
      ></div>

      {/* Side Menu */}
      <div 
        className={`fixed left-0 top-0 w-64 h-full bg-white shadow-lg transition-transform duration-300 transform z-40 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-bold text-gray-800">North Node Menu</h2>
          <button 
            className="p-2 rounded-md hover:bg-gray-200 focus:outline-none focus:ring focus:ring-gray-300"
            onClick={toggleMenu} 
          >
            <FaTimes className="text-2xl text-gray-800" />
          </button>
        </div>
       <ul className="mt-4 px-4">
        {[
       { label: "North Node Advisors", path: "/advisors" },
       { label: "North Node Courses", path: "/allcourses" },
       { label: "Payment History", path: "/payment-history" },
        ].map((item) => (
      <li key={item.label} className="py-3">
      <Link href={item.path}>
        <div className="flex justify-between items-center text-gray-700 hover:bg-gray-100 transition duration-200">
          <span className="flex-1">{item.label}</span>
          <FaChevronRight className="ml-2 text-gray-500" />
        </div>
      </Link>
       </li>
       ))}
       </ul>
      </div>
    </>
  );
};

export default NavbarAdmin;
