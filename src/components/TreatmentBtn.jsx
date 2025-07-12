"use client";

import React from "react";
import Link from "next/link";

const Button = () => {
  return (
    <div className="text-center flex-col items-center justify-center flex">
      <Link href="/HemophiliaTreatment">
        <button className="bg-red-600 mb-4 text-white py-3 px-8 rounded-lg text-lg font-semibold hover:bg-red-700 transition duration-300">
          treatments <span><i className="fa-solid fa-stethoscope"></i></span>
        </button>
      </Link>

     
    </div>
  );
};

export default Button;
