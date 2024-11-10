// ExploreCategories.tsx

import Image from "next/image";
import Link from "next/link";
import React from "react";
import CourseExploreImage1 from '../../assets/CourseExploreImage1.png';
import CourseExploreImage2 from '../../assets/CourseExploreImage2.png';
import CourseExploreImage3 from '../../assets/CourseExploreImage3.png';
import CourseExploreImage4 from '../../assets/CourseExploreImage4.png';
import CourseExploreImage5 from '../../assets/CourseExploreImage5.png';
import CourseExploreImage6 from '../../assets/CourseExploreImage6.png';
import CourseExploreImage7 from '../../assets/CourseExploreImage7.png';
import CourseExploreImage8 from '../../assets/CourseExploreImage8.png';

const categories = [
  { name: "Telepathy", image: CourseExploreImage1, link: "/courses/telepathy" }, 
  { name: "Clairvoyance", image: CourseExploreImage2, link: "/courses/clairvoyance" },
  { name: "Precognition", image: CourseExploreImage3, link: "/courses/precognition" },
  { name: "Psychometry", image: CourseExploreImage4, link: "/courses/psychometry" },
  { name: "Retrocognition", image: CourseExploreImage5, link: "/courses/retrocognition" },
  { name: "Meta Hypnsis", image: CourseExploreImage8, link: "/courses/metaHypnsis" },
  { name: "Parenting", image: CourseExploreImage6, link: "" },
  { name: "Entrepreneurship", image: CourseExploreImage7, link: "" },
];

const ExploreCategories = () => {
  return (
    <div className=" py-12">
      <h2 className="text-white text-center text-2xl md:text-3xl lg:text-4xl font-vogue font-semibold mb-16">
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
        Explore other categories
        </span>
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-4 md:px-10">
        {categories.map((category, index) => (
          <Link href={category.link} key={index}>
            <div
              className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            >
              <Image
                src={category.image}
                alt={category.name}
                className="w-full h-48 object-cover transform hover:scale-110 transition-transform duration-300 ease-in-out"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end justify-center pb-4">
                <span className="text-white text-lg font-medium">
                  {category.name}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ExploreCategories;
