'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import profileImagePlaceholder from '../assets/Advisor1.png'; 
import Footer from './Footer';
import CourseImage from '../assets/CourseImage1.png';
import styles from './LandingPage.module.css'; 
import clientAvatarIcon from '../assets/profile.png';
import advisorAvatarIcon from '../assets/profile.png';
import Link from 'next/link';
import logo from '../assets/logo-north-node.png'; 

import NavbarMenu from './NavbarMenu';
import { FiMenu } from 'react-icons/fi';
import CourseTabs from './CourseTabs';
interface Question {
  question: string;
  answer: string;
}

interface QuestionsComponentProps {
  isEditingCourse: boolean;
}
const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'advisor' | 'courses'>('advisor');
  const [isEditingAdvisor, setIsEditingAdvisor] = useState(false);
  const [isEditingCourse, setIsEditingCourse] = useState(false);
   const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
  const [image, setImage] = useState<string | StaticImageData>(profileImagePlaceholder);
  const [isAdvisor, setIsAdvisor] = useState(false);
    const [avatarUrl, setAvatarUrl] = useState<string>(clientAvatarIcon.src);
    const fileInputRef = useRef<HTMLInputElement>(null);
  const [courseQuestions, setCourseQuestions] = useState<Question[]>([{ question: '', answer: '' }]);

  
  const [advisorData, setAdvisorData] = useState({
    name: 'John Doe',
    readingType: 'Tarot Reading',
    price: '$50',
    description: 'Insightful tarot readings to guide your life choices.',
    services: 'Personalized readings, Phone consultations',
    specialties: 'Love, Career, Spiritual Growth',
    phoneNumber: '',  
  email: '',    
  });
  const [courseData, setCourseData] = useState({
    courseName: 'Introduction to Tarot Reading',
    expert: 'John Doe',
    medium: 'Online',
    difficulty: 'Easy',
    lessons: 10,
    language: 'English',
    courseDescription: 'A beginner-friendly course to introduce the basics of Tarot reading.',
  });
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

 const handleEditAdvisor = () => {
    setIsEditingAdvisor(!isEditingAdvisor);
  };

  const handleEditCourse = () => {
    setIsEditingCourse(!isEditingCourse);
  };

   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setAdvisorData(prevData => ({
      ...prevData,
      [name]: value,
    }));
    setCourseData(prevData => ({
      ...prevData,
      [name]: value,
    }));
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

  

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };
  const handleQuestionChange = (index: number, value: string) => {
    const newQuestions = [...courseQuestions];
    newQuestions[index].question = value;
    setCourseQuestions(newQuestions);
  };

  const handleAnswerChange = (index: number, value: string) => {
    const newQuestions = [...courseQuestions];
    newQuestions[index].answer = value;
    setCourseQuestions(newQuestions);
  };

  const addQuestion = () => {
    setCourseQuestions([...courseQuestions, { question: '', answer: '' }]);
  };

  const removeQuestion = (index: number) => {
    const newQuestions = courseQuestions.filter((_, i) => i !== index);
    setCourseQuestions(newQuestions);
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
                  {!isMenuOpen && (
                    <>  

    <section>
    <div className=" min-h-screen p-8">
      <h1 className="text-3xl font-bold  text-center mt-28 text-customGold mb-6">Dashboard</h1>
      
      <div className="flex space-x-4 mb-6">
        <button 
          onClick={() => setActiveTab('advisor')} 
          className={`flex-1 py-2 rounded-md ${activeTab === 'advisor' ? 'bg-customGold text-black' : 'bg-[#2c2a2a] text-gray-200 hover:bg-[#c79100] transition duration-300'}`}
        >
          Advisor
        </button>
        <button 
          onClick={() => setActiveTab('courses')} 
          className={`flex-1 py-2 rounded-md ${activeTab === 'courses' ? 'bg-customGold text-black' : 'bg-[#2c2a2a] text-gray-200 hover:bg-[#c79100] transition duration-300'}`}
        >
          Courses
        </button>
      </div>

      {activeTab === 'advisor' ? (
        <div className="bg-[#2c2a2a] rounded-2xl p-8 shadow-xl max-w-2xl mx-auto transition duration-300">
  <h2 className="text-3xl font-bold text-customGold mb-6">Advisor Profile</h2>

  <div className="flex items-center mb-6 gap-6">
    <div className="relative w-36 h-36">
      <Image
        src={image}
        alt="Profile Image"
        layout="fill"
        objectFit="cover"
        className="rounded-lg  shadow-lg cursor-pointer transition-transform duration-300 hover:scale-105"
        onClick={() => {
          if (isEditingAdvisor) {
            document.getElementById('imageUpload')?.click();
          }
        }}
      />
      {isEditingAdvisor && (
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden"
          id="imageUpload"
        />
      )}
    </div>

    <div className="flex-1">
      {isEditingAdvisor ? (
        <input
          type="text"
          name="name"
          value={advisorData.name}
          onChange={handleChange}
          className="text-2xl font-bold text-white bg-transparent border-b border-customGold focus:outline-none mb-2 w-full"
          placeholder="Advisor Name"
        />
      ) : (
        <h3 className="text-2xl font-bold text-white">{advisorData.name}</h3>
      )}

      {isEditingAdvisor ? (
        <input
          type="text"
          name="readingType"
          value={advisorData.readingType}
          onChange={handleChange}
          className="w-full text-lg bg-transparent border-b border-customGold focus:outline-none text-gray-300 mt-2"
          placeholder="Reading Type"
        />
      ) : (
        <p className="text-lg text-gray-400">{advisorData.readingType}</p>
      )}

      {isEditingAdvisor ? (
        <input
          type="text"
          name="price"
          value={advisorData.price}
          onChange={handleChange}
          className="text-xl text-customGold font-bold bg-transparent border-b border-customGold focus:outline-none mt-3 w-full"
        />
      ) : (
        <p className="text-xl text-customGold font-bold mt-3">{advisorData.price}</p>
      )}
    </div>
  </div>
  <div className="mb-6">
  <h4 className="text-lg text-customGold font-semibold mb-2">Phone Number:</h4>
  {isEditingAdvisor ? (
    <input
      name="phoneNumber"
      value={advisorData.phoneNumber}
      onChange={handleChange}
      className="w-full p-2 border border-gray-600 rounded-lg bg-[#3a3838] text-white focus:border-customGold focus:ring-customGold transition-all"
      placeholder="Enter phone number"
    />
  ) : (
    <p className="text-gray-300">{advisorData.phoneNumber || 'No phone number provided'}</p>
  )}
</div>

<div className="mb-6">
  <h4 className="text-lg text-customGold font-semibold mb-2">Email:</h4>
  {isEditingAdvisor ? (
    <input
      name="email"
      value={advisorData.email}
      onChange={handleChange}
      className="w-full p-2 border border-gray-600 rounded-lg bg-[#3a3838] text-white focus:border-customGold focus:ring-customGold transition-all"
      placeholder="Enter email"
    />
  ) : (
    <p className="text-gray-300">{advisorData.email || 'No email provided'}</p>
  )}
</div>

  <div className="mb-6">
    <h4 className="text-lg text-customGold font-semibold mb-2">About Us:</h4>
    {isEditingAdvisor ? (
      <textarea
        name="description"
        value={advisorData.description}
        onChange={handleChange}
        className="w-full p-3 border border-gray-600 rounded-lg bg-[#3a3838] text-white focus:border-customGold focus:ring-customGold transition-all"
        rows={3}
        style={{
          minHeight: '120px',
          resize: 'vertical',
        }}
        placeholder="Describe the advisor"
      />
    ) : (
      <p className="text-gray-300">{advisorData.description}</p>
    )}
  </div>

  <div className="mb-6">
    <h4 className="text-lg text-customGold font-semibold mb-2">Services:</h4>
    {isEditingAdvisor ? (
      <input
        name="services"
        value={advisorData.services}
        onChange={handleChange}
        className="w-full p-2 border border-gray-600 rounded-lg bg-[#3a3838] text-white focus:border-customGold focus:ring-customGold transition-all"
        placeholder="List services"
      />
    ) : (
      <p className="text-gray-300">{advisorData.services}</p>
    )}
  </div>

  <div className="mb-6">
    <h4 className="text-lg text-customGold font-semibold mb-2">Specialties:</h4>
    {isEditingAdvisor ? (
      <input
        name="specialties"
        value={advisorData.specialties}
        onChange={handleChange}
        className="w-full p-2 border border-gray-600 rounded-lg bg-[#3a3838] text-white focus:border-customGold focus:ring-customGold transition-all"
        placeholder="List specialties"
      />
    ) : (
      <p className="text-gray-300">{advisorData.specialties}</p>
    )}
  </div>

  <button
    onClick={handleEditAdvisor}
    className="w-full bg-customGold text-black py-3 px-6 rounded-lg font-bold hover:bg-[#c79100] transition-all duration-300 shadow-lg"
  >
    {isEditingAdvisor ? 'Save Changes' : 'Edit'}
  </button>
</div>

      ) : (
        
          
          <div className="bg-[#2c2a2a] rounded-2xl p-8 shadow-xl max-w-5xl mx-auto transition duration-300">
  <h2 className="text-3xl font-bold text-customGold mb-6">Course Profile</h2>

  <div className="flex flex-col lg:flex-row items-start gap-8 mb-6">
    <div className="relative w-full h-72 lg:w-1/2">
      <Image
        src={CourseImage}
        alt="Course Image"
        layout="fill"
        objectFit="cover"
        className="rounded-lg  shadow-xl cursor-pointer transition-transform duration-300 hover:scale-105"
        onClick={() => {
          if (isEditingCourse) {
            document.getElementById('imageUpload')?.click();
          }
        }}
      />
      {isEditingCourse && (
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden"
          id="imageUpload"
        />
      )}
    </div>

         <div className="w-full lg:w-1/2 flex flex-col justify-between">
         {isEditingCourse ? (
           <input
            type="text"
           name="courseName"
           value={courseData.courseName}
           onChange={handleChange}
           className="text-2xl text-white font-semibold bg-transparent border-b border-customGold focus:outline-none mb-2 placeholder-gray-500"
           placeholder="Course Name"
         onBlur={() => setIsEditingCourse(false)} 
           />
        ) : (
         <h3 className="text-2xl text-white font-semibold">{courseData.courseName}</h3>
          )}



      {isEditingCourse ? (
        <input
          type="text"
          name="readingType"
          value={advisorData.readingType}
          onChange={handleChange}
          className="text-lg bg-transparent border-b border-customGold focus:outline-none text-gray-300 mt-3 w-full placeholder-gray-500"
          placeholder="Reading Type"
        />
      ) : (
        <p className="text-lg text-gray-400 mt-3">{advisorData.readingType}</p>
      )}

      {isEditingCourse ? (
        <input
          type="text"
          name="price"
          value={advisorData.price}
          onChange={handleChange}
          className="text-xl text-customGold font-bold bg-transparent border-b border-customGold focus:outline-none mt-4 placeholder-gray-500"
          placeholder="Course Price"
        />
      ) : (
        <p className="text-xl text-customGold font-bold mt-4">{advisorData.price}</p>
      )}
    </div>
  </div>

  <div className="mb-6">
    <h4 className="text-lg text-customGold font-semibold mb-2">Course Description:</h4>
    {isEditingCourse ? (
      <textarea
        name="description"
        value={courseData.courseDescription}
        onChange={handleChange}
        className="w-full p-3 border border-gray-600 rounded-lg bg-[#3a3838] text-white focus:border-customGold focus:ring-customGold transition-all"
        rows={4}
        style={{
          minHeight: '120px',
          resize: 'vertical',
        }}
        placeholder="Describe the course"
      />
    ) : (
      <p className="text-gray-300">{courseData.courseDescription}</p>
    )}
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
    <div>
      <label className="text-lg text-customGold font-semibold">Difficulty:</label>
      {isEditingCourse ? (
        <select
          name="difficulty"
          value={courseData.difficulty}
          onChange={handleChange}
          className="w-full p-2 border border-gray-600 rounded-lg bg-[#3a3838] text-white focus:border-customGold focus:ring-customGold transition-all"
        >
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
      ) : (
        <p className="text-gray-300">{courseData.difficulty}</p>
      )}
    </div>

    <div>
      <label className="text-lg text-customGold font-semibold">Number of Lessons:</label>
      {isEditingCourse ? (
        <input
          type="number"
          name="lessons"
          value={courseData.lessons}
          onChange={handleChange}
          className="w-full p-2 border border-gray-600 rounded-lg bg-[#3a3838] text-white focus:border-customGold focus:ring-customGold transition-all"
          min="0"
        />
      ) : (
        <p className="text-gray-300">{courseData.lessons} lessons</p>
      )}
    </div>

    <div className="col-span-2">
      <label className="text-lg text-customGold font-semibold">Language:</label>
      {isEditingCourse ? (
        <input
          name="language"
          value={courseData.language}
          onChange={handleChange}
          className="w-full p-2 border border-gray-600 rounded-lg bg-[#3a3838] text-white focus:border-customGold focus:ring-customGold transition-all"
          placeholder="Course Language"
        />
      ) : (
        <p className="text-gray-300">{courseData.language}</p>
      )}
    </div>
   <div className="col-span-2">
      <h4 className="text-lg text-customGold font-semibold mb-2">Questions:</h4>
      {courseQuestions.map((item, index) => (
        <div key={index} className="flex items-center mb-2">
          {isEditingCourse ? (
            <div className="flex flex-col w-full">
              <input
                type="text"
                value={item.question}
                onChange={(e) => handleQuestionChange(index, e.target.value)}
                className="p-2 border border-gray-600 rounded-lg bg-[#3a3838] text-white focus:border-customGold focus:ring-customGold transition-all mb-1"
                placeholder={`Question ${index + 1}`}
              />
              <input
                type="text"
                value={item.answer}
                onChange={(e) => handleAnswerChange(index, e.target.value)}
                className="p-2 border border-gray-600 rounded-lg bg-[#3a3838] text-white focus:border-customGold focus:ring-customGold transition-all"
                placeholder={`Answer for Question ${index + 1}`}
              />
            </div>
          ) : (
            <div className="flex flex-col">
              <p className="text-gray-300">{item.question || `Question ${index + 1}`}</p>
              <p className="text-gray-400">{item.answer || `Answer for Question ${index + 1}`}</p>
            </div>
          )}
          {isEditingCourse && (
            <button
              onClick={() => removeQuestion(index)}
              className="ml-2 text-red-500 hover:text-red-700 transition"
            >
              Remove
            </button>
          )}
        </div>
      ))}

      {isEditingCourse && (
        <>
          <button
            onClick={addQuestion}
            className="mt-2 bg-customGold text-black py-2 px-4 rounded-lg hover:bg-[#c79100] transition"
          >
            Add Question
          </button>
          
        </>
      )}
    </div>
  </div>
  

  <button
    onClick={handleEditCourse}
    className="mt-6 w-full bg-customGold text-black py-3 px-6 rounded-lg font-bold hover:bg-[#c79100] transition-all duration-300 shadow-lg"
  >
    {isEditingCourse ? 'Save Changes' : 'Edit'}
  </button>
  <div>
    <CourseTabs />
  </div>
</div>
  


     
      )}
    </div>
    <section>
      <Footer />
    </section>
    </section>
    </>
                )}
                </div>
    </>
  );
};

export default Dashboard;
