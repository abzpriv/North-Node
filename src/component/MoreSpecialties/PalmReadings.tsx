'use client';

import React, { useState } from 'react';
import NavbarMenu from '../NavbarMenu';
import styles from '../LandingPage.module.css'; 
import Styles from '../PsychicCategories/PsychicReading.module.css';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../assets/logo-north-node.png'; 
import { FiMenu } from 'react-icons/fi';
import advisor1 from '../../assets/Advisor1.png';
import advisor2 from '../../assets/Advisor2.png';
import advisor3 from '../../assets/Advisor3.png';
import advisor4 from '../../assets/Advisor4.png';
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
import PsychicReadingArticles from '../PsychicCategories/PsychicReadingArticles';
import Footer from '../Footer';
import SearchByCategory from '../PsychicCategories/SearchByCategory ';
const PalmReadings: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
const [ratingFilter, setRatingFilter] = useState(0);
const [priceRange, setPriceRange] = useState<[number, number]>([1.99, 39.99]);
const [showOffline, setShowOffline] = useState(false);
const [visibleAdvisors, setVisibleAdvisors] = useState(8);

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
                    <section className=" py-12 text-center">
                     <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-5xl sm:text-6xl font-bold font-baskerville text-white mb-6">
                     Palm Readings
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

                  <section className="w-full px-4 lg:px-20">
  <div className="mt-14 flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
   
    <h2 className="text-2xl sm:text-3xl font-bold text-white">
      All Advisor
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

export default PalmReadings;