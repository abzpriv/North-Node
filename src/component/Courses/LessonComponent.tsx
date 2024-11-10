'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { FaClock, FaStar, FaBookOpen } from 'react-icons/fa'; 
import { FiMenu } from 'react-icons/fi';
import NavbarMenu from '../NavbarMenu';
import styles from '../LandingPage.module.css'; 
import clientAvatarIcon from '../../assets/profile.png';
import advisorAvatarIcon from '../../assets/profile.png';
import logo from '../../assets/logo-north-node.png'; 
import Footer from '../Footer';

interface LessonProps {
  title: string;
  videoUrl: string;
  description: string;
  additionalInfo?: { label: string; value: string }[]; 
}

const LessonComponent: React.FC<LessonProps> = ({ title, videoUrl, description, additionalInfo }) => {
  return (
    <div className="bg-[#2c2a2a] text-white p-8 rounded-2xl shadow-lg max-w-4xl mx-auto my-8 transition-all duration-300 hover:shadow-xl"> {/* Increased max width here */}
      <h1 className="text-4xl font-thin font-vogue text-customGold mb-6 text-center"><span style={{
    textShadow: `
      0 0 5px rgba(199, 145, 0, 0.6),   
      0 0 10px rgba(199, 145, 0, 0.7),  
      0 0 15px rgba(199, 145, 0, 0.8)
    `,
    letterSpacing: '2px',
    fontWeight: '100',
    transform: 'translateY(-2px)',
    color: '#FFFFFF', 
  }}>{title}</span></h1>
      
      <div className="relative overflow-hidden mb-6 rounded-lg shadow-md ">
        <iframe
          className="w-full h-64 md:h-96"
          src={videoUrl}
          title={title}
          frameBorder="0"
          allowFullScreen
        />
      </div>

      <p className="text-lg mb-4">{description}</p>

      {additionalInfo && additionalInfo.length > 0 && (
        <div className="mt-6">
          <h2 className="text-2xl font-thin font-vogue text-customGold mb-2"><span style={{
    textShadow: `
      0 0 5px rgba(199, 145, 0, 0.6),   
      0 0 10px rgba(199, 145, 0, 0.7),  
      0 0 15px rgba(199, 145, 0, 0.8)
    `,
    letterSpacing: '2px',
    fontWeight: '100',
    transform: 'translateY(-2px)',
    color: '#FFFFFF', 
  }}>Additional Information</span></h2>
          <ul className="list-none">
            {additionalInfo.map((info, index) => (
              <li key={index} className="flex items-center mb-2 text-gray-400">
                {info.label === 'Duration' && <FaClock className="mr-2 text-customGold" />}
                {info.label === 'Skill Level' && <FaStar className="mr-2 text-customGold" />}
                {info.label === 'Recommended Materials' && <FaBookOpen className="mr-2 text-customGold" />}
                <span className="font-medium">{info.label}:</span> {info.value}
              </li>
            ))}
          </ul>
        </div>
      )}
       <button className="mt-6 bg-customGold text-black py-2 px-4 rounded-lg hover:bg-[#c79100] transition w-auto">
        Lesson Completed
      </button>
    </div>
  );
};

const LessonPage = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
      const [scrolled, setScrolled] = useState(false);
const [avatarUrl, setAvatarUrl] = useState<string>(clientAvatarIcon.src);
    const fileInputRef = useRef<HTMLInputElement>(null);
     const [isAdvisor, setIsAdvisor] = useState(false);



  const title = "Introduction to React";
  const videoUrl = "https://www.youtube.com/embed/Ke90Tje7VS0"; 
  const description = "In this lesson, we will cover the basics of React, including components, props, and state.";
  const additionalInfo = [
    { label: 'Duration', value: '30 minutes' },
    { label: 'Skill Level', value: 'Beginner' },
    { label: 'Recommended Materials', value: 'React Documentation' }
  ];

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
                <div className={styles.horizontalLines}>
          <div className={styles.line}></div>
          <div className={styles.lineSecond}></div>
        </div>
        <div className='mt-28'>
    <LessonComponent
      title={title}
      videoUrl={videoUrl}
      description={description}
      additionalInfo={additionalInfo}
    />
    </div>
    <div>
      <Footer />
    </div>

  </div>
          
            
        
      
    </>
  );
};

export default LessonPage;
