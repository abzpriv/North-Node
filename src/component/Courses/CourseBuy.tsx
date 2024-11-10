'use client';

import React, { useEffect, useRef, useState } from 'react';
import NavbarMenu from '../NavbarMenu';
import styles from '../LandingPage.module.css'; 
import Styles from '../PsychicCategories/PsychicReading.module.css';
import Image from 'next/image';
import clientAvatarIcon from '../../assets/profile.png';
import advisorAvatarIcon from '../../assets/profile.png';
import Link from 'next/link';
import logo from '../../assets/logo-north-node.png'; 
import { FiMenu } from 'react-icons/fi';
import Footer from '../Footer';
import CourseBuyImage1 from '../../assets/CourseBuyImage1.png';
import CourseBuyImage2 from '../../assets/CourseBuyImage2.png';
import BookIcon from '../../assets/BookIcon.png';
import UserIcon from '../../assets/UserIcon.png';
import TimeIcon from '../../assets/TimeIcon.png';
import { FaStar } from 'react-icons/fa';


const CourseBuy: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [scrolled, setScrolled] = useState(false);
   const [avatarUrl, setAvatarUrl] = useState<string>(clientAvatarIcon.src);
    const fileInputRef = useRef<HTMLInputElement>(null);
     const [isAdvisor, setIsAdvisor] = useState(false);

 
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };  

    useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 50) { 
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

    const handleLogout = () => {
        localStorage.setItem('isLoggedIn', 'false');
        localStorage.removeItem('userRole'); 
        setIsLoggedIn(false);
        setIsAdvisor(false);
        window.location.href = '/';
    };
  useEffect(() => {
    const loggedInStatus = localStorage.getItem('isLoggedIn');
    setIsLoggedIn(loggedInStatus === 'true');
    setIsAdvisor(localStorage.getItem('userRole') === 'advisor'); 
    setIsLoading(false); 
}, []);
 
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };


   if (isLoading) {
    return null;
  }

  const handleAvatarClick = () => {
    fileInputRef.current?.click();
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        if (e.target?.result) {
          setAvatarUrl(e.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

    return (
        <>      
            {/* Render NavbarMenu component */}
            {isMenuOpen && (
                <div className={styles.navbarMenuOverlay}>
                    <NavbarMenu isOpen={isMenuOpen}  toggleMenu={toggleMenu}  />                    
                </div>
            )}
            <div className={`${styles.landingPage} ${isMenuOpen ? styles.compact : ''}`}>
                {/* Header Section */}       
               <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
  <div className={styles.logo}>
    <Link href="/" passHref>
      <Image src={logo} alt="North Node Logo" />
    </Link>
  </div>

  <nav className={styles.nav}>
    {!isLoggedIn ? (
      <Link href="/Login-page" className={styles.joinLink}>
        Join Us
      </Link>
    ) : (
      <div className="relative inline-block text-left">
        {/* Avatar Icon (Click to toggle dropdown) */}
        <div onClick={toggleDropdown} className="cursor-pointer">
          <Image 
            src={isAdvisor ? advisorAvatarIcon : clientAvatarIcon} 
            alt="User Avatar" 
            className="w-10 h-10 md:w-10 md:h-10 lg:w-10 lg:h-10 rounded-full border-2 border-[#c79100] hover:border-[#FFD700] transition-all duration-300 shadow-xl"
          />
        </div>

        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <div 
            className={`absolute right-0 mt-3 w-56 sm:w-64 md:w-72 lg:w-80 bg-[#17120b] text-white rounded-xl shadow-2xl ring-1 ring-[#c79100] ring-opacity-70
                        divide-y divide-gray-600 transform transition-all duration-500 ease-out origin-top-right scale-95 opacity-0 
                        ${isDropdownOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
          >
            {/* Profile Section with Avatar */}
            <div className="px-5 py-4 flex items-center space-x-4">
              <div className="relative">
                <div className="relative w-16 h-16 sm:w-16 sm:h-16 md:w-16 md:h-16 lg:w-16 lg:h-16 rounded-full border-2 border-[#FFD700] cursor-pointer overflow-hidden">
                  <Image 
                    src={isAdvisor ? advisorAvatarIcon.src : clientAvatarIcon.src} 
                    alt="Profile Avatar"
                    layout="fill" 
                    objectFit="cover" 
                    className="rounded-full" 
                    onClick={handleAvatarClick} 
                  />
                  <input
                    type="file"
                    ref={fileInputRef}
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageUpload}
                  />
                </div>
              </div>
              <p className="text-base lg:text-lg font-bold text-[#FFD700]">My Profile</p>
            </div>

            {isAdvisor && (
              <Link href="/dashboard">
                <div className="block px-5 py-3 text-sm lg:text-base text-gray-200 hover:bg-[#c79100] hover:text-white transition-colors duration-300 cursor-pointer">
                  My Dashboard
                </div>
              </Link>
            )}

            <div className="py-1">
              <Link href="/settings">
                <div className="block px-5 py-3 text-sm lg:text-base text-gray-200 hover:bg-[#c79100] hover:text-white transition-colors duration-300 cursor-pointer">
                  Settings
                </div>
              </Link>
              <button
                onClick={handleLogout}
                className="block w-full text-left px-5 py-3 text-sm lg:text-base text-gray-200 hover:bg-[#c79100] hover:text-white transition-colors duration-300"
              >
                Logout
              </button>
            </div>
          </div>
        )}
      </div>
    )}

    {/* Menu Icon */}
    <FiMenu className={styles.menuIcon} onClick={toggleMenu} />
  </nav>
</header>
                {/* Horizontal Lines Below Header */}
                <div className={styles.horizontalLines}>
                  <div className={styles.line}></div>
                 <div className={styles.lineSecond}></div>
                  </div>


                 <section>
                    <div className={Styles.shadowContainer}></div>
                  <section className="flex flex-col md:flex-row mt-32 justify-between items-start p-6 text-white rounded-lg shadow-lg max-w-6xl mx-auto">
  {/* Left Section */}
  <div className="md:w-2/3 flex flex-col">
    <Image 
      src={CourseBuyImage1} 
      alt="Course Image" 
      className="w-full rounded-lg object-cover h-64 md:h-auto"
    />
    <div className="mt-4">
      <h2 className="text-2xl md:text-3xl font-thin font-vogue mb-2"><span style={{
    textShadow: `
      0 0 5px rgba(199, 145, 0, 0.6),   
      0 0 10px rgba(199, 145, 0, 0.7),  
      0 0 15px rgba(199, 145, 0, 0.8)
    `,
    letterSpacing: '2px',
    fontWeight: '100',
    transform: 'translateY(-2px)',
    color: '#FFFFFF', 
  }}>Mastering the growth mindset</span></h2>
      <div className="flex items-center space-x-2 text-[#c79100]">
        <div className="flex">
          {[...Array(5)].map((_, index) => (
            <FaStar key={index} />
          ))}
        </div>
        <span className="text-gray-300">(4.7)</span>
      </div>

      <div className="flex space-x-6 text-gray-400 mt-2">
        <div className="flex items-center space-x-1">
          <Image
            src={BookIcon}
            alt="Book Icon"
            width={20}
            height={20}
          />
          <span>Lesson 10</span>
        </div>

        <div className="flex items-center space-x-1">
          <Image
            src={TimeIcon}
            alt="Time Icon"
            width={20}
            height={20}
          />
          <span>48 hr</span>
        </div>

        <div className="flex items-center space-x-1">
          <Image
            src={UserIcon}
            alt="User Icon"
            width={20}
            height={20}
          />
          <span>99,999</span>
        </div>
      </div>
    </div>
  </div>

  {/* Right Section */}
  <div className="md:w-1/3 bg-white text-black p-4 rounded-3xl md:ml-6 shadow-lg min-h-[400px] border border-gray-300 mt-4 md:mt-0">
  <Image
    src={CourseBuyImage2} 
    alt="Course Preview" 
    className="w-full h-40 rounded-lg object-cover mb-4"
  />
  <div className="text-gray-600">
    <p className="flex justify-between mb-2">
      <strong>Course Fee:</strong> 
      <span className="text-black font-bold">$60</span>
    </p>
    <p className="flex justify-between mb-2">
      <strong>Level:</strong> 
      <span>Expert</span>
    </p>
    <p className="flex justify-between mb-4">
      <strong>Language:</strong> 
      <span>English</span>
    </p>
  </div>
  <Link href="/course/detail" passHref>
      <button className="w-full py-2 px-4 bg-[#c79100] text-white font-semibold rounded-lg hover:bg-yellow-600 transition-colors duration-300">
        Buy Now
      </button>
       </Link>
</div>

</section>
</section>
                  {!isMenuOpen && (
                    <>               

                <section className="max-w-6xl mx-auto p-6">
      {/* Tabs */}
      <div className="flex space-x-6 border-b border-gray-500 pb-2 mb-6">
        <span className="text-[#c79100] cursor-pointer font-semibold">Overview</span>
        <span className="text-gray-400 cursor-pointer hover:text-white">Curriculum</span>
        <span className="text-gray-400 cursor-pointer hover:text-white">Review</span>
      </div>

      {/* Course Description */}
      <div className="mb-6">
        <h2 className="text-2xl font-thin font-vogue mb-4"><span style={{
    textShadow: `
      0 0 5px rgba(199, 145, 0, 0.6),   
      0 0 10px rgba(199, 145, 0, 0.7),  
      0 0 15px rgba(199, 145, 0, 0.8)
    `,
    letterSpacing: '2px',
    fontWeight: '100',
    transform: 'translateY(-2px)',
    color: '#FFFFFF', 
  }}>Course Description</span></h2>
        <p className="text-gray-300 leading-relaxed">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
          industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type 
          and scrambled it to make a type specimen book. It has survived not only five centuries, but also the 
          leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s 
          with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop 
          publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      </div>

      {/* What You Will Learn */}
      <div className="mb-6">
        <h3 className="text-xl font-thin font-vogue mb-4"><span style={{
    textShadow: `
      0 0 5px rgba(199, 145, 0, 0.6),   
      0 0 10px rgba(199, 145, 0, 0.7),  
      0 0 15px rgba(199, 145, 0, 0.8)
    `,
    letterSpacing: '2px',
    fontWeight: '100',
    transform: 'translateY(-2px)',
    color: '#FFFFFF', 
  }}>What you will learn from this course</span></h3>
        <p className="text-gray-300 leading-relaxed">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
          industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type 
          and scrambled it to make a type specimen book. It has survived not only five centuries, but also the 
          leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s 
          with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop 
          publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      </div>
    </section> 
            <section>
             <Footer />
            </section>
              </>
                )}
                </div>

  </>
    );
};

export default CourseBuy;