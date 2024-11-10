'use client';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import review from '../../assets/Review.png'
import CommentImage from '../../assets/ChatImageReviews.png';
import Footer from '../Footer';
import styles from '../LandingPage.module.css'; 
import clientAvatarIcon from '../../assets/profile.png';
import advisorAvatarIcon from '../../assets/profile.png';
import logo from '../../assets/logo-north-node.png'; 
import Link from 'next/link';
import NavbarMenu from '../NavbarMenu';
import { FiMenu } from 'react-icons/fi';



const CourseDetail: React.FC = () => {
    const [rating, setRating] = useState(0);
    const [name, setName] = useState(''); 
    const [feedbackMessage, setFeedbackMessage] = useState('');
    const [message, setMessage] = useState('');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
      const [scrolled, setScrolled] = useState(false);
const [avatarUrl, setAvatarUrl] = useState<string>(clientAvatarIcon.src);
    const fileInputRef = useRef<HTMLInputElement>(null);
     const [isAdvisor, setIsAdvisor] = useState(false);

  const courseIntroduction = "This course covers advanced topics in web development...";
  const lessons = [
    { title: "Lesson 1: Introduction to React", completed: true },
    { title: "Lesson 2: State Management", completed: false },
    { title: "Lesson 3: Routing", completed: false },
    { title: "Lesson 4: API Integration", completed: false },
    { title: "Lesson 5: Styling Components", completed: false },
    { title: "Lesson 6: Deployment", completed: false },
  ];

  const quizzes = [
    { title: "Quiz 1: React Basics", completed: true },
    { title: "Quiz 2: State Management", completed: false },
    { title: "Quiz 3: Routing Fundamentals", completed: false },
    { title: "Quiz 4: API Calls", completed: false },
    { title: "Quiz 5: CSS in JS", completed: false },
    { title: "Quiz 6: Deployment Strategies", completed: false },
  ];

  const completedLessons = lessons.filter(lesson => lesson.completed).length;
  const completionPercentage = (completedLessons / lessons.length) * 100;

  // State for tab selection
  const [activeTab, setActiveTab] = useState('review');

  const handleSendMessage = () => {
    if (name && message) {
      // Logic to send the message goes here (e.g., API call)
      setFeedbackMessage("Your message has been sent!");
      setMessage(''); // Clear the message input
      setName(''); // Clear the name input after sending

      // Hide feedback message after a few seconds
      setTimeout(() => {
        setFeedbackMessage('');
      }, 3000);
    } else {
      setFeedbackMessage("Please enter your name and message."); // Error feedback
    }
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
    
    <section className=" mt-28 text-gray-300 min-h-screen">
      <div className="p-10  mx-auto max-w-5xl ">
        {/* Course Completion Section */}
        <div className="mb-8">
          <h3 className="text-customGold text-4xl font-thin font-vogue mb-4"><span style={{
    textShadow: `
      0 0 5px rgba(199, 145, 0, 0.6),   
      0 0 10px rgba(199, 145, 0, 0.7),  
      0 0 15px rgba(199, 145, 0, 0.8)
    `,
    letterSpacing: '2px',
    fontWeight: '100',
    transform: 'translateY(-2px)',
    color: '#FFFFFF', 
  }}>Course Completion</span></h3>
          <div className="w-full bg-gray-700 rounded-lg">
            <div
              className="bg-customGold text-xs font-medium text-center text-black h-6 rounded-lg"
              style={{ width: `${completionPercentage}%` }}
            >
              {Math.round(completionPercentage)}%
            </div>
          </div>
        </div>

        {/* Video Section */}
        <div className="mb-12 flex flex-col items-center">
          <h2 className="text-customGold text-5xl font-thin font-vogue mb-6 mt-10"><span style={{
    textShadow: `
      0 0 5px rgba(199, 145, 0, 0.6),   
      0 0 10px rgba(199, 145, 0, 0.7),  
      0 0 15px rgba(199, 145, 0, 0.8)
    `,
    letterSpacing: '2px',
    fontWeight: '100',
    transform: 'translateY(-2px)',
    color: '#FFFFFF', 
  }}>Course Video</span></h2>
          <div className="relative w-full h-72 rounded-lg overflow-hidden shadow-2xl">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Course Video"
              allowFullScreen
            />
          </div>
        </div>

        {/* Course Introduction */}
        <div className="mb-8">
          <h3 className="text-customGold text-4xl font-thin font-vogue mb-4"><span style={{
    textShadow: `
      0 0 5px rgba(199, 145, 0, 0.6),   
      0 0 10px rgba(199, 145, 0, 0.7),  
      0 0 15px rgba(199, 145, 0, 0.8)
    `,
    letterSpacing: '2px',
    fontWeight: '100',
    transform: 'translateY(-2px)',
    color: '#FFFFFF', 
  }}>Course Introduction </span></h3>
          <p className="leading-relaxed text-lg">{courseIntroduction}</p>
        </div>

        {/* Lessons Navigation */}
        <div className="mb-12 border-b border-customGold pb-6">
      <h3 className="text-customGold text-4xl font-thin font-vogue mb-6"><span style={{
    textShadow: `
      0 0 5px rgba(199, 145, 0, 0.6),   
      0 0 10px rgba(199, 145, 0, 0.7),  
      0 0 15px rgba(199, 145, 0, 0.8)
    `,
    letterSpacing: '2px',
    fontWeight: '100',
    transform: 'translateY(-2px)',
    color: '#FFFFFF', 
  }}>Lessons</span></h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {lessons.map((lesson, index) => (
          <Link key={index} href="/lessons" passHref>
            <div
              className={`relative group overflow-hidden rounded-lg shadow-lg transition-all duration-300 cursor-pointer 
                ${lesson.completed ? 'bg-gradient-to-b from-customGold to-yellow-300 text-black' : 'text-gray-200'} 
                hover:scale-105 h-48`} 
            >
              <div className="p-6 flex flex-col h-full justify-between transition-all duration-300">
                <div className="flex items-center mb-4">
                  {lesson.completed && (
                    <svg
                      className="w-5 h-5 text-green-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                  <h4 className={`text-lg font-semibold ${lesson.completed ? 'font-bold' : 'font-normal'}`}>
                    {lesson.title}
                  </h4>
                </div>
                <span className={`text-sm mt-2 ${lesson.completed ? 'text-green-700' : 'text-gray-400'}`}>
                  {lesson.completed ? 'Completed' : 'Pending'}
                </span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-4 bg-opacity-30 bg-black rounded-b-lg transition-opacity duration-300 group-hover:opacity-100 opacity-0">
                <p className="text-sm text-white text-center">
                  {lesson.completed
                    ? 'This lesson is complete. Click to revisit!'
                    : 'Click to start this lesson.'}
                </p>
              </div>

              <div className="absolute inset-0 bg-black opacity-30 transition-opacity duration-300 group-hover:opacity-30 rounded-lg"></div>
            </div>
          </Link>
        ))}
      </div>
    </div>

       
        {/* <div className="mb-12 border-b border-customGold pb-6">
          <h3 className="text-customGold text-4xl font-semibold mb-6">Quizzes</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quizzes.map((quiz, index) => (
              <div
                key={index}
                className={`relative group overflow-hidden rounded-lg shadow-lg transition-all duration-300 cursor-pointer 
                  ${quiz.completed ? 'bg-gradient-to-b from-customGold to-yellow-300 text-black' : ' text-gray-200'} 
                  hover:scale-105`}
                onClick={() => {
                  if (quiz.completed) {
                    console.log(`Navigating to ${quiz.title}`);
                  }
                }}
              >
                <div className="p-6 flex flex-col h-full justify-between transition-all duration-300">
                  <div className="flex items-center mb-4">
                    {quiz.completed && (
                      <svg
                        className="w-5 h-5 text-green-500 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                    <h4 className={`text-lg font-semibold ${quiz.completed ? 'font-bold' : 'font-normal'}`}>
                      {quiz.title}
                    </h4>
                  </div>
                  <span className={`text-sm mt-2 ${quiz.completed ? 'text-green-700' : 'text-gray-400'}`}>
                    {quiz.completed ? 'Completed' : 'Pending'}
                  </span>
                </div>

              
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-opacity-30 bg-black rounded-b-lg transition-opacity duration-300 group-hover:opacity-100 opacity-0">
                  <p className="text-sm text-white text-center">
                    {quiz.completed
                      ? 'This quiz is complete. Click to revisit!'
                      : 'Click to start this quiz.'}
                  </p>
                </div>

             
                <div className="absolute inset-0 bg-black opacity-30 transition-opacity duration-300 group-hover:opacity-30 rounded-lg"></div>
              </div>
            ))}
          </div>
        </div> */}

        {/* Additional Content */}
        <div className="text-gray-300 mb-6">
          <p className="leading-relaxed text-lg">
            This course is designed for those looking to enhance their web development skills. Each lesson is tailored to provide in-depth knowledge and practical experience.
          </p>
        </div>

        {/* Tabs for Course Review and Chat with Instructor */}
        <div className="flex justify-center space-x-4 mb-6">
          <button
            className={`px-4 py-2 text-lg font-semibold ${activeTab === 'review' ? 'text-customGold border-b-2 border-customGold' : 'text-gray-400'}`}
            onClick={() => setActiveTab('review')}
          >
            Course Review
          </button>
          <button
            className={`px-4 py-2 text-lg font-semibold ${activeTab === 'chat' ? 'text-customGold border-b-2 border-customGold' : 'text-gray-400'}`}
            onClick={() => setActiveTab('chat')}
          >
            Chat with Instructor
          </button>
        </div>

        {/* Tab Content */}
        <div className="border-t border-customGold pt-4">
  {activeTab === 'review' && (
  <div className="text-lg text-gray-300">
    <h4 className="text-2xl text-customGold font-thin font-vogue mb-4"><span style={{
    textShadow: `
      0 0 5px rgba(199, 145, 0, 0.6),   
      0 0 10px rgba(199, 145, 0, 0.7),  
      0 0 15px rgba(199, 145, 0, 0.8)
    `,
    letterSpacing: '2px',
    fontWeight: '100',
    transform: 'translateY(-2px)',
    color: '#FFFFFF', 
  }}>Course Reviews </span></h4>
    
    {/* Review Cards Container */}
    <div className="mt-8 px-2 justify-center">
      <div className="flex flex-wrap justify-center space-y-8 sm:space-y-0 gap-8">
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
              <span className="text-sm text-yellow-600 ml-auto">4.5 Rating</span>
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
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint...
            </p>

            {/* Reviewer Name */}
            <span className="text-yellow-600 mt-2 font-bold text-sm">Elisa Grant</span>
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
              <span className="text-sm text-yellow-600 ml-auto">4.5 Rating</span>
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
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint...
            </p>

            {/* Reviewer Name */}
            <span className="text-yellow-600 mt-2 font-bold text-sm">Elisa Grant</span>
          </div>
        </div>
      </div>
    </div>

   
    <div className="mt-12 p-6 bg-customDark rounded-lg shadow-md">
      <h4 className="text-2xl font-thin font-vogue text-customGold mb-4"><span style={{
    textShadow: `
      0 0 5px rgba(199, 145, 0, 0.6),   
      0 0 10px rgba(199, 145, 0, 0.7),  
      0 0 15px rgba(199, 145, 0, 0.8)
    `,
    letterSpacing: '2px',
    fontWeight: '100',
    transform: 'translateY(-2px)',
    color: '#FFFFFF', 
  }}>Add Your Review</span></h4>
      
      <div className="flex items-center mb-4">
          {/* Star Rating Input */}
          {[1, 2, 3, 4, 5].map((star) => (
            <label key={star} className="cursor-pointer">
              <input
                type="radio"
                name="rating"
                value={star}
                className="hidden"
                onChange={() => setRating(star)} 
                checked={rating === star} 
              />
              <FaStar className={`text-2xl ${star <= rating ? 'text-yellow-500' : 'text-gray-500'}`} />
            </label>
          ))}
        </div>
        <input
          type="text"
          className="w-full h-12 p-4 bg-[#888888] border border-white placeholder-white text-white rounded-lg mb-4"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)} 
        />
      <textarea
        className="w-full h-24 p-4 bg-[#888888] min-h-28 border border-white placeholder-white text-white rounded-lg mb-4"
        placeholder="Write your review here..."
      />
      <button className="px-4 py-2 bg-customGold text-black rounded-lg hover:bg-yellow-400 transition duration-300">
        Submit Review
      </button>
    </div>
  </div>
)}



  {activeTab === 'chat' && (
  <div className="text-lg text-gray-300">
    <h4 className="text-2xl text-customGold font-thin font-vogue mb-4 mt-10"><span style={{
    textShadow: `
      0 0 5px rgba(199, 145, 0, 0.6),   
      0 0 10px rgba(199, 145, 0, 0.7),  
      0 0 15px rgba(199, 145, 0, 0.8)
    `,
    letterSpacing: '2px',
    fontWeight: '100',
    transform: 'translateY(-2px)',
    color: '#FFFFFF', 
  }}>Chat with Instructor </span></h4>
    <p className='mt-10 mb-5'>Feel free to ask your questions below:</p>
    
 
    <input
      type="text"
      className="w-full h-12 p-3 bg-[#888888] border border-gray-600 text-white rounded-lg mb-4 placeholder-white focus:outline-none focus:ring-2 focus:ring-customGold transition duration-200"
      placeholder="Your Name"
      value={name} 
      onChange={(e) => setName(e.target.value)}
    />

   
    <textarea
      className="w-full h-24 p-3 bg-[#888888] rounded-lg border border-gray-600 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-customGold transition duration-200"
      placeholder="Type your message here..."
      value={message} 
      onChange={(e) => setMessage(e.target.value)}
    />
    
    <button
      className="mt-2 px-4 py-2 bg-customGold text-black rounded-lg hover:bg-yellow-400 transition duration-200"
      onClick={handleSendMessage} 
    >
      Send Message
    </button>

    {/* Feedback Message */}
    <div className={`mt-2 ${feedbackMessage ? 'block' : 'hidden'}`} id="feedbackMessage">
      <p className="text-green-500">{feedbackMessage}</p>
    </div>
  </div>
)}

</div>

      </div>
      <section>
        <Footer />
      </section>
    </section>
     </div>
          
            
        
      
    </>
  );
};

export default CourseDetail;
