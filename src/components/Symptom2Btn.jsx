"use client";

import React from "react";
import Link from "next/link";

const Symptom2Btn = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-9 py-4">
      <Link href="/HemophiliaSymptoms">
        <button className="px-6 py-2 mb-3 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition duration-300 ease-in-out">
          Symptoms <i className="fa-solid fa-hand"></i>
        </button>
      </Link>
    </div>
  );
};

export default Symptom2Btn;
