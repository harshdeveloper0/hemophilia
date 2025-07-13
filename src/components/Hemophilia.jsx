"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp, X } from "lucide-react";
import Image from "next/image";

const Hemophilia = () => {
  const [isSymptomOpen, setIsSymptomOpen] = useState(false);
  const [isTreatmentOpen, setIsTreatmentOpen] = useState(false);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const images = {
    intro:
      "https://tse2.mm.bing.net/th?id=OIP.8eGua-f2Pk5ec7l-GofUPgHaE8&pid=Api",
    symptoms:
      "https://tse1.mm.bing.net/th?id=OIP.O-6KyCUhOyO3IuyarBieOgHaHa&pid=Api",
    treatment:
      "https://tse3.mm.bing.net/th?id=OIP.wbfgnq0mKCkWoEyC7ZIKcQHaFr&pid=Api",
  };

  const openImageModal = (img) => {
    setModalImage(img);
    setIsImageModalOpen(true);
  };

  const closeImageModal = () => {
    setIsImageModalOpen(false);
    setModalImage("");
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-10 rounded-2xl bg-gradient-to-br from-white to-red-50 shadow-lg">
      <h1 className="text-4xl font-bold text-center text-red-600 mb-10">
        हिमोफीलिया: एक सम्पूर्ण जानकारी
      </h1>

      {/* Intro */}
      <section className="mb-10">
        <div
          className="rounded-xl shadow-md cursor-pointer hover:scale-105 transition-transform duration-300 overflow-hidden"
          onClick={() => openImageModal(images.intro)}
        >
          <Image
            src={images.intro}
            alt="Hemophilia Awareness"
            width={800}
            height={400}
            layout="responsive"
            className="rounded-xl"
          />
        </div>
        <p className="mt-4 text-lg text-gray-800 leading-relaxed">
          हिमोफीलिया एक दुर्लभ आनुवंशिक रक्तस्राव विकार है जिसमें रक्त का थक्का
          बनने की प्रक्रिया बाधित होती है। यह मुख्य रूप से पुरुषों में पाया जाता
          है, लेकिन महिलाएं वाहक होती हैं।
        </p>
      </section>

      {/* Types */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-red-500 mb-4">प्रकार</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>हिमोफीलिया A: फैक्टर VIII की कमी</li>
          <li>हिमोफीलिया B: फैक्टर IX की कमी</li>
        </ul>
      </section>

      {/* Symptoms Accordion */}
      <section className="mb-10">
        <button
          onClick={() => setIsSymptomOpen(!isSymptomOpen)}
          className="flex justify-between items-center w-full text-xl font-semibold text-blue-700 hover:text-red-700 transition-colors"
        >
          <span>लक्षण {isSymptomOpen ? "छुपाएं" : "दिखाएं"}</span>
          {isSymptomOpen ? <ChevronUp /> : <ChevronDown />}
        </button>
        {isSymptomOpen && (
          <div className="mt-4 bg-white p-4 rounded-xl shadow">
            <img
              src={images.symptoms}
              alt="Hemophilia Symptoms"
              className="w-full rounded-lg shadow cursor-pointer hover:scale-105 transition-transform"
              onClick={() => openImageModal(images.symptoms)}
            />
            <ul className="list-disc pl-6 mt-4 text-gray-700 space-y-2">
              <li>चोट के बाद लंबे समय तक रक्तस्राव</li>
              <li>आसान चोट लगना</li>
              <li>नाक से बार-बार खून आना</li>
              <li>जोड़ों में दर्द और सूजन</li>
              <li>मूत्र या मल में रक्त</li>
            </ul>
          </div>
        )}
      </section>

      {/* Treatment Accordion */}
      <section className="mb-10">
        <button
          onClick={() => setIsTreatmentOpen(!isTreatmentOpen)}
          className="flex justify-between items-center w-full text-xl font-semibold text-blue-700 hover:text-red-700 transition-colors"
        >
          <span>उपचार {isTreatmentOpen ? "छुपाएं" : "दिखाएं"}</span>
          {isTreatmentOpen ? <ChevronUp /> : <ChevronDown />}
        </button>
        {isTreatmentOpen && (
          <div className="mt-4 bg-white p-4 rounded-xl shadow">
            <img
              src={images.treatment}
              alt="Hemophilia Treatment"
              className="w-full rounded-lg shadow cursor-pointer hover:scale-105 transition-transform"
              onClick={() => openImageModal(images.treatment)}
            />
            <p className="mt-4 text-gray-700 text-base leading-relaxed">
              हिमोफीलिया का उपचार क्लॉटिंग फैक्टर रिप्लेसमेंट थेरेपी के माध्यम से
              किया जाता है। इसके अतिरिक्त, डेस्मोप्रेसिन और फिजिकल थेरेपी का भी
              उपयोग किया जा सकता है। नई तकनीकों जैसे जीन थेरेपी पर शोध जारी है।
            </p>
          </div>
        )}
      </section>

      {/* Lifestyle Tips */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-red-500 mb-4">
          जीवनशैली सुझाव
        </h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>चोटों से बचने के लिए सावधानी बरतें।</li>
          <li>नियमित चिकित्सकीय जांच कराएं।</li>
          <li>
            रक्तस्राव होने पर फैक्टर लगवाएं और 2-2 घंटे बर्फ से सेकाई करें।
            ठीक होने पर 5-7 दिन बाद फिजियोथेरेपी शुरू करें।
          </li>
          <li>
            नियमित फिजियोथेरेपी से मांसपेशियां और जोड़ मजबूत बनाए रखें।
          </li>
        </ul>
      </section>

      {/* Disclaimer */}
      <p className="text-sm text-gray-600 border-t pt-4">
        <strong>नोट:</strong> यह जानकारी केवल शैक्षिक उद्देश्यों के लिए है। कृपया
        किसी भी चिकित्सा सलाह के लिए डॉक्टर से संपर्क करें।
      </p>

      {/* Image Modal */}
      {isImageModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center"
          onClick={closeImageModal}
        >
          <div
            className="relative bg-white p-2 rounded-lg shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-black hover:text-red-600"
              onClick={closeImageModal}
            >
              <X size={24} />
            </button>
            <img
              src={modalImage}
              alt="Modal"
              className="max-w-[90vw] max-h-[80vh] rounded"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Hemophilia;
