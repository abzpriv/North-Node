'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';
import Image from 'next/image';
import closeIcon from '../assets/closeIcon.png'; 
import styles from './NavbarMenu.module.css'
interface NavbarMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const NavbarMenu: React.FC<NavbarMenuProps> = ({ isOpen, toggleMenu }) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (category: string) => {
    if (activeDropdown === category) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(category);
    }
  };

  return (
    <>
      {/* Full Background Menu */}
      <div
  style={{ backgroundColor: '#C79100' }} // Ensures yellow color stays consistent
  className={`fixed top-0 right-0 h-full w-full transition-transform duration-700 ease-in-out transform ${
    isOpen ? 'translate-x-0' : 'translate-x-full'
  }`}
><button
  onClick={toggleMenu}
  className="absolute top-4 right-4 p-2 text-black transition-transform duration-1000 ease-in-out transform hover:scale-110 focus:outline-none"
>
  <Image
    src={closeIcon}
    alt="Close Menu"
    width={40}
    height={40}
    className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10"
  />
</button>

           

           <div className={styles.menuContent}>

      <div className={styles.responsivePaddingNavbar}>

          {/* Psychic Categories Section */}
          <div className="mb-8">
            <h2 className="text-base sm:text-lg md:text-xl font-bold font-vogue  mb-4 text-black text-left">
              ESP ADVISORS
            </h2>
            <ul className="space-y-2">
              {/* Psychic Reading Category */}
              <li className="text-white flex items-center text-xs sm:text-sm md:text-base hover:text-black">
                <Link href="/telepathy-Advisors" className="mr-2 text-left">Level 1 ESP Advisors</Link>
                {/* <button onClick={() => toggleDropdown('psychic-reading')} className="ml-auto">
                  {activeDropdown === 'telepathy-Advisors' ? <AiOutlineUp /> : <AiOutlineDown />}
                </button> */}
              </li>
              {/* {activeDropdown === 'psychic-reading' && (
                <ul className="mt-2 ">
              <li className="text-white text-[0.65rem] sm:text-[0.7rem] md:text-[0.75rem] font-light hover:text-black">
               <Link href="/mindConnectionAdvisors">Mind Connection Advisors</Link>
              </li>
              <li className="text-white text-[0.65rem] sm:text-[0.7rem] md:text-[0.75rem] font-light hover:text-black">
               <Link href="/emotionalTelepathyAdvisors">Emotional Telepathy Advisors</Link>
              </li>
              <li className="text-white text-[0.65rem] sm:text-[0.7rem] md:text-[0.75rem] font-light hover:text-black">
              <Link href="/telepathicLoveAdvisors">Telepathic Love Advisors</Link>
               </li>
               <li className="text-white text-[0.65rem] sm:text-[0.7rem] md:text-[0.75rem] font-light hover:text-black">
               <Link href="/dreamTelepathy">Dream Telepathy </Link>
               </li>
                <li className="text-white text-[0.65rem] sm:text-[0.7rem] md:text-[0.75rem] font-light hover:text-black">
                <Link href="/telepathicHealing">Telepathic Healing</Link>
                </li>
               </ul>

              )} */}

              {/* Tarot Readings Category */}
              <li className="text-white flex items-center text-xs sm:text-sm md:text-base hover:text-black">
                <Link href="/clairvoyanceAdvisors" className="mr-2 text-left">Level 2 ESP Advisors</Link>
                </li>
                {/* <button onClick={() => toggleDropdown('tarot-readings')} className="ml-auto">
                  {activeDropdown === 'clairvoyanceAdvisors' ? <AiOutlineUp /> : <AiOutlineDown />}
                  </button>
                  </li> */}
                  {/* {activeDropdown === 'tarot-readings' && (
                  <ul className=" mt-2 ">
                  <li className="text-white text-[0.65rem] sm:text-[0.7rem] md:text-[0.75rem] font-light hover:text-black">
                    <Link href="/angel-card-reading">Aura Reading Advisors</Link>
                  </li>
                  </ul>
            )} */}

              {/* Astrology Reading Category */}
              <li className="text-white flex items-center text-xs sm:text-sm md:text-base hover:text-black">
                <Link href="/precognitionAdvisors" className="mr-2 text-left">Level 3 ESP Advisors</Link>
                {/* <button onClick={() => toggleDropdown('astrology-reading')} className="ml-auto">
                  {activeDropdown === 'astrology-reading' ? <AiOutlineUp /> : <AiOutlineDown />}
                  </button> */}
                   </li>
                   {/* {activeDropdown === 'astrology-reading' && (
                  <ul className=" mt-2 ">
                  <li className="text-white text-[0.65rem] sm:text-[0.7rem] md:text-[0.75rem] font-light hover:text-black">
                    <Link href="/chinese-astrology">Future Life Event Readings</Link>
                  </li>
                  <li className="text-white text-[0.65rem] sm:text-[0.7rem] md:text-[0.75rem] font-light hover:text-black">
                    <Link href="/vedic-astrology">Financial Precognition Readings</Link>
                  </li>
                  </ul>
                 )} */}
              

              {/* Career Forecasts Category */}
              {/* <li className="text-white flex items-center text-xs sm:text-sm md:text-base hover:text-black">
                <Link href="/retrocognitionAdvisors" className="mr-2 text-left">Level 4 ESP Advisors</Link> */}
                {/* <button onClick={() => toggleDropdown('career-forecasts')} className="ml-auto">
                  {activeDropdown === 'career-forecasts' ? <AiOutlineUp /> : <AiOutlineDown />}
                   </button> */}
              {/* </li> */}
               {/* {activeDropdown === 'career-forecasts' && (
                  <ul className=" mt-2 ">
                    <li className="text-white text-[0.65rem] sm:text-[0.7rem] md:text-[0.75rem] font-light hover:text-black">
                    <Link href="/numerology">Past Life Retrocognition:</Link>
                  </li>
                  </ul>
                    )} */}

                    {/* <li className="text-white flex items-center text-xs sm:text-sm md:text-base hover:text-black">
                <Link href="/mediumshipAdvisors" className="mr-2 text-left">Level 5 ESP Advisors</Link>
                </li>

                <li className="text-white flex items-center text-xs sm:text-sm md:text-base hover:text-black">
                <Link href="/psychometryAdvisors" className="mr-2 text-left">Level 6 ESP Advisors</Link>
                </li> */}



                

              {/* More Specialties Category */}
              {/* <li className="text-white flex items-center text-xs sm:text-sm md:text-base hover:text-black">
                <h2 className="mr-2 text-left">More Specialties</h2> */}
                {/* <button onClick={() => toggleDropdown('more-specialties')} className="ml-auto">
                  {activeDropdown === 'more-specialties' ? <AiOutlineUp /> : <AiOutlineDown />}
                </button> */}
              {/* </li> */}
              {/* {activeDropdown === 'more-specialties' && (
                <ul className=" mt-2 ">
                  <li className="text-white text-[0.65rem] sm:text-[0.7rem] md:text-[0.75rem] font-light hover:text-black">
                    <Link href="/palm-readings">Mediumship Advisors</Link>
                  </li>
                  <li className="text-white text-[0.65rem] sm:text-[0.7rem] md:text-[0.75rem] font-light hover:text-black">
                    <Link href="/graphology">Psychometry Advisors:</Link>
                  </li>
                  <li className="text-white text-[0.65rem] sm:text-[0.7rem] md:text-[0.75rem] font-light hover:text-black">
                    <Link href="/psiquicos-en-espanol">Life Path Clairvoyance</Link>
                  </li>
                  <li className="text-white text-[0.65rem] sm:text-[0.7rem] md:text-[0.75rem] font-light hover:text-black">
                    <Link href="/paranormal">Clairvoyant Past Life Readings</Link>
                  </li>
                  <li className="text-white text-[0.65rem] sm:text-[0.7rem] md:text-[0.75rem] font-light hover:text-black">
                    <Link href="/ghosts">Love and Relationship Precognition</Link>
                  </li>
                  <li className="text-white text-[0.65rem] sm:text-[0.7rem] md:text-[0.75rem] font-light hover:text-black">
                    <Link href="/past-life-reading">Career and Success Precognition</Link>
                  </li>
                  <li className="text-white text-[0.65rem] sm:text-[0.7rem] md:text-[0.75rem] font-light hover:text-black">
                    <Link href="/new-age-spirituality">Spiritual Path Precognition</Link>
                  </li>
                </ul>
              )} */}
            </ul>
          </div>

          {/* Courses Section */}
          <div className="mb-8">
            <h2 className="text-base sm:text-lg md:text-xl font-bold font-vogue mb-4 text-black">NORTH NODE SCHOOL OF SELF DEVELOPMENT</h2>
            <ul >
              <li className="text-white text-xs sm:text-sm md:text-base hover:text-black">
                <Link href="/courses/telepathy">Course A</Link>
              </li>
              <li className="text-white text-xs sm:text-sm md:text-base hover:text-black">
                <Link href="/courses/clairvoyance">Course B</Link>
              </li>
              <li className="text-white text-xs sm:text-sm md:text-base hover:text-black">
                <Link href="/courses/precognition">Course C</Link>
              </li>
              <li className="text-white text-xs sm:text-sm md:text-base hover:text-black">
                <Link href="/courses/psychometry">Course D</Link>
              </li>
              <li className="text-white text-xs sm:text-sm md:text-base hover:text-black">
                <Link href="/courses/retrocognition">Course E</Link>
              </li>
              <li className="text-white text-xs sm:text-sm md:text-base hover:text-black">
                <Link href="/courses/retrocognition"> All Categories</Link>
              </li>
              {/* <li className="text-white text-xs sm:text-sm md:text-base hover:text-black">
                <Link href="/courses/allCategories">Explore All Categories</Link>
              </li> */}
            </ul>
          </div>

          {/* The Company Section */}
          <div>
            <h2 className="text-base sm:text-lg md:text-xl font-bold font-vogue mb-4 text-black">THE COMPANY</h2>
            <ul >
              <li className="text-white text-xs sm:text-sm md:text-base hover:text-black">
                <Link href="/careers-collaborations">Careers & Collaborations</Link>
              </li>
              <li className="text-white text-xs sm:text-sm md:text-base hover:text-black">
                <Link href="/about-us">About Us</Link>
              </li>
              <li className="text-white text-xs sm:text-sm md:text-base hover:text-black">
                <Link href="/contact-us">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default NavbarMenu;
