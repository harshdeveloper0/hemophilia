"use client";

import React, { useState } from "react";
import Image from "next/image";

const News = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);

  const newsArticles = [
    {
      title: "हीमोफीलिया उपचार में नई सफलता",
      description:
        "एक नई जीन थेरेपी ने हीमोफीलिया रोगियों के उपचार में सकारात्मक परिणाम दिखाए हैं।",
      details:
        "इस नई जीन थेरेपी के माध्यम से, हीमोफीलिया रोगियों को नियमित इंजेक्शन की आवश्यकता कम हो गई है। यह उपचार दुनिया भर के चिकित्सा समुदाय में क्रांति ला सकता है।",
      link: "#",
      date: "28 दिसंबर, 2024",
      image: "https://cdn.mos.cms.futurecdn.net/97QX5fRoqwVAQD5cZ6nPoa.jpg",
    },
  ];

  const closePopup = () => {
    setSelectedArticle(null);
  };

  return (
    <section className="bg-gray-100 py-10 m-0">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-red-600 mb-6">
          ताज़ा खबरें
        </h2>
        <div className="space-y-6">
          {newsArticles.map((article, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 mx-auto"
            >
              <div className="relative w-full h-48 md:h-56 lg:h-64">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
              <div className="p-5">
                <p className="text-sm text-gray-500">{article.date}</p>
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mt-2">
                  {article.title}
                </h3>
                <p className="text-gray-600 mt-2">{article.description}</p>
                <button
                  onClick={() => setSelectedArticle(article)}
                  className="text-red-500 mt-4 inline-block font-medium hover:underline"
                >
                  और पढ़ें &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popup Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-lg w-full sm:w-10/12 md:w-8/12 lg:w-6/12 max-w-2xl p-6 relative">
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 text-xl"
            >
              ✖
            </button>
            <div className="relative w-full h-64">
              <Image
                src={selectedArticle.image}
                alt={selectedArticle.title}
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-4">
              {selectedArticle.title}
            </h3>
            <p className="text-gray-600 mt-2">{selectedArticle.details}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default News;
