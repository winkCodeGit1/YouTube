import React, { useRef } from "react";
import { categoryFilters } from "../utils/constants";

const ButtonList = () => {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({
      left: -200, // Adjust scroll distance
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({
      left: 200, // Adjust scroll distance
      behavior: "smooth",
    });
  };

  return (
    <div className="relative bg-white py-2">
      {/* Left Arrow */}
      <button
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 text-gray-700 p-2 rounded-full z-10 hover:bg-gray-300"
      >
        &#8592;
      </button>

      {/* Scrollable Container */}
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto no-scrollbar space-x-4 px-6"
      >
        {Object.entries(categoryFilters).map(([key, { label }]) => (
          <button
            key={key}
            className="px-4 py-1 bg-gray-100 text-gray-800 border border-gray-300 rounded-full hover:bg-gray-200 whitespace-nowrap"
          >
            {label}
          </button>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        onClick={scrollRight}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 text-gray-700 p-2 rounded-full z-10 hover:bg-gray-300"
      >
        &#8594;
      </button>
    </div>
  );
};

export default ButtonList;