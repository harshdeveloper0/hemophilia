import React from "react";
import { Link } from "react-router-dom";

const MeetingsBtn = () => {
  return (
    <div className="flex flex-col items-center gap-4 mt-8">
      <Link to="/meetings">
        <button className="bg-red-600 text-white px-8 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-red-700 hover:shadow-lg transition duration-300">
          View Meetings
        </button>
      </Link>
      <Link to="/meetings">
        <button className="bg-red-600 text-white px-8 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-red-700 hover:shadow-lg transition duration-300">
          बैठकें देखें
        </button>
      </Link>
    </div>
  );
};

export default MeetingsBtn;
