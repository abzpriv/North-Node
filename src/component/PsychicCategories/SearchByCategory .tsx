import React, { useState } from 'react';
import { FaSearch, FaFilter } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { AiFillStar } from "react-icons/ai";

interface SearchByCategoryProps {
  onSearchChange: (query: string) => void;
  onRatingChange: (rating: number) => void;
  onPriceChange: (range: [number, number]) => void;
  onOfflineToggle: (showOffline: boolean) => void;
}

const SearchByCategory: React.FC<SearchByCategoryProps> = ({
  onSearchChange,
  onRatingChange,
  onPriceChange,
  onOfflineToggle,
}) => {
  const [isFilterExpanded, setIsFilterExpanded] = useState(false);
  const [rating, setRating] = useState(4);
  const [price, setPrice] = useState<[number, number]>([1.99, 20.99]);
  const [showOffline, setShowOffline] = useState(false);

  const toggleFilter = () => {
    setIsFilterExpanded(!isFilterExpanded);
  };

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearchChange(e.target.value); 
  };

  // Handle price change for min
  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value <= price[1]) {
      setPrice([value, price[1]]);
      onPriceChange([value, price[1]]); // Update the parent state
    }
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value >= price[0]) {
      setPrice([price[0], value]);
      onPriceChange([price[0], value]); // Update the parent state
    }
  };

  const handleRatingChange = (value: number) => {
    setRating(value);
    onRatingChange(value); // Update the parent state
  };

  const handleToggleChange = () => {
    setShowOffline(!showOffline);
    onOfflineToggle(!showOffline); // Update the parent state
  };

  const minPrice = 1.99;
  const maxPrice = 39.99;

  const getPercentage = (value: number) => {
    return ((value - minPrice) / (maxPrice - minPrice)) * 100;
  };

  return (
    <div className="flex flex-col justify-between items-center p-4 w-full space-y-4 sm:space-y-0 sm:space-x-4">
      {/* Main Search Bar */}
      <div className="flex items-center bg-white text-gray-500 mb-4 rounded-lg h-16 shadow-md w-full lg:w-auto p-2">
        <FaSearch className="ml-2 sm:ml-4 text-gray-400 text-xs  sm:text-sm lg:text-base" />
        <input
          type="text"
          placeholder="Search by Category"
          className="w-full px-2 sm:px-4 py-1 sm:py-2 bg-transparent focus:outline-none text-xs sm:text-sm lg:text-base"
          onChange={handleSearchInput}  
        />
        <IoIosArrowDown className="mx-1 sm:mx-2 text-xs sm:text-sm lg:text-base" />
        <div className="border-l h-full mx-1 sm:mx-2"></div>
        <FaFilter
          className="mr-1 sm:mr-4 text-xs sm:text-sm lg:text-base cursor-pointer transition-transform transform hover:scale-110"
          onClick={toggleFilter}
        />
      </div>

      {/* Filter Section */}
      <div
  className={`flex flex-col sm:flex-row items-start sm:items-center bg-white text-gray-500 rounded-lg p-2 overflow-hidden transition-all ease-in-out transform ${
    isFilterExpanded ? '' : 'max-w-full opacity-0 scale-15'
  }`}
  style={{

    transitionDuration: '1000ms', 
    transitionTimingFunction: 'cubic-bezier(0.77, 0, 0.175, 1)', 
    transformOrigin: 'top left',
    backgroundColor: isFilterExpanded ? '#ffffff' : '#ffffff',
    boxShadow: isFilterExpanded
      ? '0px 10px 30px rgba(0, 0, 0, 0.12)'
      : 'none',
   
  }}
>

        {/* Ratings */}
        <div className="flex items-center mb-2 sm:mb-0 sm:mr-2 ">
          {[1, 2, 3, 4, 5].map((star) => (
            <AiFillStar
              key={star}
              className={`cursor-pointer text-${star <= rating ? "yellow-500" : "gray-400"} text-xs sm:text-sm lg:text-base`}
              onClick={() => handleRatingChange(star)}
            />
          ))}
        </div>

        {/* Price Range Slider with two handles */}
        <div className="flex items-center mb-2 sm:mb-0 sm:mr-2 ">
          <span className="text-xs sm:text-sm lg:text-base text-gray-600 mr-1 sm:mr-2">${minPrice.toFixed(2)}</span>
          <div className="relative w-32 sm:w-40">
            {/* Slider background */}
            <div className="absolute w-full h-1 bg-gray-300 rounded-full"></div>
            {/* Selected range (black line) */}
            <div
              className="absolute h-1 bg-black rounded-full"
              style={{
                left: `${getPercentage(price[0])}%`,
                right: `${100 - getPercentage(price[1])}%`,
              }}
            ></div>

            {/* Min slider */}
            <input
              type="range"
              min={minPrice}
              max={maxPrice}
              step="0.01"
              value={price[0]}
              onChange={handleMinChange}
              className="absolute w-full h-1 appearance-none bg-transparent pointer-events-auto"
            />

            {/* Max slider */}
            <input
              type="range"
              min={minPrice}
              max={maxPrice}
              step="0.01"
              value={price[1]}
              onChange={handleMaxChange}
              className="absolute w-full h-1 appearance-none bg-transparent pointer-events-auto"
            />
          </div>
          <span className="text-xs sm:text-sm lg:text-base text-gray-600 ml-1 sm:ml-2">${maxPrice.toFixed(2)}</span>
          <div className="ml-2 bg-gray-200 px-2 py-1 rounded-lg text-xs sm:text-sm lg:text-base">
            ${price[0].toFixed(2)}-${price[1].toFixed(2)}/min
          </div>
        </div>

        {/* Show Offline Toggle */}
        <div className="flex items-center space-x-2">
          {/* Toggle Switch */}
          <label htmlFor="offline-toggle" className="relative">
            <input
              type="checkbox"
              id="offline-toggle"
              checked={showOffline}
              onChange={handleToggleChange}
              className="sr-only"
            />
            <div className={`block w-8 h-5 sm:w-10 sm:h-6 rounded-full ${showOffline ? 'bg-green-500' : 'bg-gray-300'}`}></div>
            <div
              className={`dot absolute left-1 top-1 w-3 h-3 sm:w-4 sm:h-4 rounded-full transition ${
                showOffline ? 'transform translate-x-4 bg-white' : 'bg-white'
              }`}
            ></div>
            <span className="text-xs sm:text-sm lg:text-base">Show Offline</span>
          </label>
        </div>
      </div>

      <style jsx>{`
        input[type='range']::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 12px;
          height: 12px;
          background: #c79100;
          cursor: pointer;
          border-radius: 5px;
          clip-path: polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%);
        }

        input[type='range']::-moz-range-thumb {
          width: 12px;
          height: 12px;
          background: #c79100;
          cursor: pointer;
          border-radius: 5px;
          clip-path: polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%);
        }

        input[type='range']::-ms-thumb {
          width: 12px;
          height: 12px;
          background: #c79100;
          cursor: pointer;
          border-radius: 5px;
          clip-path: polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%);
        }
      `}</style>
    </div>
  );
};

export default SearchByCategory;
