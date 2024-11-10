'use client';

import React, { useEffect, useRef, useState } from 'react';
import Footer from './Footer';
import clientAvatarIcon from '../assets/profile.png';
import advisorAvatarIcon from '../assets/profile.png';
import logo from '../assets/logo-north-node.png'; 
import NavbarMenu from './NavbarMenu';
import Link from 'next/link';
import Image from 'next/image';
import { FiMenu } from 'react-icons/fi';
import styles from './LandingPage.module.css'; 


const PaymentManagement: React.FC = () => {
  const currentPlan = "Premium Plan";
  const planDate = "2024-01-01"; 
  const paymentHistory = [
    { id: 1, date: '2024-09-01', amount: '$50', status: 'Paid' },
    { id: 2, date: '2024-08-01', amount: '$50', status: 'Paid' },
    { id: 3, date: '2024-07-01', amount: '$50', status: 'Paid' },
  ];

  const handleCancelSubscription = () => {
    alert('Subscription Cancelled');
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
   const [isAdvisor, setIsAdvisor] = useState(false);
    const [avatarUrl, setAvatarUrl] = useState<string>(clientAvatarIcon.src);
    const fileInputRef = useRef<HTMLInputElement>(null);
 
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


    <section>
    <div className="min-h-screen mt-28 text-gold p-8 flex items-center justify-center">
      <div className="w-full max-w-4xl bg-white shadow-2xl rounded-lg overflow-hidden">
        {/* Payment Management Header */}
        <div className="bg-gradient-to-r from-customGold to-brown-800 p-8 text-center">
          <h1 className="text-4xl font-extrabold text-customDark">Payment Management</h1>
        </div>

        {/* Current Plan */}
        <div className="p-8">
            <h2 className="text-2xl font-semibold text-darkBrown mb-6">Your Current Plan</h2>
            <div className="p-6 bg-gradient-to-r from-gold-100 to-customGold text-customDark text-darkBrown border-2 border-customGold rounded-lg shadow-lg text-center">
              <span className="text-3xl font-bold">{currentPlan}</span>
              <div className="mt-4 text-lg text-customDark">
                <span className="font-semibold">Plan Date:</span> {planDate}
              </div>
            </div>
          </div>

        {/* Cancel Subscription Button */}
        <div className="px-8 pb-6 text-center">
          <button
            onClick={handleCancelSubscription}
            className="px-6 py-3 bg-red-700 text-white text-lg rounded-full shadow-xl font-semibold hover:bg-red-800 transition-all duration-300 transform hover:scale-105"
          >
            Cancel Subscription
          </button>
        </div>

        {/* Payment History Section */}
        <div className="px-8 pb-8">
          <h2 className="text-2xl font-semibold text-customDark mb-6">Payment History</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border-2 border-customGold shadow-lg rounded-lg">
              <thead>
                <tr className="bg-gradient-to-r from-gold to-darkBrown text-customDark uppercase text-sm">
                  <th className="py-3 px-6 text-left">Date</th>
                  <th className="py-3 px-6 text-left">Amount</th>
                  <th className="py-3 px-6 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                {paymentHistory.map((payment) => (
                  <tr key={payment.id} className="border-b border-gray-200 hover:bg-gray-50 text-customDark transition duration-200">
                    <td className="py-3 px-6">{payment.date}</td>
                    <td className="py-3 px-6">{payment.amount}</td>
                    <td className="py-3 px-6">
                      <span className={`px-4 py-1 rounded-full text-sm font-medium ${payment.status === 'Paid' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
                        {payment.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <section className=''>
        <Footer />
    </section>
    </section>
   </div>

  </>
    );
};

export default PaymentManagement;
