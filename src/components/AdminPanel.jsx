"use client";

import React, { useState } from "react";

const AdminPanel = () => {
  const [hospitalData, setHospitalData] = useState([
    {
      name: "BRD Medical College",
      location: "गोरखपुर",
      factors: { factor8: true, factor9: true, factor7: false },
    },
    {
      name: "District Hospital",
      location: "बस्ती",
      factors: { factor8: true, factor9: true, factor7: false },
    },
    {
      name: "Mini PGI",
      location: "आजमगढ़",
      factors: { factor8: true, factor9: true, factor7: false },
    },
    {
      name: "PGI Lucknow",
      location: "लखनऊ",
      factors: { factor8: true, factor9: true, factor7: true },
    },
    {
      name: "KGMU",
      location: "लखनऊ",
      factors: { factor8: true, factor9: true, factor7: false },
    },
  ]);

  const [editedData, setEditedData] = useState({});

  const handleEdit = (hospitalIndex, factorKey) => {
    const updatedData = { ...editedData };
    updatedData[hospitalIndex] = {
      ...updatedData[hospitalIndex],
      [factorKey]: !hospitalData[hospitalIndex].factors[factorKey],
    };
    setEditedData(updatedData);
  };

  const handleSubmit = () => {
    // Submit updated hospitalData via API later
    setHospitalData((prevData) =>
      prevData.map((hospital, index) => ({
        ...hospital,
        factors: { ...hospital.factors, ...editedData[index] },
      }))
    );
    alert("Data updated successfully!");
  };

  return (
    <section className="bg-gray-100 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-red-700 mb-8">
          Admin Panel - फैक्टर उपलब्धता अपडेट करें
        </h2>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          {hospitalData.map((hospital, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105"
            >
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
                {hospital.name}
              </h3>
              <p className="text-gray-600 mb-4">स्थान: {hospital.location}</p>
              <div>
                <h4 className="text-lg sm:text-xl font-medium text-gray-700 mb-3">
                  उपलब्ध फैक्टर्स:
                </h4>
                <ul className="space-y-3">
                  {Object.entries(hospital.factors).map(([key, value]) => (
                    <li key={key} className="flex items-center">
                      <span className="w-28 font-medium capitalize">
                        {key.replace("factor", "फैक्टर ")}
                      </span>
                      <span
                        className={`px-4 py-1 text-sm sm:text-base font-medium rounded-full ${
                          value
                            ? "bg-green-100 text-green-600"
                            : "bg-red-100 text-red-600"
                        }`}
                      >
                        {value ? "उपलब्ध" : "उपलब्ध नहीं"}
                      </span>
                      {/* Edit Button */}
                      <button
                        onClick={() => handleEdit(index, key)}
                        className="ml-4 text-sm font-semibold text-blue-600 hover:text-blue-800"
                      >
                        {value ? "Disable" : "Enable"}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <button
            onClick={handleSubmit}
            className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Update All Data
          </button>
        </div>
      </div>
    </section>
  );
};

export default AdminPanel;
