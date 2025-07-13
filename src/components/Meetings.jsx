"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

const meetingsData = [

  {
    id: 1,
    name: "Annual Hemophilia Awareness Camp",
    date: "12th March 2024",
    distribution: "Free Factor Distribution & Checkup",
    image: "/images/meeting1.jpg",
    details: "Details here...",
  },
];

const Meetings = () => {
  const router = useRouter();

  const handleViewDetails = (id) => {
    router.push(`/meeting/${id}`);
  };

  return (
    <div className="bg-gray-100 py-16 px-4 md:px-8 min-h-screen">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-red-600 mb-6">Meetings & Events</h2>
        <p className="text-lg text-gray-700 mb-12">
          Below are the details of our past meetings and events where we spread awareness and support for Hemophilia.
        </p>

        {meetingsData.length === 0 ? (
          <p className="text-gray-600 text-xl">No meetings or events available right now.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {meetingsData.map((meeting) => (
              <div
                key={meeting.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="relative w-full h-48">
                  <Image
                    src={meeting.image}
                    alt={meeting.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 text-left">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {meeting.name}
                  </h3>
                  <p className="text-gray-600">
                    <strong>Date:</strong> {meeting.date}
                  </p>
                  <p className="text-gray-600 mb-4">
                    <strong>Distribution:</strong> {meeting.distribution}
                  </p>
                  <button
                    onClick={() => handleViewDetails(meeting.id)}
                    className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-500 transition duration-300"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Meetings;
