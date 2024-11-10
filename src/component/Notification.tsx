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




const Notification: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [isAdvisor, setIsAdvisor] = useState(false);
    const [avatarUrl, setAvatarUrl] = useState<string>(clientAvatarIcon.src);
    const fileInputRef = useRef<HTMLInputElement>(null);
  const [messagesFromAdvisorsPush, setMessagesFromAdvisorsPush] = useState(false);
    const [newsletterOffersPush, setNewsletterOffersPush] = useState(false);
    const [dailyHoroscopePush, setDailyHoroscopePush] = useState(false);
    const [weeklyHoroscopePush, setWeeklyHoroscopePush] = useState(false);
    const [messagesFromAdvisorsEmail, setMessagesFromAdvisorsEmail] = useState(false);
    const [newsletterOffersEmail, setNewsletterOffersEmail] = useState(false);
    const [dailyHoroscopeEmail, setDailyHoroscopeEmail] = useState(false);
    const [weeklyHoroscopeEmail, setWeeklyHoroscopeEmail] = useState(false);

   
  
 
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

                  <h2 className="  mt-28 text-3xl font-thin font-vogue mb-8  text-center text-transparent ">
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
  }}>Notification Preferences</span>
  </h2>



                   {!isMenuOpen && (
                    <>  

                    <section className="  text-customGold p-8 max-w-5xl mx-auto my-10 rounded-xl shadow-2xl backdrop-blur-lg border border-[#c79100]/30 ">
  
  <div className="divide-y divide-[#c79100]/30">

    {/* Push Preferences */}
    <div className="py-6">
      <h3 className="text-2xl font-thin font-vogue mb-6  "><span style={{
    textShadow: `
      0 0 5px rgba(199, 145, 0, 0.6),   
      0 0 10px rgba(199, 145, 0, 0.7),  
      0 0 15px rgba(199, 145, 0, 0.8)
    `,
    letterSpacing: '2px',
    fontWeight: '100',
    transform: 'translateY(-2px)',
    color: '#FFFFFF', 
  }}>Push Preferences </span></h3>
      <div className="space-y-6">
        <div className="flex items-center justify-between py-3 px-4 rounded-lg bg-[#12100b] hover:bg-[#292624] transition-colors">
  <span className="flex items-center space-x-3 text-lg font-medium">
    <i className="fa fa-calendar text-xl text-[#C79100]"></i>
            <span className="text-[#C79100] font-segoe">Messages from advisors</span>
          </span>
           <label className="relative inline-block w-10 align-middle select-none transition duration-200 ease-in">
    <input
        type="checkbox"
        checked={messagesFromAdvisorsPush}
        onChange={() => setMessagesFromAdvisorsPush(!messagesFromAdvisorsPush)}
        className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
        style={{ transform: messagesFromAdvisorsPush ? 'translateX(100%)' : 'translateX(0)' }}
    />
    <span
        className={`block overflow-hidden h-6 rounded-full cursor-pointer ${messagesFromAdvisorsPush ? 'bg-[#c79100]' : 'bg-gray-300'}`}
        style={{ transition: 'background-color .2s, transform .2s' }}
    ></span>
</label>
        </div>

        <div className="flex items-center justify-between py-3 px-4 rounded-lg bg-[#12100b] hover:bg-[#292624] transition-colors">
  <span className="flex items-center space-x-3 text-lg font-medium">
    <i className="fa fa-calendar text-xl text-[#C79100]"></i>
            <span className="text-[#C79100] font-segoe">Newsletter & Special Offers</span>
          </span>
           <label className="relative inline-block w-10 align-middle select-none transition duration-200 ease-in">
    <input
        type="checkbox"
        checked={newsletterOffersPush}
        onChange={() => setNewsletterOffersPush(!newsletterOffersPush)}
        className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
        style={{ transform: newsletterOffersPush ? 'translateX(100%)' : 'translateX(0)' }}
    />
    <span
        className={`block overflow-hidden h-6 rounded-full cursor-pointer ${newsletterOffersPush ? 'bg-[#c79100]' : 'bg-gray-300'}`}
        style={{ transition: 'background-color .2s, transform .2s' }}
    ></span>
</label>
        </div>

         <div className="flex items-center justify-between py-3 px-4 rounded-lg bg-[#12100b] hover:bg-[#292624] transition-colors">
  <span className="flex items-center space-x-3 text-lg font-medium">
    <i className="fa fa-calendar text-xl text-[#C79100]"></i>
            <span className="text-[#C79100] font-segoe">Courses Notification</span>
          </span>
           <label className="relative inline-block w-10 align-middle select-none transition duration-200 ease-in">
    <input
        type="checkbox"
        checked={dailyHoroscopePush}
        onChange={() => setDailyHoroscopePush(!dailyHoroscopePush)}
        className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
        style={{ transform: dailyHoroscopePush ? 'translateX(100%)' : 'translateX(0)' }}
    />
    <span
        className={`block overflow-hidden h-6 rounded-full cursor-pointer ${dailyHoroscopePush ? 'bg-[#c79100]' : 'bg-gray-300'}`}
        style={{ transition: 'background-color .2s, transform .2s' }}
    ></span>
</label>
        </div>

        <div className="flex items-center justify-between py-3 px-4 rounded-lg bg-[#12100b] hover:bg-[#292624] transition-colors">
  <span className="flex items-center space-x-3 text-lg font-medium">
    <i className="fa fa-calendar text-xl text-[#C79100]"></i>
            <span className="text-[#C79100] font-segoe">Message From Course Instructor</span>
          </span>
           <label className="relative inline-block w-10 align-middle select-none transition duration-200 ease-in">
    <input
        type="checkbox"
        checked={weeklyHoroscopePush}
        onChange={() => setWeeklyHoroscopePush(!weeklyHoroscopePush)}
        className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
        style={{ transform: weeklyHoroscopePush ? 'translateX(100%)' : 'translateX(0)' }}
    />
    <span
        className={`block overflow-hidden h-6 rounded-full cursor-pointer ${weeklyHoroscopePush ? 'bg-[#c79100]' : 'bg-gray-300'}`}
        style={{ transition: 'background-color .2s, transform .2s' }}
    ></span>
</label>
        </div>
      </div>
    </div>
    

    {/* Email Preferences */}
    <div className="py-6">
      <h3 className="text-2xl font-thin mb-6 font-vogue "><span style={{
    textShadow: `
      0 0 5px rgba(199, 145, 0, 0.6),   
      0 0 10px rgba(199, 145, 0, 0.7),  
      0 0 15px rgba(199, 145, 0, 0.8)
    `,
    letterSpacing: '2px',
    fontWeight: '100',
    transform: 'translateY(-2px)',
    color: '#FFFFFF', 
  }}>Email Preferences </span></h3>
      <div className="space-y-6">
        <div className="flex items-center justify-between py-3 px-4 rounded-lg bg-[#12100b] hover:bg-[#292624] transition-colors">
  <span className="flex items-center space-x-3 text-lg font-medium">
    <i className="fa fa-calendar text-xl text-[#C79100]"></i>
            <span className="text-[#C79100] font-segoe">Messages from advisors</span>
          </span>
           <label className="relative inline-block w-10 align-middle select-none transition duration-200 ease-in">
    <input
        type="checkbox"
        checked={messagesFromAdvisorsEmail}
        onChange={() => setMessagesFromAdvisorsEmail(!messagesFromAdvisorsEmail)}
        className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
        style={{ transform: messagesFromAdvisorsEmail ? 'translateX(100%)' : 'translateX(0)' }}
    />
    <span
        className={`block overflow-hidden h-6 rounded-full cursor-pointer ${messagesFromAdvisorsEmail ? 'bg-[#c79100]' : 'bg-gray-300'}`}
        style={{ transition: 'background-color .2s, transform .2s' }}
    ></span>
</label>
        </div>
<div className="flex items-center justify-between py-3 px-4 rounded-lg bg-[#12100b] hover:bg-[#292624] transition-colors">
  <span className="flex items-center space-x-3 text-lg font-medium">
    <i className="fa fa-calendar text-xl text-[#C79100]"></i>
            <span className="text-[#C79100] font-segoe">Newsletter & Special Offers</span>
          </span>
           <label className="relative inline-block w-10 align-middle select-none transition duration-200 ease-in">
    <input
        type="checkbox"
        checked={newsletterOffersEmail}
        onChange={() => setNewsletterOffersEmail(!newsletterOffersEmail)}
        className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
        style={{ transform: newsletterOffersEmail ? 'translateX(100%)' : 'translateX(0)' }}
    />
    <span
        className={`block overflow-hidden h-6 rounded-full cursor-pointer ${newsletterOffersEmail ? 'bg-[#c79100]' : 'bg-gray-300'}`}
        style={{ transition: 'background-color .2s, transform .2s' }}
    ></span>
</label>
        </div>

        <div className="flex items-center justify-between py-3 px-4 rounded-lg bg-[#12100b] hover:bg-[#292624] transition-colors">
  <span className="flex items-center space-x-3 text-lg font-medium">
    <i className="fa fa-calendar text-xl text-[#C79100]"></i>
            <span className="text-[#C79100] font-segoe">Courses Notification</span>
          </span>
          <label className="relative inline-block w-10 align-middle select-none transition duration-200 ease-in">
    <input
        type="checkbox"
        checked={dailyHoroscopeEmail}
        onChange={() => setDailyHoroscopeEmail(!dailyHoroscopeEmail)}
        className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
        style={{ transform: dailyHoroscopeEmail ? 'translateX(100%)' : 'translateX(0)' }}
    />
    <span
        className={`block overflow-hidden h-6 rounded-full cursor-pointer ${dailyHoroscopeEmail ? 'bg-[#c79100]' : 'bg-gray-300'}`}
        style={{ transition: 'background-color .2s, transform .2s' }}
    ></span>
</label>

        </div>

       <div className="flex items-center justify-between py-3 px-4 rounded-lg bg-[#12100b] hover:bg-[#292624] transition-colors">
  <span className="flex items-center space-x-3 text-lg font-medium">
    <i className="fa fa-calendar text-xl text-[#C79100]"></i>
    <span className="font-segoe text-[#C79100]">Message From Course Instructor</span>
  </span>
  <label className="relative inline-block w-10 align-middle select-none transition duration-200 ease-in">
    <input
      type="checkbox"
      checked={weeklyHoroscopeEmail}
      onChange={() => setWeeklyHoroscopeEmail(!weeklyHoroscopeEmail)}
      className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
      style={{ transform: weeklyHoroscopeEmail ? 'translateX(100%)' : 'translateX(0)' }}
    />
    <span
      className={`block overflow-hidden h-6 rounded-full cursor-pointer ${weeklyHoroscopeEmail ? 'bg-[#c79100]' : 'bg-gray-300'}`}
      style={{ transition: 'background-color .2s, transform .2s' }}
    ></span>
  </label>
</div>

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

export default Notification;