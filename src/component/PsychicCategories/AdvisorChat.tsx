'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from '../LandingPage.module.css'; 
import NavbarMenu from '../NavbarMenu';
import Link from 'next/link';
import { FiMenu } from 'react-icons/fi';
import { FaStar, FaRegCommentDots,  } from 'react-icons/fa';
import logo from '../../assets/logo-north-node.png'; 
import ChatImage from '../../assets/ChatIcon.png';
import clientAvatarIcon from '../../assets/profile.png';
import advisorAvatarIcon from '../../assets/profile.png';
import PhoneIcon from '../../assets/PhoneIcon.png';
import CommentImage from '../../assets/ChatImageReviews.png';
import review from '../../assets/Review.png'
import Footer from '../Footer';
import { advisors } from './TelepathyAdvisors';
const AdvisorChat: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('about'); 
  const currentAdvisor = advisors[0];
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

  const handleAvatarClick = () => {
    fileInputRef.current?.click();
  };

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
          <NavbarMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
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

        {/* Main Content Section */}
        <section className="flex justify-center mt-20 py-12">
          <div className="w-full max-w-4xl p-6  rounded-lg shadow-md text-center text-white">
            {/* Profile Section */}
            <div className="flex flex-col items-center">
              <div className="mb-4">
                <Image
               src={currentAdvisor.image}  // Use advisor's image
               alt={currentAdvisor.name}
                width={200}
                height={200}
                 />

              </div>
              <h2 className="text-xl font-bold">{currentAdvisor.name}</h2>
              <p className="text-sm text-gray-400">{currentAdvisor.title}</p>

              {/* Rating Section */}
              <div className="flex items-center my-2">
                <div className="flex text-yellow-500">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar className="text-gray-500" /> {/* Half Star */}
                </div>
                <span className="ml-2 text-sm">{currentAdvisor.rating}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-center gap-4 mt-6">
            <button className="flex flex-col items-center bg-green-600 hover:bg-green-700 text-white py-4 px-4 rounded-xl transition-all" style={{ width: '120px', height: '140px' }}>
        <Link href="/paymentDetail" passHref>
         <div className="flex flex-col items-center cursor-pointer">
         <Image
        src={ChatImage}
        alt="Chat Icon"
        style={{ width: '42px', height: '42px' }}
        className="mb-2"
      />
      <span className="text-lg">Chat</span>
      <span className="text-sm">{currentAdvisor.price}</span>
    </div>
    </Link>
     </button>
          <button
             className="flex flex-col items-center bg-gray-300 hover:bg-gray-400 text-gray-800 py-4 px-4 rounded-xl transition-all"
              style={{ width: '120px', height: '140px' }}
              >
             <Image
                src={PhoneIcon}
                alt="Call Icon"
                style={{ width: '42px', height: '42px' }}
               className="mb-2"
             />
              <span className=" text-lg">Voice Call</span>
               <span className="text-sm">$3.00/min</span>
             </button>
          </div>


            {/* Reading Count */}
            <p className="mt-4 text-sm font-baskerville text-white">50,253 readings since 2020</p>
            </div>
            </section>
            {!isMenuOpen && (
                    <>
                 

            <section>
  {/* Tabs Section */}
  <div className="flex flex-wrap justify-center mt-8 mb-4 border-b border-gray-600 w-full">
  <button
    className={`text-xs sm:text-sm px-4 font-baskerville sm:px-6 py-2 font-semibold ${
      activeTab === 'about'
        ? 'text-white border-b-2 border-yellow-500'
        : 'text-gray-400 hover:text-white'
    }`}
    onClick={() => setActiveTab('about')}
  >
    About Me
  </button>
  <button
    className={`text-xs sm:text-sm px-4 font-baskerville sm:px-6 py-2 font-semibold ${
      activeTab === 'services'
        ? 'text-white border-b-2 border-yellow-500'
        : 'text-gray-400 hover:text-white'
    }`}
    onClick={() => setActiveTab('services')}
  >
    Services
  </button>
  <button
    className={`text-xs sm:text-sm px-4 font-baskerville sm:px-6 py-2 font-semibold ${
      activeTab === 'specialties'
        ? 'text-white border-b-2 border-yellow-500'
        : 'text-gray-400 hover:text-white'
    }`}
    onClick={() => setActiveTab('specialties')}
  >
    Specialties
  </button>
  <button
    className={`text-xs sm:text-sm px-4 font-baskerville sm:px-6 py-2 font-semibold ${
      activeTab === 'reviews'
        ? 'text-white border-b-2 border-yellow-500'
        : 'text-gray-400 hover:text-white'
    }`}
    onClick={() => setActiveTab('reviews')}
  >
    Reviews
  </button>
</div>


  {/* Conditional Content Rendering */}
  <div className="text-left text-sm text-white leading-relaxed px-4 sm:px-8 w-full">
    <div className="text-center">
      {activeTab === 'about' && (
        <p>
          Unlock the secrets of your mind and tap into your inner strength with our comprehensive courses. Explore the mystical world of 
          psychic insights to gain clarity and guidance, while transforming your mindset to achieve personal growth and success. Our expert-led 
          programs are designed to empower you with the tools to navigate lifes challenges and harness the full potential of your mind and spirit. 
          Embrace the journey to self-discovery and transformation today. Imagine a life where you’re in tune with your inner guidance and have the 
          mental tools to shape your reality. Our courses are designed to help you achieve just that—by exploring psychic phenomena and mind change
           practices. From learning to trust your intuition to adopting powerful mental frameworks, youll be equipped to face life’s 
          challenges with confidence and purpose. Start your journey towards a more enlightened and empowered life today.
        </p>
      )}
    </div>
    <div className="text-center">
      {activeTab === 'services' && (
        <p>
          Unlock the secrets of your mind and tap into your inner strength with our comprehensive courses. Explore the mystical world of 
          psychic insights to gain clarity and guidance, while transforming your mindset to achieve personal growth and success. Our expert-led 
          programs are designed to empower you with the tools to navigate lifes challenges and harness the full potential of your mind and spirit. 
          Embrace the journey to self-discovery and transformation today. Imagine a life where you’re in tune with your inner guidance and have the 
          mental tools to shape your reality. Our courses are designed to help you achieve just that—by exploring psychic phenomena and mind change
           practices. From learning to trust your intuition to adopting powerful mental frameworks, youll be equipped to face life’s 
          challenges with confidence and purpose. Start your journey towards a more enlightened and empowered life today.
        </p>
      )}
    </div>

    {activeTab === 'specialties' && (
  <div className="text-center mt-4">
    <div className="flex flex-col sm:flex-row flex-wrap justify-center space-y-4 sm:space-y-0 sm:space-x-6">
      <a href="#" className="text-yellow-500 hover:underline text-base sm:text-lg">
        Telepathy
      </a>
      <a href="#" className="text-yellow-500 hover:underline text-base sm:text-lg">
        Clairvoyance
      </a>
      <a href="#" className="text-yellow-500 hover:underline text-base sm:text-lg">
        Precognition
      </a>
      <a href="#" className="text-yellow-500 hover:underline text-base sm:text-lg">
        Retrocognition
      </a>
      <a href="#" className="text-yellow-500 hover:underline text-base sm:text-lg">
        Mediumship
      </a>
      <a href="#" className="text-yellow-500 hover:underline text-base sm:text-lg">
        <a href="#" className="text-yellow-500 hover:underline text-base sm:text-lg">
        Psychometry
      </a>
      </a>
    </div>
  </div>
)}


    <div className="flex justify-center">
      {activeTab === 'reviews' && (
        <div className="mt-8 px-2 justify-center">
          <div className="flex flex-wrap justify-center space-y-8 sm:space-y-0   gap-8 ">
            {/* Review Card 1 */}
            <div
              className="flex bg-[#888888] rounded-lg shadow-lg p-4"
              style={{ width: '100%', maxWidth: '600px', height: '200px' }}
            >
              <div>
                <Image
                  src={review}
                  alt="Reviewer"
                  width={140}
                  height={140}
                  className="rounded-lg"
                />
              </div>
              <div className="ml-4 flex flex-col justify-between w-full">
                {/* Star Rating */}
                <div className="flex items-center justify-between">
                  <div className="flex text-white">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar className="text-gray-500" />
                  </div>
                  <span className="text-sm text-yellow-600 ml-auto">
                    4.5 Rating
                  </span>
                  <div className="ml-4 text-white">
                    <Image
                     src={CommentImage}
                   alt="Comment Icon"
                    style={{ width: '20px', height: '18px' }}
                         />
                    </div>
                </div>

                {/* Review Text */}
                <p className="text-white mt-2 text-sm">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint...
                </p>

                {/* Reviewer Name */}
                <span className="text-yellow-600 mt-2 font-bold text-sm">
                  Elisa Grant
                </span>
              </div>
            </div>

            {/* Review Card 2 */}
            <div
              className="flex bg-[#888888] rounded-lg shadow-lg p-4"
              style={{ width: '100%', maxWidth: '600px', height: '200px' }}
            >
              <div>
                <Image
                  src={review}
                  alt="Reviewer"
                  width={140}
                  height={140}
                  className="rounded-lg"
                />
              </div>
              <div className="ml-4 flex flex-col justify-between w-full">
                {/* Star Rating */}
                <div className="flex items-center justify-between">
                  <div className="flex text-white">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar className="text-gray-500" />
                  </div>
                  <span className="text-sm text-yellow-600 ml-auto">
                    4.5 Rating
                  </span>
                 <div className="ml-4 text-white">
                    <Image
                     src={CommentImage}
                   alt="Comment Icon"
                    style={{ width: '20px', height: '18px' }}
                         />
                    </div>

                </div>

                {/* Review Text */}
                <p className="text-white mt-2 text-sm">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint...
                </p>

                {/* Reviewer Name */}
                <span className="text-yellow-600 mt-2 font-bold text-sm">
                  Elisa Grant
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
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

export default AdvisorChat;
