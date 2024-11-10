'use client';

import React, { useEffect, useRef, useState } from 'react';
import NavbarMenu from '../NavbarMenu';
import styles from '../LandingPage.module.css'; 
import Styles from '../PsychicCategories/PsychicReading.module.css';
import Image from 'next/image';
import Link from 'next/link';
import clientAvatarIcon from '../../assets/profile.png';
import advisorAvatarIcon from '../../assets/profile.png';
import logo from '../../assets/logo-north-node.png'; 
import { FiMenu } from 'react-icons/fi';
import CourseImage1 from '../../assets/CourseImage1.png'
import CourseImage2 from '../../assets/CourseImage2.png'
import CourseImage3 from '../../assets/CourseImage3.png'
import Footer from '../Footer';
import ExploreCategories from './ExploreCategories';
export const course = [
  {
    image: CourseImage1,
    title: "Mastering the growth Mindset",
    price: "$35.00/min",
    rating: "5 stars",
    description: "Honest and Compassionate readings from an experienced psychic reader! If you have been led here, it",

  },
  {
    image: CourseImage2,
    title: "Mastering the growth Mindset",
    price: "$35.00/min",
    rating: "4.9 stars",
    description: "Honest and Compassionate readings from an experienced psychic reader! If you have been led here, it",
 
  },
  {    image: CourseImage3,
    title: "Mastering the growth Mindset",
    price: "$35.00/min",
    rating: "4.9 stars",
    description: "Honest and Compassionate readings from an experienced psychic reader! If you have been led here, it",

  },
  {
    image: CourseImage1,
    title: "Mastering the growth Mindset",
    price: "$35.00/min",
    rating: "4.9 stars",
    description: "Honest and Compassionate readings from an experienced psychic reader! If you have been led here, it",

  },
  {
    image: CourseImage2,
    title: "Mastering the growth Mindset",
    price: "$35.00/min",
    rating: "4.9 stars",
    description: "Honest and Compassionate readings from an experienced psychic reader! If you have been led here, it",

  },
  {
    image: CourseImage3,
    title: "Mastering the growth Mindset",
    price: "$35.00/min",
    rating: "4.9 stars",
    description: "Honest and Compassionate readings from an experienced psychic reader! If you have been led here, it",

  },
  {
    image: CourseImage1,
    title: "Mastering the growth Mindset",
    price: "$35.00/min",
    rating: "4.9 stars",
    description: "Honest and Compassionate readings from an experienced psychic reader! If you have been led here, it",
  
  },
  {
    image: CourseImage2,
    title: "Mastering the growth Mindset",
    price: "$35.00/min",
    rating: "4.9 stars",
    description: "Honest and Compassionate readings from an experienced psychic reader! If you have been led here, it",
 
  },
  {
    image: CourseImage3,
    title: "Mastering the growth Mindset",
    price: "$35.00/min",
    rating: "4.9 stars ",
    description: "Honest and Compassionate readings from an experienced psychic reader! If you have been led here, it",

  },
  {
    image: CourseImage1,
    title: "Mastering the growth Mindset",
    price: "$35.00/min",
    rating: "4.9 stars",
    description: "Honest and Compassionate readings from an experienced psychic reader! If you have been led here, it",

  },
  {
    image: CourseImage2,
    title: "Mastering the growth Mindset",
    price: "$35.00/min",
    rating: "4.9 stars",
    description: "Honest and Compassionate readings from an experienced psychic reader! If you have been led here, it",
 
  },
  {
    image: CourseImage3,
    title: "Mastering the growth Mindset",
    price: "$35.00/min",
    rating: "4.9 ",
    description: "Honest and Compassionate readings from an experienced psychic reader! If you have been led here, it",

  },
  {
    image: CourseImage1,
    title: "Mastering the growth Mindset",
    price: "$35:00/min",
    rating: "4.9 stars",
    description: "Honest and Compassionate readings from an experienced psychic reader! If you have been led here, it",

  },
  {
    image: CourseImage2,
    title: "Mastering the growth Mindset",
    price: "$35.00/min",
    rating: "4.9 stars",
    description: "Honest and Compassionate readings from an experienced psychic reader! If you have been led here, it",

  },
  {
    image: CourseImage3,
    title: "Mastering the growth Mindset",
    price: "$35.00/min",
    rating: "4.9 stars",
    description: "Honest and Compassionate readings from an experienced psychic reader! If you have been led here, it",
  
  },
  
  
];
const Psychometry: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [ratingFilter, setRatingFilter] = useState(0);
  const [priceRange, setPriceRange] = useState<[number, number]>([1.99, 39.99]);
  const [showOffline, setShowOffline] = useState(false);
  const [visibleCourses, setVisibleCourses] = useState(9);
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState<string>(clientAvatarIcon.src);
    const fileInputRef = useRef<HTMLInputElement>(null);
     const [isAdvisor, setIsAdvisor] = useState(false);


  const handleLoadMore = () => {
    setVisibleCourses((prev) => prev + 9);
  };

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


  


   const filteredCourses = course.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase());
    const courseRating = parseFloat(course.rating.replace(/[^0-9.]/g, ''));
    const coursePrice = parseFloat(course.price.replace(/[^0-9.]/g, ''));
  

  
  });

  const isFilterActive = searchQuery || ratingFilter > 0 || priceRange[0] !== 1.99 || priceRange[1] !== 39.99 || showOffline;

  // Display filtered or all courses
  const coursesToDisplay = isFilterActive ? filteredCourses.slice(0, visibleCourses) : course.slice(0, visibleCourses);
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
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-thin font-vogue  mb-6">
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
                     Psychometry
                     </span>
                       </h2>
                       <p className="text-gray-300 font-segoe text-sm sm:text-base leading-relaxed">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s 
                      standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                       It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                      </p>
                      </div>
                     </section>
                  </section>
                  {!isMenuOpen && (
                    <>

                  
                  
              
       {/* Display Courses */}
<section>
  <div className="max-w-7x1 mx-auto px-4">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 "> 
      {coursesToDisplay.length > 0 ? (
        coursesToDisplay.map((course, index) => (
          <div key={index} className="  p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="relative">
              <Image
              src={course.image}
               alt={course.title}
                className="w-full h-64 object-cover rounded-xl"
                    />
  
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-xl"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-xl font-semibold text-white">{course.title}</h3> 
                <div className="flex justify-between items-center mt-2">
                  <p className="text-white text-sm">Price: {course.price}</p>
                  <div className="flex items-center">
                    <span className="text-yellow-500">★★★★★</span> 
                    <span className="text-gray-400 text-sm ml-1">{course.rating}</span>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-sm text-white mt-4 text-center">{course.description}</p>

            {/* Buy Now Button */}
            <div className="flex justify-center mt-4">
              <Link href="/courses/buyNow">
              <button
                className="w-28 h-11 py-2 px-4 rounded-lg font-semibold bg-yellow-500 text-white hover:bg-yellow-600 transition-colors duration-300"
              >
                Buy Now
              </button>
              </Link>
            </div>
          </div>
        ))
      ) : (
        <p className="text-white">No courses found matching the criteria.</p>
      )}
    </div>
  </div>
  
  {/* Load More Button */}
  <div className="flex justify-center mt-8">
    <button
      className="bg-yellow-500 text-white py-2 px-6 rounded-lg hover:bg-yellow-700 transition-colors duration-300"
      onClick={handleLoadMore}
    >
      Load More
    </button>
  </div>
</section>

             <section>
                <ExploreCategories />
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

export default Psychometry;