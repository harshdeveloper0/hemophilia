"use client";

import React from "react";
import { FaWhatsapp, FaPhoneAlt, FaFacebook } from "react-icons/fa";
import Image from "next/image";
import toast from "react-hot-toast";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORM_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("🎉 आपका संदेश शैलेश गुप्ता जी तक भेजा जा रहा है! धन्यवाद 🙏");
        setResult("You sent your message to Shailesh Gupta, successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Network error:", error);
      setResult("Failed to send message. Please check your network connection.");
    }
  };

  return (
    <div className="bg-gradient-to-r  from-red-200 to-red-100 text-black py-12 px-2">
      {/* Top Section */}
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-red-600 mb-6">
          हीमोफीलिया जागरूकता में शामिल हों
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mb-8">
          आपका सहयोग और प्रश्न हमारे लिए मूल्यवान हैं। अधिक जानकारी, सहयोग या यह जानने के लिए कि आप हीमोफीलिया के बारे में जागरूकता बढ़ाने में कैसे मदद कर सकते हैं, हमसे संपर्क करें।
        </p>
        <div className="flex justify-center space-x-6 text-3xl mb-8">
          <a className="text-4xl" href="https://wa.me/8486452572" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="text-green-500 hover:text-green-400 transition duration-300" />
          </a>
          <a href="tel:+8486452572" target="_blank" rel="noopener noreferrer">
            <FaPhoneAlt className="text-blue-500 hover:text-blue-400 transition duration-300" />
          </a>
          <a href="https://www.facebook.com/people/Shailesh-Gupta/pfbid025vXEcunaVjkJt9Va3za16A7PHWiwDxJ9GSWwKpc8ktMWhiVty7PnDCGpcYJEm5FPl/" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-blue-600 hover:text-blue-500 transition duration-300" />
          </a>
        </div>
      </div>

      {/* Form Section */}
      <div className="p-8 mt-8 mx-auto max-w-lg bg-gray-800 rounded-lg shadow-lg">
        <div className="h-12 w-12 rounded-full mx-auto mb-4 relative overflow-hidden">
          <Image
            src="/images/logo.jpeg"
            alt="Logo"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <h1 className="text-3xl text-white font-bold text-center mb-6">Shailesh Gupta</h1>
        <form onSubmit={onSubmit} className="space-y-6">
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            className="w-full rounded-lg py-3 px-4 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-400"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            className="w-full rounded-lg py-3 px-4 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-400"
          />
          <textarea
            placeholder="Your Message"
            name="message"
            rows="5"
            required
            className="w-full rounded-lg py-3 px-4 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-400"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-500 transition duration-300"
          >
            Send Message
          </button>
        </form>
        <p className="text-center text-teal-400 mt-4">{result}</p>
      </div>
    </div>
  );
};

export default Contact;
