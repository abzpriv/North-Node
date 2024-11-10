'use client';

import React, { useEffect, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { FaTrash } from 'react-icons/fa';
import ImageAdvisor from '../assets/Advisor1.png';
import NavbarAdmin from './NavbarAdmin';
import SearchByCategory from './PsychicCategories/SearchByCategory ';
import Modal from './Model'; 

interface Advisor {
  id: number;
  name: string;
  image: StaticImageData;
  description: string;
  price: string;
  readingType: string;
  speciality: string;
  rating: number; 
  isOffline: boolean; 
}

const initialAdvisorsData: Advisor[] = [
  {
    id: 1,
    name: 'John Doe',
    image: ImageAdvisor,
    description: 'Experienced astrologer with over 10 years of experience.',
    price: '$100',
    readingType: 'Tarot Reading',
    speciality: 'Relationship Advice',
    rating: 4.5, 
    isOffline: false, 
  },
  {
    id: 2,
    name: 'Jane Smith',
    image: ImageAdvisor, 
    description: 'Professional astrologer specializing in life coaching.',
    price: '$120',
    readingType: 'Natal Chart Reading',
    speciality: 'Career Guidance',
    rating: 4.7, 
    isOffline: true, 
  },
  {
    id: 3,
    name: 'Alice Johnson',
    image: ImageAdvisor, 
    description: 'Astrologer with a focus on personal development.',
    price: '$90',
    readingType: 'Life Path Reading',
    speciality: 'Personal Growth',
    rating: 4.3, 
    isOffline: false, 
  },
];

const AdvisorsList: React.FC = () => {
  const [advisors, setAdvisors] = useState<Advisor[]>(initialAdvisorsData);
  const [searchQuery, setSearchQuery] = useState('');
  const [ratingFilter, setRatingFilter] = useState<number | null>(null);
  const [priceRange, setPriceRange] = useState<[number, number] | null>(null);
  const [showOffline, setShowOffline] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [advisorToDelete, setAdvisorToDelete] = useState<number | null>(null); // Store the advisor to delete

  const handleDeleteConfirm = () => {
    if (advisorToDelete !== null) {
      setAdvisors((prevAdvisors) => prevAdvisors.filter((advisor) => advisor.id !== advisorToDelete));
      console.log(`Deleted advisor with ID: ${advisorToDelete}`);
      setShowModal(false); // Close modal after deleting
    }
  };

  const handleDelete = (id: number) => {
    setAdvisorToDelete(id); // Set the selected advisor to delete
    setShowModal(true); // Show the modal
  };

  const filteredAdvisors = advisors.filter((advisor) => {
    const matchesSearch = advisor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          advisor.speciality.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesPrice = !priceRange || (
      parseFloat(advisor.price.replace('$', '')) >= priceRange[0] &&
      parseFloat(advisor.price.replace('$', '')) <= priceRange[1]
    );

    const matchesRating = !ratingFilter || advisor.rating >= ratingFilter;

    const matchesOffline = !showOffline || advisor.isOffline === showOffline;

    return matchesSearch && matchesPrice && matchesRating && matchesOffline;
  });

  return (
    <section>
      <section>
        <NavbarAdmin />
      </section>
      
      <div className="bg-white mt-16 min-h-screen py-8">
        <div className="w-full lg:w-auto">
        <SearchByCategory
          onSearchChange={setSearchQuery}
          onRatingChange={setRatingFilter}
          onPriceChange={setPriceRange}
          onOfflineToggle={setShowOffline}
        />
      </div>
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-gold-600 text-customGold text-center mb-8">Advisors List</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAdvisors.length > 0 ? (
              filteredAdvisors.map((advisor) => (
                <div key={advisor.id} className="bg-white shadow-lg rounded-lg p-6 relative border border-gold-200">
                  <Image
                    src={advisor.image}
                    alt={advisor.name}
                    width={200}
                    height={200}
                    className="rounded-full mx-auto mb-4 border-4 border-customGold"
                  />
                  <h3 className="text-xl text-customGold font-bold text-center mb-2 text-gold-600">{advisor.name}</h3>
                  <p className="text-black text-center mb-2">{advisor.description}</p>
                  <p className="text-black text-center">Payment: <span className="text-gold-600">{advisor.price}</span></p>
                  <p className="text-black text-center">Reading Type: <span className="text-gold-600">{advisor.readingType}</span></p>
                  <p className="text-black text-center">Speciality: <span className="text-gold-600">{advisor.speciality}</span></p>

                  <button
                    onClick={() => handleDelete(advisor.id)}
                    className="absolute top-4 right-4 bg-red-500 text-white rounded-full p-2 hover:bg-red-600 transition duration-200"
                  >
                    <FaTrash />
                  </button>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-600 col-span-3">No advisors found.</p>
            )}
          </div>
        </div>
      </div>

      {showModal && (
        <Modal
        show={showModal}
          title="Delete Advisor"
          message="Are you sure you want to delete this advisor?"
          onConfirm={handleDeleteConfirm}
          onCancel={() => setShowModal(false)}
        />
      )}
    </section>
  );
};

export default AdvisorsList;
