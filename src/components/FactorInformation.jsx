"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import AuthGuard from "./AuthGuard";
export default function Home() {
  const [factors, setFactors] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get("/api/factors");
      setFactors(res.data);
    } catch (error) {
      console.error("GET Error:", error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AuthGuard>
    <main className="md:w-[100vw] mx-auto p-4 bg-[#fff5f5] ">
      <h1 className="text-3xl font-bold text-center mt-4 text-red-700 mb-6">
        🩸Hemophilia Factor Availability
      </h1>
      <div className="grid gap-4 md:w-[50vw] mx-auto">
        {factors.map((item, idx) => (
          <div
            key={idx}
            className="p-4 rounded-lg bg-white shadow border border-red-100"
          >
            <h2 className="text-xl font-semibold text-red-800">
              {item.hospitalName} ({item.city})
            </h2>
            <div className="mt-2 text-gray-700 space-y-1">
              <p>Factor 7: {item.factors.factor7 ? "✅" : "❌"}</p>
              <p>Factor 8: {item.factors.factor8 ? "✅" : "❌"}</p>
              <p>Factor 9: {item.factors.factor9 ? "✅" : "❌"}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
    </AuthGuard>
  );
}
