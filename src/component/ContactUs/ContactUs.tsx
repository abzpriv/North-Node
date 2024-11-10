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
import UserIcon from '../../assets/UserImageContactUs.png';
import EmailIcon from '../../assets//EmailContactUs.png';


const ContactUs: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [scrolled, setScrolled] = useState(false);
 const [avatarUrl, setAvatarUrl] = useState<string>(clientAvatarIcon.src);
    const fileInputRef = useRef<HTMLInputElement>(null);
     const [isAdvisor, setIsAdvisor] = useState(false);

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
 
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
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
                    <section className=" py-12 text-center mt-32">
                     <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-4xl sm:text-5xl font-thin font-vogue text-white mb-6">
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
  }}>
                     Contact Us
                     </span>
                       </h2>
                       <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s 
                      standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                       It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                      </p>
                      </div>
                     </section>
                  </section>
                  {!isMenuOpen && (
                    <>  
                    <section className="flex justify-center items-center min-h-screen">
  <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 p-6 md:p-10 relative">
    {/* Red Line Design */}
    <div className="absolute top-[110px] left-0 w-full h-[calc(100%-120px)] pointer-events-none z-10">
      <div
        className="absolute top-0 left-0 w-[20%] h-[50px] border-l-2 border-t-2"
        style={{ borderImage: "linear-gradient(to bottom, #B7410E, #B1106F) 1" }}
      ></div>
      <div
        className="absolute left-0 bottom-0 w-[40%] h-[calc(100%-50px)] border-l-2 border-b-2"
        style={{ borderImage: "linear-gradient(to bottom, #B7410E, #B1106F) 1" }}
      ></div>
      <div
        className="absolute right-0 top-0 w-[80%] h-[50px] border-r-2 border-t-2"
        style={{ borderImage: "linear-gradient(to bottom, #B7410E, #B1106F) 1" }}
      ></div>
      <div
        className="border-r-[2px] border-b-[2px] absolute right-0 bottom-0 w-[60%] h-[calc(100%-50px)] z-10"
        style={{ borderImage: "linear-gradient(to bottom, #B7410E, #B1106F) 1" }}
      ></div>
    </div>

    {/* Left Side - Contact Form */}
    <div className="relative z-20 p-8 rounded-md">
      <h1 className="text-2xl lg:text-4xl font-thin font-vogue mb-6 lg:mb-8 text-white text-center mt-5 bg-customDark relative w-full max-w-[300px] left-0 lg:left-[-150px] p-2 rounded-md mx-auto">
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
  }}>
        CONTACT US
        </span>
      </h1>

      <form className="space-y-6">
        {/* Name Field */}
        <div className="relative mb-4">
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
           <Image
             src={UserIcon} 
             alt="Icon User"
             width={20}  
             height={20} 
             className="h-5 w-5"  
                  />

          </span>
          <input
            type="text"
            placeholder="Name"
            className="bg-customDark w-full py-3 px-10 border border-white rounded-md text-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-600"
          />
        </div>
        {/* Email Field */}
        <div className="relative mb-4">
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
            <Image
             src={EmailIcon}
             alt="Icon User"
             width={20}  
             height={20} 
             className="h-5 w-5"  
                  />
          
          </span>
          <input
            type="email"
            placeholder="E-mail"
            className="bg-customDark w-full py-3 px-10 border border-white rounded-md text-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-600"
          />
        </div>
        {/* Query Field */}
        <div className="relative mb-4">
          <textarea
            placeholder="Write query"
            className="bg-customDark w-full py-3 px-4 border border-white rounded-md text-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-600 resize-none"
            rows={4}
          ></textarea>
        </div>

        {/* Submit Button */}
        <button className="bg-customGold px-6 lg:px-8 py-2 rounded-md text-white font-bold">
          Send
        </button>
      </form>
    </div>

    {/* Right Side - Map and Address */}
<div className="flex flex-col lg:flex-row lg:relative">
  {/* Map Iframe */}
  <iframe
    className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[130%] rounded-md"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2434.949720221345!2d21.012228615683048!3d52.22967567975614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc6691e54371%3A0x9b7b3e414ba8a22f!2sWarsaw%2C%20Poland!5e0!3m2!1sen!2sus!4v1694337063524!5m2!1sen!2sus"
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>

  {/* Address Box */}
  <div className="mt-4 lg:absolute top-[8rem] sm:top-[10rem] md:top-[12rem] lg:top-[26rem] left-5 sm:left-8 md:left-10 lg:left-36 bg-customGold p-3 sm:p-4 lg:p-6 rounded-md text-white w-[180px] sm:w-[200px] md:w-[220px] lg:w-[260px] h-[160px] sm:h-[180px] md:h-[200px] lg:h-[250px] lg:mt-0">
    <h2 className="text-base sm:text-lg lg:text-xl font-bold mb-2">Address</h2>
    <p className="text-xs sm:text-sm">Company</p>
    <p className="text-xs sm:text-sm">00-0012 Warsaw</p>
    <p className="text-xs sm:text-sm">+86 987654321</p>
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

export default ContactUs;