import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { useAuth0 } from "@auth0/auth0-react";

// Function to format the date in a readable format
const formatDate = (date) => {
  return new Intl.DateTimeFormat("hi-IN", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  }).format(date);
};

// Meeting Data (You can update this easily in the future)
const meetingData = [];

const NextMeeting = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    <section
      id="next-meeting"
      className="py-10 bg-gradient-to-r from-red-200 via-red-100 to-red-50"
    >
      {isAuthenticated ? (
        <div className="container mx-auto px-4">
          {meetingData.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {meetingData.map((meeting, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <h3 className="text-2xl font-bold text-red-700 mb-4">
                    {meeting.title}
                  </h3>
                  <hr className="my-4 border-red-200" />
                  <p className="text-md text-gray-600 mb-4">
                    {meeting.description || "Details coming soon..."}
                  </p>
                  <p className="text-md text-gray-700 mb-6">
                    Meeting on: {" "}
                    <span className="font-semibold text-red-600">
                      {formatDate(new Date(meeting.date))}
                    </span>
                  </p>

                  {/* Button to add to calendar */}
                  <a
                    href={`https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
                      meeting.title
                    )}&dates=${new Date(meeting.date)
                      .toISOString()
                      .replace(/-|:|\.\d+/g, "")}/${new Date(meeting.date)
                      .toISOString()
                      .replace(/-|:|\.\d+/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Add ${meeting.title} to your calendar`}
                    className="bg-red-600 text-white py-3 px-8 rounded-lg text-lg font-semibold hover:bg-red-700 transition duration-300"
                  >
                    Add to Calendar {" "}
                    <span>
                      <i className="fa-solid fa-calendar-days"></i>
                    </span>
                  </a>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center text-center">
              <h3 className="text-2xl font-bold text-red-700 mb-4">
                <Typewriter
                  words={[
                    "अभी तक कोई बैठक निर्धारित नहीं है.",
                    "No meetings scheduled yet.",
                  ]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={50}
                  deleteSpeed={80}
                  delaySpeed={1200}
                />
              </h3>
              <p className="mt-2 text-gray-600 bg-yellow-50 px-4 py-3 rounded-lg shadow-md">
                कृपया भविष्य में अद्यतन के लिए वापस आएं।
              </p>
            </div>
          )}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center text-center py-10">
          <h3 className="text-2xl font-bold text-red-700 mb-4">
          मीटिंग देखने के लिए लॉगिन करें
          </h3>
         
        </div>
      )}
    </section>
  );
};

export default NextMeeting;
