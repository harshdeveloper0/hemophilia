"use client";
import React from "react";
import Link from "next/link";
import Button from "@/components/Button";

const About = () => {
  return (
    <section id="about" className="m-8 anm3 bg-gray-50">
      <div className="container mx-auto flex flex-col items-center text-center bg-white shadow-lg rounded-lg p-8 max-w-3xl">
      
        <h2 className="text-3xl font-bold text-red-600 mb-4">हिमोफीलिया के बारे में</h2>

        {/* Description */}
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          हिमोफीलिया एक दुर्लभ रक्तस्राव विकार है जिसमें रक्त ठीक से थक्का नहीं बन पाता।
          यह दुनिया भर में लाखों लोगों को प्रभावित करता है, और इसके इलाज के लिए जीवनभर देखभाल और उपचार की आवश्यकता होती है।
        </p>

        <Link href="/hemophilia">
          <Button />
        </Link>
      </div>
    </section>
  );
};

export default About;
