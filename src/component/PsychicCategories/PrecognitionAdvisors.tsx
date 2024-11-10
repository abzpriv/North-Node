'use client';

import React, { useEffect, useRef, useState } from 'react';
import NavbarMenu from '../NavbarMenu';
import styles from '../LandingPage.module.css'; 
import Styles from './PsychicReading.module.css';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../assets/logo-north-node.png'; 
import { FiMenu } from 'react-icons/fi';
import advisor1 from '../../assets/Advisor1.png';
import advisor2 from '../../assets/Advisor2.png';
import advisor3 from '../../assets/Advisor3.png';
import advisor4 from '../../assets/Advisor4.png';
import clientAvatarIcon from '../../assets/profile.png';
import advisorAvatarIcon from '../../assets/profile.png';
import advisor5 from '../../assets/Advisor5.png';
import advisor6 from '../../assets/Advisor6.png';
import advisor7 from '../../assets/Advisor7.png';
import advisor8 from '../../assets/Advisor8.png';
import advisor9 from '../../assets/Advisor9.png';
import advisor10 from '../../assets/Advisor10.png';
import advisor11 from '../../assets/Advisor11.png';
import advisor12 from '../../assets/Advisor12.png';
import advisor13 from '../../assets/Advisor13.png';
import advisor14 from '../../assets/Advisor14.png';
import advisor15 from '../../assets/Advisor15.png';
import advisor16 from '../../assets/Advisor16.png';
import PsychicReadingArticles from './PsychicReadingArticles';
import Footer from '../Footer';
import SearchByCategory from './SearchByCategory ';
const PrecognitionAdvisors: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
const [ratingFilter, setRatingFilter] = useState(0);
const [priceRange, setPriceRange] = useState<[number, number]>([1.99, 39.99]);
const [showOffline, setShowOffline] = useState(false);
const [visibleAdvisors, setVisibleAdvisors] = useState(8);
const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
          const [scrolled, setScrolled] = useState(false);
const [avatarUrl, setAvatarUrl] = useState<string>(clientAvatarIcon.src);
    const fileInputRef = useRef<HTMLInputElement>(null);
     const [isAdvisor, setIsAdvisor] = useState(false);

const handleLoadMore = () => {
    setVisibleAdvisors(prev => prev + 8); 
  };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };


    const advisors = [
  {
    image: advisor1,
    name: "Dakota Johnson",
    title: "Psychic Tarot Reader",
    price: "$3.00/min",
    rating: "5 stars",
    description: "Honest and compassionate readings from an experienced psychic reader.",
    status:"Online",
  },
  {
    image: advisor2,
    name: "Cameron Williamson",
    title: "Psychic Tarot Reader",
    price: "$3.00/min",
    rating: "4.9 stars",
    description: "Honest and compassionate readings from an experienced psychic reader.",
    status:"Busy",
  },
  {
    image: advisor3,
    name: "Esther Howard",
    title: "Psychic Tarot Reader",
    price: "$3.00/min",
    rating: "4.9 stars",
    description: "Honest and compassionate readings from an experienced psychic reader.",
    status:"Online",
  },
  {
    image: advisor4,
    name: "Jane Cooper",
    title: "Psychic Tarot Reader",
    price: "$3.00/min",
    rating: "4.9 stars",
    description: "Honest and compassionate readings from an experienced psychic reader.",
    status:"Busy",
  },
  {
    image: advisor5,
    name: "Darlene Robertson",
    title: "Psychic Tarot Reader",
    price: "$3.00/min",
    rating: "4.9 stars",
    description: "Honest and compassionate readings from an experienced psychic reader.",
    status:"Online",
  },
  {
    image: advisor6,
    name: "Annette Black",
    title: "Psychic Tarot Reader",
    price: "$3.00/min",
    rating: "4.9 stars",
    description: "Honest and compassionate readings from an experienced psychic reader.",
    status:"Busy",
  },
  {
    image: advisor7,
    name: "Leslie Alexander",
    title: "Psychic Tarot Reader",
    price: "$3.00/min",
    rating: "4.9 stars",
    description: "Honest and compassionate readings from an experienced psychic reader.",
    status:"Online",
  },
  {
    image: advisor8,
    name: "Guy Hawkins",
    title: "Psychic Tarot Reader",
    price: "$3.00/min",
    rating: "4.9 stars",
    description: "Honest and compassionate readings from an experienced psychic reader.",
    status:"Busy",
  },
  {
    image: advisor9,
    name: "Dannie Russel",
    title: "Psychic Tarot Reader",
    price: "$3.00/min",
    rating: "4.9 stars ",
    description: "Honest and compassionate readings from an experienced psychic reader.",
    status:"Online",
  },
  {
    image: advisor10,
    name: "Esther Howard",
    title: "Psychic Tarot Reader",
    price: "$3.00/min",
    rating: "4.9 stars",
    description: "Honest and compassionate readings from an experienced psychic reader.",
    status:"Busy",
  },
  {
    image: advisor11,
    name: "Devon Lane",
    title: "Psychic Tarot Reader",
    price: "$3.00/min",
    rating: "4.9 stars",
    description: "Honest and compassionate readings from an experienced psychic reader.",
    status:"Online",
  },
  {
    image: advisor12,
    name: "Kathryn Murphy",
    title: "Psychic Tarot Reader",
    price: "$3.00/min",
    rating: "4.9 ",
    description: "Honest and compassionate readings from an experienced psychic reader.",
    status:"Busy",
  },
  {
    image: advisor13,
    name: "Floyd Miles",
    title: "Psychic Tarot Reader",
    price: "$3:00/min",
    rating: "4.9 stars",
    description: "Honest and compassionate readings from an experienced psychic reader.",
    status:"Online",
  },
  {
    image: advisor14,
    name: "Dianne Russell",
    title: "Psychic Tarot Reader",
    price: "$3.00/min",
    rating: "4.9 stars",
    description: "Honest and compassionate readings from an experienced psychic reader.",
    status:"Busy",
  },
  {
    image: advisor15,
    name: "Jerome Bell",
    title: "Psychic Tarot Reader",
    price: "$3.00/min",
    rating: "4.9 stars",
    description: "Honest and compassionate readings from an experienced psychic reader.",
    status:"Online",
  },
  {
    image: advisor16,
    name: "Courtney Henry",
    title: "Psychic Tarot Reader",
    price: "$3.00/min",
    rating: "2 stars",
    description: "Honest and compassionate readings from an experienced psychic reader.",
    status:"Busy",
  },
  
];

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


  const filteredAdvisors = advisors.filter(advisor => {
    const matchesSearch = advisor.name.toLowerCase().includes(searchQuery.toLowerCase());
    const advisorRating = parseFloat(advisor.rating.replace(/[^0-9.]/g, ''));
    const advisorPrice = parseFloat(advisor.price.replace(/[^0-9.]/g, ''));
    const matchesRating = advisorRating >= ratingFilter;
    const matchesPrice = advisorPrice >= priceRange[0] && advisorPrice <= priceRange[1];
    const matchesStatus = showOffline ? true : advisor.status === 'Online';

    return matchesSearch && matchesRating && matchesPrice && matchesStatus;
  });

    const isFilterActive = searchQuery || ratingFilter > 0 || priceRange[0] !== 1.99 || priceRange[1] !== 39.99 || showOffline;

