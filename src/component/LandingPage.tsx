'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from './LandingPage.module.css'; 
import logo from '../assets/logo-north-node.png'; 
import starIcon from '../assets/Image-Landing-2.png';
import zodiacCircle from '../assets/PsychicArticleImage4.png';
import starPattern from '../assets/Image-Landing-3.png';
import Link from 'next/link';
import DateIcon from '../assets/Date-icon.png';
import searchIcon from '../assets/searchIcon.png';
import closeIcon from '../assets/closeIcon.png'; 
import ImageLanding12 from '../assets/Image2Landing.png';
import ImageLanding13 from '../assets/Image3Landing.png';
import ImageLanding14 from '../assets/Image4Landing.png';
import TestimonialImage from '../assets/ImageTestimonail.jpeg'
import NewYorkImage from '../assets/NewyorkImage.png';
import ForbesImage from '../assets/ForbesImage.png';
import USAToday from '../assets/UsaImage.png';
import Entrepreneur from '../assets/EnterperneurImage.png';
import BBCImage from '../assets/BBCImage.png';
import CNNImage from '../assets/CNNImage.png';
import { FiMenu } from 'react-icons/fi';
import Styles from './PsychicCategories/PsychicReading.module.css'
import AboutUsImage from '../assets/AboutUsImage.png';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import dynamic from "next/dynamic";
import liveEventImage1 from '../assets/LiveEvent-Image1.png';
import liveEventImage2 from '../assets/LiveEvent-Image2.png';
import liveEventImage3 from '../assets/LiveEvent-Image3.png';
import liveEventImage4 from '../assets/LiveEvent-Image4.png';
import CoursesLanding from './CoursesLanding';
import LeaderLanding from './LeaderLanding';
import ExploreLanding from './ExploreLanding';
import Testimonial from './Testimonial';
import Footer from './Footer';
import clientAvatarIcon from '../assets/profile.png';
import advisorAvatarIcon from '../assets/profile.png';
import appleStore from '../assets/AppStoreImage.png';
import CountUp from 'react-countup';
import Image9 from '../assets/Advisor13.png';
import { useInView } from 'react-intersection-observer';
import googleStore from '../assets/PlayStoreImage.png';
import NavbarMenu from './NavbarMenu'; 
import WhyNorthNode from './WhyNorthNode';
import Image10 from '../assets/Advisor5.png';
import Image11 from '../assets/Advisor7.png';
import { useRouter } from 'next/router';
interface NavbarMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
}
interface TestimonialProps {
  message: string;
  name?: string; 
  title?: string; 
}
const LandingPage: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false); 
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [isAdvisor, setIsAdvisor] = useState(false);
    const [avatarUrl, setAvatarUrl] = useState<string>(clientAvatarIcon.src);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [searchInput, setSearchInput] = useState<string>('');
  const [suggestions, setSuggestions] = useState<{ name: string; link: string }[]>([]);
  
      

    const categories = [
    { name: 'Telepathy', link: '/telepathy-Advisors' },
    { name: 'Clairvoyance', link: '/clairvoyanceAdvisors' },
    { name: 'Precognition ', link: '/precognitionAdvisors' },
    { name: 'Telepathy Course', link: '/courses/telepathy' },
  ];

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

      const logos = [
        { src: NewYorkImage , alt: 'The New York Times' },
        { src: ForbesImage, alt: 'Forbes' },
        { src: USAToday, alt: 'USA Today' },
        { src: Entrepreneur, alt: 'Entrepreneur' },
        { src: BBCImage, alt: 'BBC' },
        { src: CNNImage, alt: 'CNN' },
        
    ];

    
    // const events = [
    //     {
    //         imageSrc: liveEventImage1, 
    //         eventName: 'Event 1',
    //         eventDate: '09/09/2024',
    //         eventTime: '09:30 PM',
    //     },
    //     {
    //         imageSrc: liveEventImage2,
    //         eventName: 'Event 2',
    //         eventDate: '10/09/2024',
    //         eventTime: '08:30 PM',
    //     },
    //     {
    //         imageSrc: liveEventImage3,
    //         eventName: 'Event 3',
    //         eventDate: '11/09/2024',
    //         eventTime: '07:30 PM',
    //     },
    //     {
    //         imageSrc: liveEventImage4, 
    //         eventName: 'Event 4',
    //         eventDate: '12/09/2024',
    //         eventTime: '06:30 PM',
    //     },
    // ];

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setScrolled(scrollTop > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const loggedInStatus = localStorage.getItem('isLoggedIn');
        const userRole = localStorage.getItem('userRole'); 
        setIsLoggedIn(loggedInStatus === 'true');
        setIsAdvisor(userRole === 'advisor'); 
        setAvatarUrl(isAdvisor ? advisorAvatarIcon.src : clientAvatarIcon.src); 
        setIsLoading(false); 
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

  
  const [ref, inView] = useInView({
    triggerOnce: true,  
    threshold: 0.5,     
  });

  if (isLoading) {
    return null;
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchInput(value);

    // Update suggestions based on input
    if (value) {
      const filteredSuggestions = categories.filter(category =>
        category.name.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
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


                <div className={styles.horizontalLines}>
                  <div className={styles.line}></div>
                 <div className={styles.lineSecond}></div>
                    <div className={Styles.shadowContainer}></div>
                  </div>

              {/* Main Section */}

<section className="relative w-full h-screen flex flex-col justify-center overflow-hidden px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
      {/* Full-Screen Image Fading Slider */}
      <div className="absolute inset-0 z-0 w-full h-full overflow-hidden">
        <div className="sliderWrapper w-full h-full relative">
          {[ImageLanding12, ImageLanding14, ImageLanding13].map((image, index) => (
            <div
              key={index}
              className="slide absolute w-full h-full opacity-0 transition-opacity duration-2000 ease-in-out"
            >
              <div className="relative w-full h-full">
                <Image
                  src={image}
                  alt={`Slide Image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black opacity-60" />
              </div>
            </div>
          ))}
        </div>
      </div>

    <div className="relative z-10 text-left flex flex-col space-y-4 sm:space-y-6 md:space-y-8">
  <h1 style={{
    textShadow: `
      0 0 5px rgba(199, 145, 0, 0.6),   
      0 0 10px rgba(199, 145, 0, 0.7),  
      0 0 10px rgba(199, 145, 0, 0.8)
      
    `,
    
   
    transform: 'translateY(-2px)',
    color: '#FFFFFF',
  }} className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-thin font-vogue uppercase mb-6 sm:mb-8 lg:mb-10 text-center relative drop-shadow-[0_6px_15px_rgba(0,0,0,0.9)] animate-[fadeInUp_1.5s_ease-out_forwards] transition-transform duration-1000 ease-in-out">
    Welcome to the New Era of <br />
    Therapy at North Node
  </h1>





        <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl p-3 sm:p-4 md:p-5 bg-opacity-90 bg-[#17120b] rounded-full shadow-2xl hover:shadow-[#C79100] backdrop-blur-xl flex items-center relative transform transition-transform hover:scale-105 mx-auto">
          <Image
            src={searchIcon}
            alt="Search Icon"
            className="absolute left-4 sm:left-5 md:left-6 lg:left-8 top-1/2 transform -translate-y-1/2 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 opacity-80 transition-opacity duration-300 hover:opacity-100"
          />

          <div className="relative w-full">
  <input
    type="text"
    value={searchInput}
    onChange={handleInputChange}
    className={`w-full pl-10 sm:pl-12 md:pl-14 lg:pl-20 pr-24 sm:pr-28 py-2.5 sm:py-3 lg:py-3.5 text-[16px] sm:text-xs md:text-sm lg:text-base text-white bg-transparent border border-gray-600 focus:border-[#C79100] rounded-full outline-none focus:ring-2 focus:ring-yellow-600 transition-all duration-300 placeholder-white placeholder-opacity-80 placeholder:text-xs sm:placeholder:text-2xs md:placeholder:text-xs lg:placeholder:text-sm ${
      suggestions.length > 0 ? "pr-20" : "pr-24"
    }`}
    placeholder="Search by Specialties & ESP Types"
  />
  {suggestions.length > 0 ? (
    <div className="absolute bg-[#17120b] text-white rounded-lg shadow-lg mx-auto z-20 w-full mt-1 transition-all duration-300 transform opacity-100">
      {suggestions.map((suggestion, index) => (
        <Link key={index} href={suggestion.link} passHref>
          <div className="p-3 cursor-pointer hover:bg-[#C79100] transition-colors duration-200 rounded-md">
            {suggestion.name}
          </div>
        </Link>
      ))}
    </div>
  ) : (
    searchInput && ( 
      <div className="absolute bg-[#17120b] text-white rounded-lg shadow-lg mx-auto z-20 w-full mt-1 p-3 text-center">
        No search results found
      </div>
    )
  )}
</div>



          {/* Button */}
          <Link href={suggestions.length > 0 ? suggestions[0]?.link : '#'} passHref>
            <button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#C79100] text-white px-4 py-2 md:px-6 md:py-2.5 lg:px-7 lg:py-3 rounded-full hover:bg-yellow-500 transition-all duration-300 text-xs sm:text-sm md:text-lg lg:text-xl shadow-md hover:shadow-lg"
              onClick={(e) => {
                if (suggestions.length === 0) {
                  e.preventDefault();
                }
              }}
            >
              Find Advisor
            </button>
          </Link>
        </div>

       
      </div>
    </section>



<style jsx>{`
  .sliderWrapper {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .slide {
    animation: fade 18s infinite ease-in-out;
    transition: opacity 3s ease-in-out;
  }

  @keyframes fade {
    0% { opacity: 0; }
    8% { opacity: 1; }
    25% { opacity: 1; }
    33% { opacity: 0; }
    100% { opacity: 0; }
  }

  .slide:nth-child(1) { animation-delay: 0s; }
  .slide:nth-child(2) { animation-delay: 6s; }
  .slide:nth-child(3) { animation-delay: 12s; }

  /* Fade In Left Animation for Heading */
  @keyframes fadeInLeft {
    from {
      opacity: 0;
      transform: translateX(-50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  .animate-fadeInLeft {
    animation: fadeInLeft 1.5s ease-out forwards;
  }
`}</style>
                {/* Exclude these sections when the menu is open */}
                {!isMenuOpen && (
                    <>

                    <section>
  <div className="mt-4 w-full flex flex-col items-center">
    <h2
  style={{
    textShadow: `
      0 0 5px rgba(199, 145, 0, 0.6),   
      0 0 10px rgba(199, 145, 0, 0.7),  
      0 0 15px rgba(199, 145, 0, 0.8)
    `,
    letterSpacing: '2px',
    fontWeight: '100',
    transform: 'translateY(-2px)',
    color: '#FFFFFF', 
  }}
className="text-[0.90rem] sm:text-2xl md:text-4xl lg:text-4xl font-vogue text-left sm:text-center mb-8 mt-10 transition-all duration-700 ease-in-out transform hover:scale-110 hover:text-glow ml-5 md:ml-0 lg:ml-0"
>
  <span className="relative bg-clip-text  font-thin">
    Experience the <span className="relative after:absolute after:bg-gradient-to-r from-[#FFD700] to-[#B8860B] after:h-[2px] after:w-0 after:left-0 after:bottom-0 after:transition-all after:duration-500 hover:after:w-full">Transformative Power</span>
  </span>
  <br />
  <span className="relative  bg-clip-text  font-thin">
    of Intuitive Therapy <span className="relative after:absolute after:bg-gradient-to-r from-[#FFD700] to-[#B8860B] after:h-[2px] after:w-0 after:left-0 after:bottom-0 after:transition-all after:duration-500 hover:after:w-full">VALIDATED</span>
  </span> by Scientific Evidence!
</h2>
  </div>
                   <section className="flex flex-col items-center justify-center  text-white py-12 px-4">
      {/* Video Section */}
      <div className="relative w-full max-w-4xl h-64 md:h-96 overflow-hidden rounded-lg">
        <Image
          src={AboutUsImage}
          alt="Video thumbnail"
          className="w-full h-full object-cover"
        />
        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <button className="text-white bg-customGold bg-opacity-30 rounded-full p-4 md:p-6 hover:bg-opacity-50 transition ease-in-out duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 md:h-16 md:w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-1.92A.75.75 0 0010 9.75v4.5a.75.75 0 001.555.138l3.197-1.92a.75.75 0 000-1.3z" />
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </button>
        </div>
      </div>
      <div className="text-center text-2xl mt-10 sm:text-base md:text-lg lg:text-xl xl:text-4xl 2xl:text-4xl font-vogue ">
  <h1 style={{
    textShadow: `
      0 0 5px rgba(199, 145, 0, 0.6),   
      0 0 10px rgba(199, 145, 0, 0.7),  
      0 0 15px rgba(199, 145, 0, 0.8)
    `,
    letterSpacing: '2px',
    fontWeight: '100',
    transform: 'translateY(-2px)',
    color: '#FFFFFF', 
  }}>Featured on</h1>
  <div className={styles.scroller}>
  <div className={styles.infiniteScroll}>
    {Array(5)
      .fill([...logos])
      .flat()
      .map((logo, index) => (
        <Image
          key={index}
          src={logo.src}
          alt={logo.alt}
          className="h-6 sm:h-8 md:h-10 mt-6 lg:h-12 mx-4 object-contain"
          style={{ width: 'auto' }}
        />
      ))}
  </div>
</div>
</div>
      </section>
</section>
                        {/* <section>
                            <LiveEvent events={events} />
                        </section> */}

                        <section className="relative flex flex-col items-center justify-center px-4 py-16 ">

    {/* Text and Content */}
    <div className="w-full max-w-7xl text-left sm:text-center"> 
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-9   text-white font-thin">
             <span className="text-white bg-clip-text font-thin font-vogue"
    style={{
      textShadow: `
    
     0 0 5px rgba(199, 145, 0, 0.6),   
    0 0 10px rgba(199, 145, 0, 0.7),  
    0 0 15px rgba(199, 145, 0, 0.8)  
      `,
      letterSpacing: '2px',
      fontWeight: '100',
      transform: 'translateY(-2px)',     
    }}
  >Connect 1:1 with Our ESP Advisors</span>  
        </h2>

        <p className="text-lg sm:text-xl text-[#CCCCCC] tracking-wide font-segoe text-left leading-relaxed mx-auto max-w-full lg:max-w-5xl">
    Our advisors are rigorously scientifically tested for exceptional intuition (Extra Sensory Perception) and cross-trained to provide guidance and therapy that goes beyond the ordinary.
</p>


        {/* <blockquote className="text-lg sm:text-xl text-[#CCCCCC] mb-6 text-left font-segoe leading-relaxed border-l-2 border-customGold pl-4 mx-auto">
            “North Node is transcending the boundaries of conventional therapy by bridging the gap between the metaphysical and the scientific. Our advisors are exceptionally intuitive, scientifically validated, and deeply empathetic. This unique blend provides profound understanding and support, making this new style of therapy truly transformative.”
        </blockquote>

        <button className="mt-8 px-6 py-3 rounded-lg font-segoe text-white bg-customGold hover:bg-opacity-80 transition-all duration-300 font-semibold shadow-lg tracking-wider">
            Explore Advisors
        </button> */}
    </div>
              {/* Image Collage at the Top */}
    <div className="relative mb-8 flex justify-center mt-12">
        <div className="grid grid-cols-3 gap-4 w-full max-w-7xl"> 
            {/* Image 1 */}
            <div className="w-full h-48 overflow-hidden rounded-lg">
                <Image
                    src={Image9}
                    alt="ESP Advisor" 
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                />
            </div>
            {/* Image 2 */}
            <div className="w-full h-48 overflow-hidden rounded-lg">
                <Image
                    src={Image10}
                    alt="ESP Advisor" 
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                />
            </div>
            {/* Image 3 */}
            <div className="w-full h-48 overflow-hidden rounded-lg">
                <Image
                    src={Image11}
                    alt="ESP Advisor" 
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                />
            </div>
        </div>
    </div>
</section>


                      <section className="py-8 px-4 md:px-20">
  <div className="max-w-6xl mx-auto text-center">
    <div className="flex flex-col md:flex-row items-center justify-between md:space-x-12 space-y-8 md:space-y-0">
      
      {/* Image Section */}
      <div className="md:w-1/3 flex justify-center relative">
        <Image
          src={TestimonialImage} 
          alt="Advisor"
          className="w-40 h-40 sm:w-48 sm:h-48 object-cover rounded-full shadow-xl transform transition-transform duration-500 hover:scale-110 hover:rotate-3"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-customGold via-transparent to-transparent opacity-50 rounded-full shadow-2xl"></div>
      </div>

      {/* Testimonial Text */}
      <div className="md:w-2/3 sm:p-10 rounded-xl shadow-2xl transition-transform duration-700 hover:shadow-goldGlow">
        <blockquote className="text-base sm:text-xl md:text-2xl font-light font-segoe text-[#DDDDDD] leading-relaxed tracking-wide sm:tracking-widest text-left sm:text-center">
           <p>
              &quot;North Node has revolutionized how I approach spiritual growth and self-development. The level of scientific validation they apply to intuitive practices is unmatched. It&apos;s a platform that combines the best of both worlds—wisdom and science.&quot;
          </p>
         </blockquote>


        {/* Media Personality Details */}
        <div className="mt-6 sm:mt-8 text-left">
          <h4 className="text-xl sm:text-2xl md:text-3xl font-bold font-segoe text-customGold tracking-tight">
            Dr. Evelyn Turner
          </h4>
          <p className="text-sm sm:text-md font-medium text-[#BBBBBB] tracking-wide">
            Astrology Expert & Author, North Node Ambassador
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
                        <section >
                            <WhyNorthNode />
                        </section>
                        <section
      ref={ref}
      className="relative py-12"
      
    >
      <div className="flex flex-col md:flex-row justify-center  md:space-y-0 max-w-7xl mx-auto py-8">
        {/* 24/7 Availability */}
        <div className="bg-customDark p-8 flex-1 text-center rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-110 hover:shadow-2xl hover:bg-opacity-90">
          <h3 className="text-4xl sm:text-5xl font-thin font-vogue text-customGold">
            {inView && <CountUp start={0} end={24} duration={3} />} / 7
          </h3>
          <p className="text-white mt-3 text-2xl font-vogue font-light">Availability</p>
        </div>

        {/* Divider */}
        <div className="relative flex items-center mx-1">
          <span className="absolute left-0 h-full w-px bg-gradient-to-b from-gray-500 to-gray-700"></span>
        </div>

        {/* Free Trial */}
        <div className="bg-customDark p-8 flex-1 text-center rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-110 hover:shadow-2xl hover:bg-opacity-90">
          <h3 className="text-4xl  sm:text-5xl font-thin font-vogue text-customGold">
            {inView && <CountUp start={0} end={1} duration={3} />} Free
          </h3>
          <p className="text-white font-vogue mt-3 text-2xl font-light">Trial</p>
        </div>

        {/* Divider */}
        <div className="relative flex items-center mx-1">
          <span className="absolute left-0 h-full w-px bg-gradient-to-b from-gray-500 to-gray-700"></span>
        </div>

        {/* Full Board of Advisors */}
        <div className="bg-customDark p-8 flex-1 text-center rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-110 hover:shadow-2xl hover:bg-opacity-90">
          <h3 className="text-4xl sm:text-5xl font-thin font-vogue text-customGold">
            {inView && <CountUp start={0} end={50} duration={3} />}+
          </h3>
          <p className="text-white mt-3 font-vogue text-2xl font-light">Board of Advisors</p>
        </div>

        {/* Divider */}
        <div className="relative flex items-center mx-1">
          <span className="absolute left-0 h-full w-px bg-gradient-to-b from-gray-500 to-gray-700"></span>
        </div>

        {/* Community Members */}
        <div className="bg-customDark p-8 flex-1 fon text-center rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-110 hover:shadow-2xl hover:bg-opacity-90">
          <h3 className="text-4xl sm:text-5xl  font-thin font-vogue text-customGold">
            {inView && <CountUp start={0} end={10000} duration={3} separator="," />}+
          </h3>
          <p className="text-white mt-3 font-vogue text-2xl font-light">Community Members</p>
        </div>
      </div>
    </section>
                        <section className=" text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left sm:text-center">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-thin font-vogue mb-4 leading-tight  ">
       <span className="text-white bg-clip-text font-thin font-vogue"
    style={{
      textShadow: `
   
     0 0 5px rgba(199, 145, 0, 0.6),   
    0 0 10px rgba(199, 145, 0, 0.7),  
    0 0 15px rgba(199, 145, 0, 0.8)    
      `,
      letterSpacing: '2px',
      fontWeight: '100',
      transform: 'translateY(-2px)',     
    }}>TEST NOW FOR FREE</span>
    </h1>
        <h2 className="text-2xl sm:text-2xl lg:text-3xl  mb-6 leading-tight font-thin font-vogue text-customGold">
          Download App
        </h2>
        
        <div className="flex justify-center space-x-6 mt-9">
  {/* Apple Store Button */}
  <a
    href="https://www.apple.com/app-store/"
    target="_blank"
    rel="noopener noreferrer"
    className="w-44 h-14 bg-gradient-to-r from-[#ffffff80] via-[#ffffffcc] to-[#ffffff80] backdrop-blur-xl rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl transition-transform transform hover:scale-110 hover:-translate-y-2 hover:shadow-customGold relative overflow-hidden"
    style={{
      border: '2px solid rgba(255, 255, 255, 0.3)',
      boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.5)',
    }}
  >
    {/* Inner Glow Effect */}
    <Image
      src={appleStore}
      alt="Download on the Apple Store"
      className="relative w-36 h-auto z-10 transition-all duration-500 ease-in-out transform hover:scale-115 hover:saturate-150"
      style={{
        filter: 'brightness(0.95)',
      }}
    />
   
    <div
      className="absolute inset-0 rounded-full border-2 border-transparent animate-pulse hover:border-customGold transition-all duration-500 ease-in-out"
      style={{
        boxShadow: '0 0 30px rgba(199, 145, 0, 0.9)',
      }}
    />

    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#ffd70050] to-[#ffb80060] opacity-100 hover:opacity-70 transition-opacity duration-500 ease-in-out" />
  </a>

  {/* Google Play Button */}
  <a
    href="https://play.google.com/store"
    target="_blank"
    rel="noopener noreferrer"
    className="w-44 h-14 bg-gradient-to-r from-[#ffffff80] via-[#ffffffcc] to-[#ffffff80] backdrop-blur-xl rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl transition-transform transform hover:scale-110 hover:-translate-y-2 hover:shadow-customGold relative overflow-hidden"
    style={{
      border: '2px solid rgba(255, 255, 255, 0.3)',
      boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.5)',
    }}
  >
    {/* Inner Glow Effect */}
    <Image
      src={googleStore}
      alt="Download on Google Play"
      className="relative w-36 h-auto z-10 transition-all duration-500 ease-in-out transform hover:scale-115 hover:saturate-150"
      style={{
        filter: 'brightness(0.95)', 
      }}
    />
    {/* Pulsating Glow Effect */}
    <div
      className="absolute inset-0 rounded-full border-2 border-transparent animate-pulse hover:border-customGold transition-all duration-500 ease-in-out"
      style={{
        boxShadow: '0 0 30px rgba(199, 145, 0, 0.9)',
      }}
    />
    {/* Hover Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#ffd70050] to-[#ffb80060] opacity-100 hover:opacity-70 transition-opacity duration-500 ease-in-out" />
  </a>
</div>

      </div>
      
    </section>
                         <section>
                            <Testimonial />
                        </section>
                        
                        {/* <section>
                            <CoursesLanding />
                        </section> */}
                        
                       
                        <section>
                            <ExploreLanding />
                        </section>
                         <section>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold   text-center mb-8 mt-20">
                         <span className="text-white bg-clip-text font-thin font-vogue "
    style={{
      textShadow: `
    
     0 0 5px rgba(199, 145, 0, 0.6),   
    0 0 10px rgba(199, 145, 0, 0.7),  
    0 0 15px rgba(199, 145, 0, 0.8)
      `,
      letterSpacing: '2px',
      fontWeight: '100',
      transform: 'translateY(-2px)',     
    }}
  >NORTH NODE  SCHOOL OF SELF DEVELOPMENT</span>
                           </h2>
                            <LeaderLanding />
                        </section>
                     
                        <section className="py-16">
  <div className="max-w-6xl mx-auto px-4">
    <div className="flex flex-col sm:flex-row items-center sm:justify-between">
      {/* Text Content */}
<div className="sm:w-2/3 p-8 rounded-lg border-l-2 border-customGold lg:border-l-2 h-60">
        <h3 className="text-2xl font-thin text-customGold mb-6 font-vogue text-center sm:text-left">Merit-Based Admission: How It Works</h3>
        <ul className="space-y-4 font-segoe text-gray-300 text-lg">
          <li>
            <span className=" font-segoe text-customGold">1.</span> Take a time-metered test.
          </li>
          <li>
            <span className=" font-segoe text-customGold">2.</span> Interview with an advisor.
          </li>
          <li>
            <span className=" font-segoe text-customGold">3.</span> Enroll.
          </li>
        </ul>
      </div>

      {/* Image on the Right */}
     <div className="w-60 h-60 sm:w-1/3 sm:h-1/3 mt-8 sm:mt-0 sm:ml-6">
  <Image
    src={zodiacCircle}
    alt="Merit-Based Admission"
    className="w-60 h-60 object-cover rounded-full"
  />
</div>

    </div>
  </div>
</section>


                         <section className=" text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-4xl font-thin mb-4 leading-tight font-vogue ">
        <span className="text-white bg-clip-text font-thin font-vogue"
    style={{
      textShadow: `
    
     0 0 5px rgba(199, 145, 0, 0.6),   
    0 0 10px rgba(199, 145, 0, 0.7),  
    0 0 15px rgba(199, 145, 0, 0.8) 
      `,
      letterSpacing: '2px',
      fontWeight: '100',
      transform: 'translateY(-2px)',     
    }}>Join Now</span>
    </h1>
        {/* <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 leading-tight font-segoe text-customGold">
          Join Now
        </h2>
        <p className="text-lg sm:text-xl font-segoe lg:text-2xl font-medium ">
          Experience Your Greatest Transformation
        </p>
        <p className="text-sm sm:text-md font-segoe lg:text-lg ">
          Download the North Node app today to connect with our ESP advisors and take your life beyond the ordinary!
        </p> */}
        <div className="flex justify-center space-x-6 mt-9">
  {/* Apple Store Button */}
  <a
    href="https://www.apple.com/app-store/"
    target="_blank"
    rel="noopener noreferrer"
    className="w-44 h-14 bg-gradient-to-r from-[#ffffff80] via-[#ffffffcc] to-[#ffffff80] backdrop-blur-xl rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl transition-transform transform hover:scale-110 hover:-translate-y-2 hover:shadow-customGold relative overflow-hidden"
    style={{
      border: '2px solid rgba(255, 255, 255, 0.3)',
      boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.5)',
    }}
  >
    {/* Inner Glow Effect */}
    <Image
      src={appleStore}
      alt="Download on the Apple Store"
      className="relative w-36 h-auto z-10 transition-all duration-500 ease-in-out transform hover:scale-115 hover:saturate-150"
      style={{
        filter: 'brightness(0.95)',
      }}
    />
   
    <div
      className="absolute inset-0 rounded-full border-2 border-transparent animate-pulse hover:border-customGold transition-all duration-500 ease-in-out"
      style={{
        boxShadow: '0 0 30px rgba(199, 145, 0, 0.9)',
      }}
    />

    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#ffd70050] to-[#ffb80060] opacity-100 hover:opacity-70 transition-opacity duration-500 ease-in-out" />
  </a>

  {/* Google Play Button */}
  <a
    href="https://play.google.com/store"
    target="_blank"
    rel="noopener noreferrer"
    className="w-44 h-14 bg-gradient-to-r from-[#ffffff80] via-[#ffffffcc] to-[#ffffff80] backdrop-blur-xl rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl transition-transform transform hover:scale-110 hover:-translate-y-2 hover:shadow-customGold relative overflow-hidden"
    style={{
      border: '2px solid rgba(255, 255, 255, 0.3)',
      boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.5)',
    }}
  >
    {/* Inner Glow Effect */}
    <Image
      src={googleStore}
      alt="Download on Google Play"
      className="relative w-36 h-auto z-10 transition-all duration-500 ease-in-out transform hover:scale-115 hover:saturate-150"
      style={{
        filter: 'brightness(0.95)', 
      }}
    />
    {/* Pulsating Glow Effect */}
    <div
      className="absolute inset-0 rounded-full border-2 border-transparent animate-pulse hover:border-customGold transition-all duration-500 ease-in-out"
      style={{
        boxShadow: '0 0 30px rgba(199, 145, 0, 0.9)',
      }}
    />
    {/* Hover Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#ffd70050] to-[#ffb80060] opacity-100 hover:opacity-70 transition-opacity duration-500 ease-in-out" />
  </a>
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

export default LandingPage;