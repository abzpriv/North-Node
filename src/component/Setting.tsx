'use client';

import React, { useEffect, useRef, useState } from 'react';
import NavbarMenu from './NavbarMenu';
import styles from './LandingPage.module.css'; 
import Styles from './PsychicCategories/PsychicReading.module.css';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../assets/logo-north-node.png'; 
import Footer from './Footer';
import { FiChevronRight } from 'react-icons/fi'
import clientAvatarIcon from '../assets/profile.png';
import advisorAvatarIcon from '../assets/profile.png';
import { FiMenu } from 'react-icons/fi';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"; 




const Setting: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
   const [isAdvisor, setIsAdvisor] = useState(false);
    const [avatarUrl, setAvatarUrl] = useState<string>(clientAvatarIcon.src);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [newPassword, setNewPassword] = useState('');
    const [oldPassword, setOldPassword ] = useState('');
const [retypePassword, setRetypePassword] = useState('');
const [isEditing, setIsEditing] = useState(false);
const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showRetypePassword, setShowRetypePassword] = useState(false);

  
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };  
    const handleSave = () => {
  console.log('New Password:', newPassword);
  console.log('Retype Password:', retypePassword);
  setIsEditing(false);
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
                  {/* Settings Heading */}
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-thin font-vogue tracking-wider mt-28 text-center relative before:content-[''] before:absolute before:bottom-[-8px] sm:before:bottom-[-10px] md:before:bottom-[-12px] before:left-1/2 before:transform before:-translate-x-1/2 before:w-28 sm:before:w-36 md:before:w-40 before:h-[2px] sm:before:h-[3px] before:bg-gradient-to-r from-[#c79100] to-transparent transition-all">
      <span style={{
    textShadow: `
      0 0 5px rgba(199, 145, 0, 0.6),   
      0 0 10px rgba(199, 145, 0, 0.7),  
      0 0 15px rgba(199, 145, 0, 0.8)
    `,
    letterSpacing: '2px',
    fontWeight: '100',
    transform: 'translateY(-2px)',
    color: '#FFFFFF', 
  }}>Settings</span>
    </h1>
                  {!isMenuOpen && (
                    <>  

                     
            

<section className="min-h-screen text-white p-6 sm:p-8 md:p-12  ">
  <div className="max-w-4xl mx-auto backdrop-blur-md bg-opacity-80 rounded-lg p-6 sm:p-8 md:p-12 shadow-lg border border-[#c79100]/30">
    
   

    {/* Settings Card */}
    <div className="bg-gradient-to-r from-[#12100b] to-[#292624] p-6 sm:p-8 md:p-10 rounded-lg shadow-xl transition-transform hover:scale-[1.02] hover:shadow-[#c79100]/60 duration-500">
      
      <div className="py-4 sm:py-6 flex justify-between items-center border-b border-gray-700 transition-all  group rounded-lg">
        <div className="flex items-center justify-between w-full">
          <div className="flex-1">
          <div className="text-sm sm:text-lg md:text-xl font-medium font-segoe text-[#C79100] group-hover:text-[#ffffff] transition-colors">Email</div>
          </div>
          <div className="flex items-center space-x-2 sm:space-x-4">
            <div className="text-sm sm:text-lg md:text-xl text-gray-400 group-hover:text-gray-200 font-segoe transition-all">abcdefghi@gmail.com</div>
          </div>
        </div>
      </div>

     <div className="py-4 sm:py-6 flex justify-between items-center border-b border-gray-700 transition-all group rounded-lg">
  <div className="flex items-center justify-between w-full">
    <div className="flex-1">
      <div className="text-sm sm:text-lg md:text-xl font-medium font-segoe text-[#C79100] group-hover:text-[#ffffff] transition-colors">
        Change Password
      </div>
    </div>
    <div className="flex flex-col items-end space-y-2">
    {isEditing ? (
  <>
    <div className="relative flex items-center ">
        <input
          type={showOldPassword ? "text" : "password"}
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
          placeholder="Current Password"
      className="text-sm sm:text-base text-white bg-customDark border border-gray-600 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#C79100] transition-all"
        />
        <button
          type="button"
          className="absolute right-2"
          onClick={() => setShowOldPassword(!showOldPassword)}
        >
          {showOldPassword ? (
            <AiOutlineEyeInvisible className="text-white" />
          ) : (
            <AiOutlineEye className="text-white" />
          )}
        </button>
      </div>

      <div className="relative flex items-center ">
        <input
          type={showNewPassword ? "text" : "password"}
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          placeholder="New Password"
      className="text-sm sm:text-base text-white bg-customDark border border-gray-600 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#C79100] transition-all"
        />
        <button
          type="button"
          className="absolute right-2"
          onClick={() => setShowNewPassword(!showNewPassword)}
        >
          {showNewPassword ? (
            <AiOutlineEyeInvisible className="text-white" />
          ) : (
            <AiOutlineEye className="text-white" />
          )}
        </button>
      </div>

      <div className="relative flex items-center">
        <input
          type={showRetypePassword ? "text" : "password"}
          value={retypePassword}
          onChange={(e) => setRetypePassword(e.target.value)}
          placeholder="Retype Password"
      className="text-sm sm:text-base text-white bg-customDark border border-gray-600 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#C79100] transition-all"
        />
        <button
          type="button"
          className="absolute right-2"
          onClick={() => setShowRetypePassword(!showRetypePassword)}
        >
          {showRetypePassword ? (
            <AiOutlineEyeInvisible className="text-white" />
          ) : (
            <AiOutlineEye className="text-white" />
          )}
        </button>
      </div>
    <button 
      onClick={handleSave} 
      className="mt-2 text-sm sm:text-base bg-[#C79100] text-white rounded-md px-4 py-2 hover:bg-[#b38f00] transition-colors">
      Save
    </button>
  </>
) : (
  <div className="text-sm sm:text-base text-gray-400 group-hover:text-gray-200 transition-all">************</div>
)}


    </div>
  </div>
</div>


<button onClick={() => setIsEditing(!isEditing)} className="text-sm text-[#C79100]">
  {isEditing ? 'Cancel' : 'Edit'}
</button>
      {/* Notification Preferences Section */}
      <div className="py-4 sm:py-6 flex justify-between items-center transition-all  group rounded-lg">
     <Link href="/notification-preferences" passHref className="flex justify-between items-center w-full">
    <div className="flex items-center justify-between w-full">
      <div className="flex-1">
        <div className="text-sm sm:text-lg md:text-xl font-mediumfont-segoe text-[#C79100] group-hover:text-[#ffffff] transition-colors">
          Notification Preferences
        </div>
      </div>
      <FiChevronRight className="text-2xl sm:text-3xl text-[#C79100] transition-transform group-hover:translate-x-1 group-hover:text-[#ffffff] duration-300" />
       </div>
      </Link>
     </div>
    </div>

    {/* More Information Section */}
    <div className="bg-gradient-to-r from-[#12100b] to-[#292624] p-6 sm:p-8 md:p-10 rounded-lg shadow-xl mt-8 sm:mt-10 transition-transform hover:scale-[1.02] hover:shadow-[#c79100]/60 duration-500">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-thin mb-4 sm:mb-6 text-center font-vogue relative before:content-[''] before:absolute before:bottom-[-8px] sm:before:bottom-[-10px] md:before:bottom-[-12px] before:left-1/2 before:transform before:-translate-x-1/2 before:w-24 sm:before:w-28 md:before:w-36 before:h-[2px] sm:before:h-[3px] before:bg-gradient-to-r from-[#c79100] to-transparent">
        <span style={{
    textShadow: `
      0 0 5px rgba(199, 145, 0, 0.6),   
      0 0 10px rgba(199, 145, 0, 0.7),  
      0 0 15px rgba(199, 145, 0, 0.8)
    `,
    letterSpacing: '2px',
    fontWeight: '100',
    transform: 'translateY(-2px)',
    color: '#FFFFFF', 
  }}>More Information</span>
      </h2>

      {/* About Us Section */}
      <div className="py-4 sm:py-6 flex justify-between items-center border-b border-gray-700 transition-all  group rounded-lg">
        <Link href="/about-us" passHref className="flex justify-between items-center w-full">
          <div className="text-sm sm:text-lg md:text-xl font-medium text-[#C79100] group-hover:text-[#ffffff] font-segoe transition-colors">About Us</div>
          <FiChevronRight className="text-2xl sm:text-3xl text-[#C79100] transition-transform group-hover:translate-x-1 group-hover:text-[#ffffff] duration-300" />
        </Link>
      </div>
       <div className="py-4 sm:py-6 flex justify-between items-center border-b border-gray-700 transition-all  group rounded-lg">
        <Link href="/contact-us" passHref className="flex justify-between items-center w-full">
          <div className="text-sm sm:text-lg md:text-xl font-medium text-[#C79100] group-hover:text-[#ffffff] font-segoe transition-colors">Contact Us</div>
          <FiChevronRight className="text-2xl sm:text-3xl text-[#C79100] transition-transform group-hover:translate-x-1 group-hover:text-[#ffffff] duration-300" />
        </Link>
      </div>

      
      <div className="py-4 sm:py-6 flex justify-between items-center transition-all  group rounded-lg">
        <Link href="/payment-management" passHref className="flex justify-between items-center w-full">
          <div className="text-sm sm:text-lg md:text-xl font-medium text-[#C79100] group-hover:text-[#ffffff] font-segoe transition-colors">Payment Management</div>
          <FiChevronRight className="text-2xl sm:text-3xl text-[#C79100] transition-transform group-hover:translate-x-1 group-hover:text-[#ffffff] duration-300" />
        </Link>
      </div>
    </div>
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

export default Setting;