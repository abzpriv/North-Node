import Image from 'next/image';
import Image12 from '../assets/ImageMilitry.png'
import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; 
import ImageUnderstanding from '../assets/ImageESP.png';
import ImageUnderstanding2 from '../assets/ImageEsp2.png';
const ExploreLanding: React.FC = () => {
  const [isOpenRV, setIsOpenRV] = useState(false);
  const [isOpenMA, setIsOpenMA] = useState(false);
  const [isOpenGE, setIsOpenGE] = useState(false); 
  const [showMilitary, setShowMilitary] = useState(false);
  const [showMedical, setShowMedical] = useState(false); 

const toggleDropdownRV = () => {
    setIsOpenRV(!isOpenRV);
    setIsOpenMA(false); 
    setIsOpenGE(false); 
  };

  const toggleDropdownMA = () => {
    setIsOpenMA(!isOpenMA);
    setIsOpenRV(false); 
    setIsOpenGE(false); 
  };

  const toggleDropdownGE = () => {
    setIsOpenGE(!isOpenGE);
    setIsOpenRV(false);
    setIsOpenMA(false); 
  };
  
  return (

     <section>
      <div className="">
        {/* Title Section */}
        {/* <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold  font-baskerville mt-9 mb-12">
         Understanding Extra Sensory <span className="text-customGold">Perception (ESP)</span> 
        </h1> */}
        </div>  
    <section className="bg-custom-gradient text-white ">
      <div className="">
        {/* Heading Section */}
        {/* <h2 className="text-lg sm:text-xl md:text-2xl text-customGold mb-2 font-baskerville">
          Awaken Your Potential:
        </h2>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold  font-baskerville mb-11">
          Become a Part of North Node!
        </h1> */}

        

          {/* Content Section */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center"> */}
          {/* Left Column */}
          {/* <div>
            <h2 className="text-lg font-semibold text-customGold font-baskerville mb-4">North Node School of Self Development</h2>
            <p className="text-gray-300 mb-6">
              Introduce the institution and its focus on ESP and cognitive skills development.
            </p>
            <div className='mt-9'>
            <h2 className="text-lg font-semibold text-customGold font-baskerville mb-4">Course Offerings</h2>
            <p className="text-gray-300">
              Highlight the specific ESP-related skills that students will learn, such as telepathy,
               clairvoyance, precognition, psychometry, and Meta Hypnosis.
            </p>
            </div>
          </div> */}

          {/* Right Column */}
          {/* <div>
            <h2 className="text-lg font-semibold text-customGold font-baskerville mb-4">Flexible Learning</h2>
            <p className="text-gray-300 mb-6">
             Promote the online courses and emphasize the flexibility of learning at ones own pace.
            </p>
            <div className='mt-9'>
            <h2 className="text-lg font-semibold text-customGold font-baskerville mb-4">Retreats</h2>
            <p className="text-gray-300">
             Offer information about in-person retreats, giving students a chance to meet 
             instructors and other students in a more personal setting at exotic locations.
            </p>
            </div>
          </div>
          </div> */}
      
      

        {/* Buttons Section */}
        {/* <div className="space-x-0 sm:space-x-4 mb-24 flex flex-col sm:flex-row justify-center items-center mt-12 ">
          <button className="bg-customGold text-white py-2 px-6 rounded-full hover:bg-opacity-90 mb-4 sm:mb-0 "  >
            JOIN AS ADVISORS
          </button>
          <button className="bg-customGold text-white py-2 px-6 rounded-full hover:bg-opacity-90 ">
            JOIN AS MEMBER
          </button>
        </div> */}

        <section>
<div className="flex flex-row items-center justify-center">
  <div className="flex flex-row items-center justify-between max-w-7xl mx-auto w-full">    {/* Left Aligned Image (animating from the left) */}
    <div
      className="w-40 h-40 sm:w-80 sm:h-80 mx-auto sm:mx-0 sm:ml-6 flex-shrink-0 animate-slide-in-left"
      style={{
        animationDelay: '0.5s',
      }}
    >
      <Image
        src={ImageUnderstanding}
        alt="Left Image"
        className="w-full h-full object-cover rounded-lg shadow-lg"
        style={{
          boxShadow: `2px 2px 10px rgba(0, 0, 0, 0.4)`,
        }}
      />
    </div>

    {/* Right Aligned Image (animating from the right) */}
    <div
      className="w-40 h-40 sm:w-80 sm:h-80 mx-auto sm:mr-6 sm:ml-auto flex-shrink-0 animate-slide-in-right"
      style={{
        animationDelay: '0.7s',
      }}
    >
      <Image
        src={ImageUnderstanding2}
        alt="ESP Illustration"
        className="w-full h-full object-cover rounded-lg shadow-lg"
        style={{
          boxShadow: `2px 2px 10px rgba(0, 0, 0, 0.4)`,
        }}
      />
    </div>
  </div>
  </div>

  <style jsx>{`
    @keyframes slideInLeft {
      0% {
        transform: translateX(-100%);
        opacity: 0;
      }
      100% {
        transform: translateX(0);
        opacity: 1;
      }
    }

    @keyframes slideInRight {
      0% {
        transform: translateX(100%);
        opacity: 0;
      }
      100% {
        transform: translateX(0);
        opacity: 1;
      }
    }

    .animate-slide-in-left {
      animation: slideInLeft 1.2s ease-in-out forwards;
    }

    .animate-slide-in-right {
      animation: slideInRight 1.2s ease-in-out forwards;
    }
  `}</style>
</section>




<section>
  <div className="max-w-6xl mx-auto text-left sm:text-center px-4 mt-16">
    {/* Title with Image */}
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8">
      
      
      {/* Title */}
      <h2 className="text-xl sm:text-3xl md:text-4xl font-bold mt-4  sm:mt-0 sm:ml-28 font-vogue">
        <span
          className="text-white bg-clip-text font-vogue"
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
        >
          Understanding ESP: The Science of Intuition
        </span>
      </h2>
    </div>

    {/* Description */}
    <p className="text-sm sm:text-lg text-gray-300 text-left font-segoe sm:text-center mb-7">
      Extra Sensory Perception (ESP) refers to the ability to gain information beyond the ordinary five senses. Coined by J.B. Rhine of Duke University, ESP includes phenomena such as telepathy, clairvoyance, and precognition.
    </p>
    

    {/* Proof of ESP Heading */}
    <h2 className="text-2xl sm:text-3xl md:text-3xl font-thin mb-8 font-vogue">
      <span
        className="text-white bg-clip-text font-vogue"
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
      >
        Current Proof of ESP:
      </span>
    </h2>

    <div className="relative max-w-4xl mx-auto py-8">
      {/* Background decoration */}
      <div
        className="absolute inset-0 overflow-hidden rounded-lg shadow-2xl transform -rotate-3"
        style={{
          backgroundImage: `
            linear-gradient(135deg, rgba(255, 215, 0, 0.5) 10%, rgba(191, 155, 48, 0.85) 50%, rgba(23, 23, 23, 0.95)),
            url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 800 600"><defs><radialGradient id="grad1" cx="50%" cy="50%" r="70%"><stop offset="0%" stop-color="rgba(255, 255, 255, 0.1)" /><stop offset="100%" stop-color="rgba(255, 255, 255, 0)" /></radialGradient></defs><rect x="-50" y="-50" width="900" height="700" fill="url(%23grad1)" style="filter: blur(100px);" /></svg>'),
            linear-gradient(45deg, rgba(0, 0, 0, 0.6) 30%, transparent 70%)
          `,
          backgroundBlendMode: 'overlay, soft-light, normal',
          animation: 'rotateBackground 120s linear infinite',
          boxShadow: '0 10px 35px rgba(191, 155, 48, 0.95)',
        }}
      ></div>

      {/* Content Blocks */}
      {/* Remote Viewing Studies */}
      <div className="relative p-6 rounded-lg shadow-lg bg-customDark z-10">
        <h3 className="text-md lg:text-lg font-segoe font-semibold font text-customGold cursor-pointer mb-2 flex justify-between items-center" onClick={toggleDropdownRV}>
          Remote Viewing Studies {isOpenRV ? <FaChevronUp /> : <FaChevronDown />}
        </h3>
        <div className={`${isOpenRV ? 'max-h-screen' : 'max-h-0'} overflow-hidden text-left transition-all duration-${isOpenRV ? '700' : '600'} ease-in-out`}>
          <p className="text-xs sm:text-sm md:text-base font-segoe text-gray-300">
            Projects like the Stargate Project documented successful instances of remote viewing, where individuals accurately described distant, unseen locations.
          </p>
        </div>
      </div>
      
      {/* Meta-Analyses */}
      <div className="relative p-6 rounded-lg shadow-lg bg-customDark mt-10 z-10">
        <h3 className="text-md lg:text-lg font-segoe font-semibold text-customGold cursor-pointer mb-2 flex justify-between items-center" onClick={toggleDropdownMA}>
          Meta-Analyses {isOpenMA ? <FaChevronUp /> : <FaChevronDown />}
        </h3>
        <div className={`${isOpenMA ? 'max-h-screen' : 'max-h-0'} overflow-hidden text-left transition-all duration-${isOpenRV ? '700' : '600'} ease-in-out`}>
          <p className="text-xs sm:text-sm md:text-base font-segoe text-gray-300">
            Comprehensive reviews of multiple ESP studies show statistically significant results, though interpretations vary among researchers.
          </p>
        </div>
      </div>
      
      {/* Ganzfeld Experiments */}
      <div className="relative p-6 rounded-lg shadow-lg bg-customDark mt-10 z-10">
        <h3 className="text-md lg:text-lg font-segoe font-semibold text-customGold cursor-pointer mb-2 flex justify-between items-center" onClick={toggleDropdownGE}>
          Ganzfeld Experiments {isOpenGE ? <FaChevronUp /> : <FaChevronDown />}
        </h3>
        <div className={`${isOpenGE ? 'max-h-screen' : 'max-h-0'} overflow-hidden text-left transition-all duration-${isOpenRV ? '700' : '600'} ease-in-out`}>
          <p className="text-xs sm:text-sm md:text-base font-segoe text-gray-300">
            Consistent anomalies have been found in telepathic information transfer during controlled sensory deprivation sessions.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>


        <section className="py-12">
  <div className="max-w-6xl mx-auto px-4">
    {/* Title */}
    <h2 className="text-2xl sm:text-3xl md:text-3xl font-thin mt-6 text-left sm:text-center font-vogue mb-12">
      <span
        className="text-white bg-clip-text font-vogue"
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
      >
        Current Use of ESP
      </span>
    </h2>

    {/* Description */}
    <p className="text-sm sm:text-lg text-gray-300 text-left font-segoe sm:text-center mb-12 max-w-4xl mx-auto">
      ESP has been explored and applied in various fields, including military, intelligence, and medical research. 
    </p>

    {/* Flex Layout for Content and Image */}
    <div className="flex flex-col md:flex-row items-start justify-between w-full mx-auto space-y-8 md:space-y-0 md:space-x-12">

      {/* Accordion Section (Dropdown Content) */}
      <div className="w-full md:w-1/2 lg:mt-20">
        {/* Accordion Item - Military and Intelligence */}
        <div className="mb-4">
          <button
            className="w-full text-left bg-transparent flex justify-between items-center p-4 border border-customGold rounded-md focus:outline-none"
            onClick={() => setShowMilitary(!showMilitary)}
          >
            <h3 className="text-md lg:text-lg font-semibold text-customGold font-segoe">
              Military and Intelligence
            </h3>
            <span
              className={`transform ${
                showMilitary ? 'rotate-180' : ''
              } transition-transform text-customGold duration-300`}
            >
              ▼
            </span>
          </button>
          {showMilitary && (
            <div className="text-[#CCCCCC] mt-2 pl-4 text-sm font-segoe">
              <p className="mb-6 ">
                Programs like Stargate, Operation Grill Flame, and Operation Sun Streak used ESP for intelligence gathering and reconnaissance, with replicated success. For example, Dr. Russell Targ at Stanford University, in collaboration with the CIA, used ESP to locate planes in Africa, identify kidnappers, and track weapons factories.
              </p>
            </div>
          )}
        </div>

        {/* Accordion Item - Medical Research */}
        <div className="mb-4">
          <button
            className="w-full text-left bg-transparent flex justify-between items-center p-4 border border-customGold rounded-md focus:outline-none"
            onClick={() => setShowMedical(!showMedical)}
          >
            <h3 className="text-md lg:text-lg font-semibold text-customGold font-segoe">
              Medical Research
            </h3>
            <span
              className={`transform ${
                showMedical ? 'rotate-180' : ''
              } transition-transform text-customGold duration-300`}
            >
              ▼
            </span>
          </button>
          {showMedical && (
            <div className="text-gray-300 text-sm mt-2 pl-4 font-segoe">
              <p className="mb-6">
                Though controversial, ESP has been explored in diagnosing and understanding medical conditions, offering intriguing potential for medical research.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center items-center relative">
        <div className="relative rounded-lg overflow-hidden shadow-lg transition-all duration-500 ease-in-out hover:shadow-2xl hover:-translate-y-2">
          <Image
            src={Image12}
            alt="ESP Research"
            className="transform hover:scale-110 transition-transform duration-700 ease-in-out"
            style={{
              maxWidth: '100%',
              height: 'auto',
              boxShadow: '0 10px 20px rgba(0, 0, 0, 0.7), 0 14px 30px rgba(0, 0, 0, 0.4)',
              borderRadius: '16px',
            }}
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70 hover:opacity-50 transition-opacity duration-700 ease-in-out" />
          {/* Border Glow */}
          <div
            className="absolute inset-0 rounded-lg border-2 border-transparent hover:border-customGold transition-all duration-700 ease-in-out"
            style={{
              boxShadow: '0 0 20px rgba(199, 145, 0, 0.9)',
            }}
          />
        </div>
      </div>

    </div>
 

 

 
    

    {/* Eye-Catching Closing Statement */}
   <div className="mt-16 text-center relative">
  <div className="inline-block relative bg-gradient-to-r from-transparent  via-[rgba(199,145,0,0.3)] to-transparent px-6 py-4 rounded-lg shadow-lg">
    <p className="text-sm sm:text-2xl md:text-4xl font-segoe text-gray-300 leading-relaxed tracking-wide">
  

      If ESP can be used for military and intelligence, 
        why not apply it for personal development and personal growth?
     

    </p>
  </div>

  {/* Optional Decorative Elements */}
  <div className="absolute -top-8 -left-6 h-16 w-16 bg-customGold opacity-20 blur-xl rounded-full"></div>
  <div className="absolute -bottom-8 -right-6 h-16 w-16 bg-customGold opacity-20 blur-xl rounded-full"></div>
</div>

  </div>
</section>

<section className="relative flex flex-col items-center justify-center text-white mt-48 px-4 sm:px-8 lg:px-16">
                         {/* Line and Down Arrow */}
    <div className="absolute bottom-10 flex flex-col items-center">
        {/* Line */}
        <div className="w-0.5 h-16 bg-customGold"></div>
        
        {/* Down Arrow */}
        <div className="animate-bounce mt-2">
            <svg
                className="w-14 h-14 text-customGold"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 19l-7-7h14l-7 7z"
                />
            </svg>
        </div>
    </div>
    <style jsx>{`
        .text-customGold {
            color: #C79100;
        }
        .bg-customGold {
            background-color: #C79100;
        }
    `}</style>
                        </section>

{/* <section className="py-16">
  <div className="max-w-6xl mx-auto px-4"> */}
    {/* Title */}
    {/* <h2 className="text-2xl sm:text-3xl md:text-4xl font-baskerville font-bold text-center  mb-12">
      NORTH NODE <span className="text-customGold">SCHOOL OF SELF DEVELOPMENT</span>
    </h2> */}
    
    {/* Subtitle */}
    {/* <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
      Learn from the world’s best thought leaders. Harness your intuition, unlock your mind, and transform your life!
    </p> */}

    {/* Merit-Based Admission Process */}
    {/* <div className="p-8 rounded-lg border-l-2 border-customGold">
      <h3 className="text-2xl font-semibold text-customGold mb-6 font-baskerville text-center">Merit-Based Admission: How It Works</h3>
      <ul className="space-y-4 text-gray-300 text-lg">
        <li>
          <span className="font-bold text-customGold">1.</span> Take a time-metered test.
        </li>
        <li>
          <span className="font-bold text-customGold">2.</span> Interview with an advisor.
        </li>
        <li>
          <span className="font-bold text-customGold">3.</span> Enroll.
        </li>
      </ul>
    </div>
  </div>
</section> */}




        {/* Stats Section */}
{/* <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0  max-w-6xl mx-auto py-8"> */}
  {/* 24/7 Availability */}
  {/* <div className="bg-customDark p-6 flex-1 text-center">
    <h3 className="text-3xl sm:text-4xl font-bold text-white">24/7</h3>
    <p className="text-customGold mt-2 font-baskerville">Availability</p>
  </div> */}

  {/* Divider */}
  {/* <div className="relative flex items-center">
    <span className="absolute left-0 h-full w-px bg-gray-400"></span>
  </div> */}

  {/* Free Trial */}
  {/* <div className="bg-customDark p-6 flex-1 text-center">
    <h3 className="text-3xl sm:text-4xl font-bold text-white">Free</h3>
    <p className="text-customGold mt-2 font-baskerville">Trial</p>
  </div> */}

  {/* Divider */}
  {/* <div className="relative flex items-center">
    <span className="absolute left-0 h-full w-px bg-gray-400"></span>
  </div> */}

  {/* Full Board of Advisors */}
  {/* <div className="bg-customDark p-6 flex-1 text-center">
    <h3 className="text-3xl sm:text-4xl font-bold text-white">Full</h3>
    <p className="text-customGold mt-2 font-baskerville">Board of Advisors</p>
  </div> */}

  {/* Divider */}
  {/* <div className="relative flex items-center">
    <span className="absolute left-0 h-full w-px bg-gray-400"></span>
  </div> */}

  {/* Community Members */}
  {/* <div className="bg-customDark p-6 flex-1 text-center">
    <h3 className="text-3xl sm:text-4xl font-bold text-white">10K+</h3>
    <p className="text-customGold mt-2 font-baskerville">Community Members</p>
  </div>
</div> */}

      </div>
     </section>
    </section>
  );
};

export default ExploreLanding;
