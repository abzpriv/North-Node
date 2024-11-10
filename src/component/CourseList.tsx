'use client';

import React, { useEffect, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { FaTrash } from 'react-icons/fa';
import CourseImage from '../assets/CourseImage1.png';
import NavbarAdmin from './NavbarAdmin';
import SearchByCategory from './PsychicCategories/SearchByCategory ';
import Modal from './Model';

interface Course {
  id: number;
  title: string;
  image: StaticImageData;
  description: string;
  type: string;
  price: string;
  level: string;
  language: string;
}

const initialCoursesData: Course[] = [
  {
    id: 1,
    title: 'Astrology Basics',
    image: CourseImage,
    description: 'Learn the fundamentals of astrology and how to read charts.',
    type: 'Online',
    price: '$150',
    level: 'Beginner',
    language: 'English',
  },
  {
    id: 2,
    title: 'Advanced Tarot Techniques',
    image: CourseImage,
    description: 'Dive deeper into tarot reading with advanced techniques.',
    type: 'In-Person',
    price: '$250',
    level: 'Intermediate',
    language: 'English',
  },
  {
    id: 3,
    title: 'Numerology Essentials',
    image: CourseImage,
    description: 'Understand the basics of numerology and number analysis.',
    type: 'Online',
    price: '$200',
    level: 'Beginner',
    language: 'Spanish',
  },
];

const CourseList: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>(initialCoursesData);
  const [searchQuery, setSearchQuery] = useState<string>(''); 
  const [ratingFilter, setRatingFilter] = useState<number | null>(null);  
  const [priceRange, setPriceRange] = useState<[number, number] | null>(null); 
  const [showOffline, setShowOffline] = useState<boolean>(false); 

  const [showModal, setShowModal] = useState<boolean>(false);
  const [courseToDelete, setCourseToDelete] = useState<Course | null>(null);

  const filteredCourses = courses.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          course.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesPrice = !priceRange || (
      parseFloat(course.price.replace('$', '')) >= priceRange[0] &&
      parseFloat(course.price.replace('$', '')) <= priceRange[1]
    );

    const matchesRating = !ratingFilter; 
    const matchesOffline = !showOffline || course.type === 'In-Person';

    return matchesSearch && matchesPrice && matchesRating && matchesOffline;
  });

  const handleDelete = (id: number) => {
    setCourses((prevCourses) => prevCourses.filter((course) => course.id !== id));
    setShowModal(false);
    console.log(`Deleted course with ID: ${id}`);
  };

  const confirmDelete = (course: Course) => {
    setCourseToDelete(course);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setCourseToDelete(null);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="bg-gray-50 min-h-screen">
      <NavbarAdmin />
      <div className="container mx-auto mt-16 py-8">
        
        <div className="w-full lg:w-auto">
          <SearchByCategory
            onSearchChange={setSearchQuery}
            onRatingChange={setRatingFilter}
            onPriceChange={setPriceRange}
            onOfflineToggle={setShowOffline}
          />
        </div>
        
        <h2 className="text-4xl font-bold text-gold-600 text-customGold text-center mb-8">Course List</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <div key={course.id} className="bg-white shadow-lg rounded-lg overflow-hidden border border-gold-300">
                <Image
                  src={course.image}
                  alt={course.title}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-customGold text-gold-600 mb-2">{course.title}</h3>
                  <p className="text-gray-700 mb-4">{course.description}</p>
                  <div className="flex justify-between mb-4">
                    <span className="text-gray-600"><strong>Course Fee:</strong> {course.price}</span>
                  </div>
                  <div className="flex justify-between mb-4">
                    <span className="text-gray-600"><strong>Level:</strong> {course.level}</span>
                    <span className="text-gray-600"><strong>Language:</strong> {course.language}</span>
                  </div>
                  <button
                    onClick={() => confirmDelete(course)}
                    className="w-full bg-red-500 text-white rounded-full p-2 hover:bg-red-600 transition duration-200"
                    title="Delete Course"
                  >
                    <FaTrash className="inline mr-2" /> Delete
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600 col-span-3">There are no courses available.</p>
          )}
        </div>
      </div>

      <Modal
        show={showModal}
        title="Delete Course"
        message={`Are you sure you want to delete the course "${courseToDelete?.title}"?`}
        onConfirm={() => handleDelete(courseToDelete!.id)}
        onCancel={closeModal}
      />
    </section>
  );
};

export default CourseList;
