'use client';

import React, { useState } from 'react';
import NavbarMenu from '../NavbarMenu';
import styles from '../LandingPage.module.css'; 
import Styles from '../PsychicCategories/PsychicReading.module.css';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../assets/logo-north-node.png'; 
import { FiMenu } from 'react-icons/fi';
import CourseImage1 from '../../assets/CourseImage1.png'
import CourseImage2 from '../../assets/CourseImage2.png'
import CourseImage3 from '../../assets/CourseImage3.png'
import Footer from '../Footer';
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

  ];

const AllCategories: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
 

 

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

   

  const coursesToDisplay = course;
    
  
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
                <header className={styles.header}>
                    <div className={styles.logo}>
                        <Link href="/" passHref>
                            <Image src={logo} alt="North Node Logo" />
                        </Link>
                    </div>
                    <nav className={styles.nav}>
                        <Link href="/Login-page" className={styles.joinLink}>Join As</Link>
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
                    <section className="py-12 text-center">
                        <div className="max-w-4xl mx-auto px-4">
                            <h2 className={`text-5xl sm:text-6xl font-bold font-baskerville text-white mb-6 ${Styles.customFadeIn}`}>
                                All Categories
                            </h2>

                            <div className={`flex flex-wrap justify-center gap-4 mt-8`}>
                                {/* Individual category items with links */}
                                {[
                                    { name: 'Fitness', link: '/courses/telepathy' },
                                    { name: 'Career Growth', link: '/courses/clairvoyance' },
                                    { name: 'Money & Finance', link: '/courses/precognition' },
                                    { name: 'Entrepreneurial Mindset', link: '/courses/psychometry' },
                                    { name: 'Happiness', link: '/courses/retrocognition' },
                                    { name: 'Happiness', link: '/courses/metaHypnsis' },
                                    { name: 'Fitness', link: '/courses/telepathy' },
                                    { name: 'Entrepreneurial Mindset', link: '/courses/clairvoyance' },
                                    { name: 'Career Growth', link: '/courses/precognition' },
                                    { name: 'Habits & Discipline', link: '/courses/psychometry' },
                                    { name: 'Happiness', link: '/courses/retrocognition' },
                                    { name: 'Healing & Recovery', link: '/courses/metaHypnsis' },
                                    { name: 'Money & Finance', link: '/courses/telepathy' },
                                    { name: 'Impact', link: '/courses/clairvoyance' },
                                    { name: 'Influence', link: '/courses/precognition' },
                                    { name: 'Leadership', link: '/courses/psychometry' },
                                    { name: 'Look Good', link: '/courses/retrocognition' },
                                    { name: 'Meditation', link: '/courses/metaHypnsis' },
                                    { name: 'Mind Management', link: '/courses/telepathy' },
                                    { name: 'Mind Power', link: '/courses/clairvoyance' },
                                    { name: 'Mindset', link: '/courses/precognition' },
                                    { name: 'Passion', link: '/courses/retrocognition' },
                                    { name: 'Quality of Life', link: '/courses/metaHypnsis' },
                                    { name: 'Running a Business', link: '/courses/clairvoyance' },
                                    { name: 'Happiness', link: '/courses/telepathy' },
                                    { name: 'Entrepreneurial Mindset', link: '/courses/psychometry' },
                                ].map((category, index) => (
                                    <div
                                        key={category.name}
                                        className={`bg-white hover:bg-customGold text-gray-900 hover:text-white px-4 py-2 rounded-full shadow-md flex items-center transition-transform transform ${Styles.customAdvancedHoverEffect} ${Styles.customAdvanced3DAnimation}`}
                                        style={{ animationDelay: `${index * 0.1}s` }}
                                    >
                                        <a href={category.link} className="text-sm font-medium ">
                                            {category.name}
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>


</section>


                  {!isMenuOpen && (
                    <>
                    <section>
              <div className="font-baskerville text-center mt-36 ml-16 text-4xl text-white">
                Trending Courses
              </div>
            </section>

             <section>
  <div className="max-w-7x1 mx-auto px-4 overflow-hidden">
    <div className="flex flex-nowrap animate-scroll">
      {/* Original Courses */}
      {coursesToDisplay.length > 0 ? (
        <>
          {coursesToDisplay.map((course, index) => (
            <div
              key={index}
              className="inline-block flex-none w-112 m-4 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="relative">
                <Image
                  src={course.image}
                  alt={course.title}
                  className="w-full h-80 object-cover rounded-xl" // Adjusted height as well for proportionality
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
                  <button className="w-28 h-11 py-2 px-4 rounded-lg font-semibold bg-yellow-500 text-white hover:bg-yellow-600 transition-colors duration-300">
                    Buy Now
                  </button>
                </Link>
              </div>
            </div>
          ))}

          {/* Duplicated Courses */}
          {coursesToDisplay.map((course, index) => (
            <div
              key={`duplicate-${index}`}
              className="inline-block flex-none w-112 m-4 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="relative">
                <Image
                  src={course.image}
                  alt={course.title}
                  className="w-full h-80 object-cover rounded-xl"
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
                  <button className="w-28 h-11 py-2 px-4 rounded-lg font-semibold bg-customGold text-white hover:bg-yellow-600 transition-colors duration-300">
                    Buy Now
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </>
      ) : (
        <p className="text-white">No courses found matching the criteria.</p>
      )}
    </div>
  </div>

  {/* CSS for the animation */}
  <style jsx>{`
    @keyframes scroll {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-50%);
      }
    }

    .animate-scroll {
      display: flex;
      width: max-content;
      animation: scroll 60s linear infinite;
    }
  `}</style>
</section>

            <section className='mt-36'>
             <Footer />
            </section>
              </>
                )}


                  </div>




  </>
    );
};

export default AllCategories;