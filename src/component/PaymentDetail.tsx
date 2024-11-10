'use client';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import ImagePayment from '../assets/paymentImage.jpg';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardNumberElement, CardExpiryElement, CardCvcElement, useStripe, useElements } from '@stripe/react-stripe-js';
import Footer from './Footer';
import { FiMenu } from 'react-icons/fi';
import Link from 'next/link';
import NavbarMenu from './NavbarMenu';
import clientAvatarIcon from '../assets/profile.png';
import advisorAvatarIcon from '../assets/profile.png';
import logo from '../assets/logo-north-node.png'; 
import styles from './LandingPage.module.css'; 



const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

const PaymentForm: React.FC = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null); 
  const [cardholderName, setCardholderName] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const cardNumberElement = elements.getElement(CardNumberElement);
    const cardExpiryElement = elements.getElement(CardExpiryElement);
    const cardCvcElement = elements.getElement(CardCvcElement);

    if (cardNumberElement && cardExpiryElement && cardCvcElement) {
      setLoading(true);
      setError(null); 
      setSuccess(null); 

      // Create a payment method
      const { error: stripeError, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: cardNumberElement,
        billing_details: {
          name: cardholderName,
        },
      });

      if (stripeError) {
        setError(stripeError.message || 'An unknown error occurred.'); 
        setLoading(false);
        return;
      }

      console.log('Payment Method Created:', paymentMethod);

    const response = await fetch('/api/payment', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ paymentMethodId: paymentMethod.id }),
});

// Check if the response is ok
if (!response.ok) {
  const errorResponse = await response.text();
  console.error('Error response:', errorResponse);
  setError('Failed to process payment.');
  return;
}




      const paymentResponse = await response.json();
      if (paymentResponse.error) {
        setError(paymentResponse.error);
      } else {
        console.log('Payment Successful:', paymentResponse);
        setSuccess('Payment Successful! Thank you for your purchase.'); 
      }

      setLoading(false);
    }
  };

  return (
   
    <form onSubmit={handleSubmit} className="max-w-full">
  {/* Cardholder Name Input */}
  <div className="mb-4">
    <label className="block text-gray-700 font-semibold mb-2">Cardholder Name</label>
    <input
      type="text"
      className="w-full px-4 py-2 border border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-customGold focus:border-transparent"
      placeholder="Cardholder Name"
      value={cardholderName}
      onChange={(e) => setCardholderName(e.target.value)}
      required
    />
  </div>

  {/* Card Number Input */}
  <div className="mb-4">
    <label className="block text-gray-700 font-semibold mb-2">Card Number</label>
    <div className="w-full px-4 py-2 border border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-customGold focus:border-transparent">
      <CardNumberElement className="p-2" />
    </div>
  </div>

  {/* Expiry Date and CVC Inputs */}
  <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4 mb-4">
    <div className="w-full md:w-1/2">
      <label className="block text-gray-700 font-semibold mb-2">Expiry Date</label>
      <div className="w-full px-4 py-2 border border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-customGold focus:border-transparent">
        <CardExpiryElement className="p-2" />
      </div>
    </div>
    <div className="w-full md:w-1/2">
      <label className="block text-gray-700 font-semibold mb-2">CVC</label>
      <div className="w-full px-4 py-2 border border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-customGold focus:border-transparent">
        <CardCvcElement className="p-2" />
      </div>
    </div>
  </div>

  {/* Error Message */}
  {error && <div className="mb-4 text-red-500">{error}</div>}
  {success && <div className="mb-4 text-green-500">{success}</div>}

  {/* Pay Now Button */}
  <button
    type="submit"
    className="w-full py-3 bg-customGold text-white font-bold rounded-lg shadow-md hover:bg-yellow-600 transition-all duration-300"
    disabled={!stripe || loading}
  >
    {loading ? 'Processing...' : 'Pay Now'}
  </button>
</form>

   
  );
};

const PaymentDetails: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

    <section>

   <div className="min-h-screen flex items-center justify-center mt-28  px-4">
  <div className="flex flex-col md:flex-row w-full max-w-6xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
    {/* Left Side: Payment Form */}
    <div className="w-full md:w-1/2 p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Payment Details</h2>
      <Elements stripe={stripePromise}>
        <PaymentForm />
      </Elements>
    </div>

    {/* Right Side: Image */}
    <div className="w-full md:w-1/2 relative">
      <Image
        src={ImagePayment}
        alt="Secure Payment"
        className="object-cover w-full h-64 md:h-full"
      />
    </div>
  </div>


    </div>
    <section >
      <Footer />
    </section>
    </section>
  </div>
          
            
        
      
    </>
  );
};
export default PaymentDetails;