const advisorsToDisplay = isFilterActive ? filteredAdvisors.slice(0, visibleAdvisors) : advisors.slice(0, visibleAdvisors);

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
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-thin  font-vogue text-white mb-6">
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
                     Precognition Advisors
                     </span>
                       </h2>
                       <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                      The ability to foresee future events.
                      </p>
                      </div>
                     </section>
                  </section>
                  {!isMenuOpen && (
                    <>

                  <section className="w-full px-4 lg:px-20 mx-auto max-w-screen-2xl">
  <div className="mt-14 flex flex-col md:flex-col lg:flex-col justify-between items-center space-y-4 lg:space-y-0">
    <h2 className="text-2xl sm:text-3xl font-vogue text-white">
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
      All Advisor
      </span>
    </h2>

    {/* SearchByCategory Component */}
    <div className="w-full lg:w-auto">
      <SearchByCategory
        onSearchChange={setSearchQuery}
        onRatingChange={setRatingFilter}
        onPriceChange={setPriceRange}
        onOfflineToggle={setShowOffline}
      />
    </div>
  </div>
</section>
                  
                {/* Display Advisors */}
        <section>
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {advisorsToDisplay.length > 0 ? (
                advisorsToDisplay.map((advisor, index) => (
                  <div key={index} className="relative p-4 rounded-xl shadow-lg">
                    <div className="relative">
                      <Image
                        src={advisor.image}
                        alt={advisor.name}
                        className="w-full h-auto object-cover rounded-xl"
                      />
                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t rounded-xl">
                        <h3 className="text-lg font-semibold text-white">{advisor.name}</h3>
                        <p className="text-sm text-gray-300">{advisor.title}</p>
                        <div className="flex justify-between items-center mt-2">
                          <p className="text-gray-300 text-sm">{advisor.price}</p>
                          <div className="flex items-center">
                            <span className="text-yellow-500">★★★★★</span>
                            <span className="text-gray-400 text-sm ml-1">{advisor.rating}</span>
                          </div>
                        </div>
                      </div>
                      {/* Status Badge */}
                      <div
                        className={`absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-semibold ${
                          advisor.status === "Online" ? "bg-green-500 text-white" : "bg-red-500 text-white"
                        }`}
                      >
                        {advisor.status}
                      </div>
                    </div>
                    <p className="text-sm text-gray-400 mt-4 text-center">{advisor.description}</p>

                     {/* Action Button */}
                    <div className="flex justify-center mt-4">
                  {advisor.status === "Online" ? (
  <Link href= "/chat" passHref>
    <div
      className="w-28 h-12 py-3 px-4 rounded-lg font-semibold bg-yellow-500 text-white hover:bg-yellow-600 text-center"
    >
      Connect
    </div>
  </Link>
           ) : (
    <button
   
      className="w-28 h-12 py-2 px-4 rounded-lg font-semibold bg-gray-600 text-white hover:bg-gray-700"
    >
      Notify Me
    </button>
  )}
</div>

                  </div>
                ))
              ) : (
                <p className="text-white">No advisors found matching the criteria.</p>
              )}
            </div>
          </div>
          {/* Load More Button */}
          {advisorsToDisplay.length < (isFilterActive ? filteredAdvisors.length : advisors.length) && (
            <div className="flex justify-center mt-8">
              <button
                className="bg-yellow-500 text-white py-2 px-6 rounded-lg hover:bg-yellow-700"
                onClick={handleLoadMore}
              >
                Load More
              </button>
            </div>
          )}
        </section>


           <section>
            <PsychicReadingArticles />

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

export default PrecognitionAdvisors;