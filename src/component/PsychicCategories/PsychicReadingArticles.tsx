'use client';
import Image from "next/image";
import React, { useEffect, useMemo, useRef, useState } from "react";
import articleImage1 from '../../assets/PsychicArticleImage1.png';
import articleImage2 from '../../assets/PsychicArticleImage2.png';
import articleImage3 from '../../assets/PsychicArticleImage3.png';
import articleImage4 from '../../assets/PsychicArticleImage4.png';
import styles from '../LeaderLanding.module.css';

const PsychicReadingArticles: React.FC = () => {
  // Use useMemo to memoize the leaders array
  const article = useMemo(() => [
    { id: 1, image: articleImage1,  description: "Predictions can help create your future" },
    { id: 2, image: articleImage2, description: "Finding a good psychic near you" },
    { id: 3, image: articleImage3,  description: "6 Questions that will change your life" },
    { id: 4, image: articleImage4, description: "How to find right psychic?" },
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

  const infiniteArticle = useMemo(() => {
    return [...Array(duplicateCount)].flatMap(() => article);
  }, [article, duplicateCount]);

  return (
    <div className="bg-custom-gradient text-white py-12">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Header Section */}
        <h2 className="text-2xl md:text-4xl font-vogue font-thin text-white">
          <span style={{
    textShadow: `
        
      0 0 5px rgba(199, 145, 0, 0.6),   
      0 0 10px rgba(199, 145, 0, 0.7),  
      0 0 15px rgba(199, 145, 0, 0.8)
    `,
    letterSpacing: '2px',
    transform: 'translateY(-2px)',
    color: '#FFFFFF', 
  }}>
          View Latest Psychic Reading Articles
          </span> 
        </h2>
        <p className={`mt-4 text-lg leading-7 text-gray-300`}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s 
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a 
          type specimen book. It has survived not only five centuries, 
          but also the leap into electronic typesetting, remaining essentially unchanged.
        </p>

        <div className={styles.scrollingWrapperLeader}>
          <div className={styles.eventsGridLeader}>
            {infiniteArticle.map((article, index) => (
              <div key={index} className={styles.leaderCard}>
                <Image
                  className={styles.cardImage}
                  src={article.image}
                  alt='Article Image'
                />
                <div className="p-2 sm:p-3 md:p-4 lg:p-4">
               <p className="text-xs sm:text-xs md:text-sm lg:text-sm text-gray-400 leading-snug">
                 {article.description}
                 </p>
              </div>

              </div>
            ))}
          </div>   
        </div>

        
      </div>
    </div>
  );
};

export default PsychicReadingArticles;
