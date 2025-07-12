"use client";

import React from "react";
import Image from "next/image";
import Symptom2Btn from "./Symptom2Btn";

const Symptoms = () => {
  const symptoms = [
    "चोट लगने के बाद लंबे समय तक रक्तस्राव",
    "आसान चोट लगना",
    "बार-बार नाक से खून आना",
    "जोड़ों का दर्द और सूजन",
  ];

  return (
    <section id="symptoms" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Image Styling */}
        <div className="mb-12 flex justify-center">
          <Image
            src="https://hemophilianewstoday.com/wp-content/uploads/2023/10/MOST-COMMON-SYMPTOMS-OF-HEMOPHILIA-533x800.png"
            alt="Symptoms"
            className="rounded-lg shadow-xl object-cover transition-all duration-300 transform hover:scale-105"
            width={533}
            height={800}
            priority
          />
        </div>

        {/* Title */}
        <h2 className="text-4xl font-semibold text-center text-gray-800 mb-8">
          लक्षण
        </h2>

        {/* Symptoms List */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
          {symptoms.map((symptom, index) => (
            <li
              key={index}
              className="bg-white p-6 shadow-lg rounded-lg text-gray-700 hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
            >
              <span className="block text-lg font-semibold mb-2 text-red-600">
                {`लक्षण ${index + 1}`}
              </span>
              <p className="text-gray-600">{symptom}</p>
            </li>
          ))}
        </ul>

        {/* Image Link Button */}
        <div className="mt-12 text-center">
          <a
            className="bg-red-600 hover:bg-red-700 text-white py-3 px-8 rounded-lg text-lg font-semibold transition duration-300 mb-6 inline-flex items-center justify-center"
            href="/images/symptoms.png"
          >
            Tap to View Image 
            <i className="fa-solid fa-image ml-2"></i>
          </a>
        </div>
      </div>

      {/* Buttons Section */}
      <Symptom2Btn />
    </section>
  );
};

export default Symptoms;
