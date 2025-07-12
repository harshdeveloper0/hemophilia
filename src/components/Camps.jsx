import React from "react";

const Camps = () => {
  // Array of image URLs
  const campImages = Array.from({ length: 35}, (_, i) => `/images/camps/camp${i + 1}.jpeg`);

  return (
    <div className="py-12 px-4 bg-gradient-to-r from-pink-200 to-red-100 mt-7">
      <h2 className="text-3xl font-bold text-center text-red-600 mb-8">
        Hemophilia Awareness Camps
      </h2>
      <p className="text-lg text-center text-gray-700 mb-6">
        हमारे विभिन्न शिविरों के माध्यम से हीमोफीलिया के बारे में जागरूकता बढ़ाने के हमारे प्रयासों में शामिल हों। 
        आपकी भागीदारी से बहुत फ़र्क पड़ता है।
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {campImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Camp ${index + 1}`}
            className="w-full h-64 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            loading="lazy"
          />
        ))}
      </div>
    </div>
  );
};

export default Camps;
