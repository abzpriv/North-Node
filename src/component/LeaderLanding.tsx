'use client';
import Image from "next/image";
import React, { useEffect, useMemo, useRef, useState } from "react";
import LeaderImage1 from '../assets/LeaderImage1.png';
import LeaderImage2 from '../assets/LeaderImage2.png';
import LeaderImage3 from '../assets/LeaderImage3.png';
import LeaderImage4 from '../assets/LeaderImage4.png';
import styles from './LeaderLanding.module.css';

const LeaderLanding: React.FC = () => {
  // Use useMemo to memoize the leaders array
  const leaders = useMemo(() => [
    { id: 1, image: LeaderImage1, name: "Imran Khan", expertise: "Leadership" },
    { id: 2, image: LeaderImage2, name: "Marisa Peer", expertise: "Self Confidence" },
    { id: 3, image: LeaderImage3, name: "Keith Ferrazzi", expertise: "Networking" },
    { id: 4, image: LeaderImage4, name: "Dr Shefali", expertise: "Conscious Parenting" },
  ], []);
   
  
  const [duplicateCount, setDuplicateCount] = useState(10);

  useEffect(() => {
    const updateDuplicateCount = () => {
      const width = window.innerWidth;
      if (width <= 425) {
        setDuplicateCount(10);
      } else {
        setDuplicateCount(100); 
      }
    };
    updateDuplicateCount();
    window.addEventListener("resize", updateDuplicateCount);
    return () => window.removeEventListener("resize", updateDuplicateCount);
  }, []);

  const infiniteLeaders = useMemo(() => {
    return [...Array(duplicateCount)].flatMap(() => leaders);
  }, [leaders, duplicateCount]);
  

  return (
    <div className="bg-custom-gradient text-white ">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
    {/* Header Section */}
    
    <p className="mt-4 text-lg leading-7 font-segoe text-gray-300 glowText text-left sm:text-center">
      Learn from the world’s best thought leaders. Harness your intuition, unlock your mind, and transform your life!
    </p>



        <div className={styles.scrollingWrapperLeader}>
          <div className={styles.eventsGridLeader}>
            {infiniteLeaders.map((leader, index) => (
              <div key={index} className={styles.leaderCard}>
                <Image
                  className={styles.cardImage}
                  src={leader.image}
                  alt={leader.name}
                />
                <div className="p-4">
                  <h3 className="text-lg font-segoe font-semibold">{leader.name}</h3>
                  <p className="text-sm font-segoe text-gray-400">{leader.expertise}</p>
                </div>
              </div>
            ))}
          </div>
        </div>


        {/* Explore More Button */}
        {/* <div className="mt-8">
          <button className="bg-customGold text-white px-6 py-3 rounded-md hover:bg-yellow-600">
            EXPLORE MORE
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default LeaderLanding;
