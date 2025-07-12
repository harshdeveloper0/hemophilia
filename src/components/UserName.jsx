import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";

const UserName = () => {
  const { loginWithRedirect, logout, user, isAuthenticated, isLoading } = useAuth0();

  // Default image URL if user picture is not available
  const defaultDp = "/images/default.jpg"; // Make sure the image is in the public/images folder

  return (
    <div className="bg-gray-100">
      {isAuthenticated ? (
        <div className="bg-white rounded-lg shadow-lg w-full text-center">
          <img 
            src={user.picture || defaultDp}  // Use default image if no user picture
            alt={user.name} 
            className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-red-700"
          />
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            👋🏻 {user.name}
          </h2>

          <button 
            onClick={() => logout({ returnTo: window.location.origin })} 
            className="px-6 py-2 bg-red-700 mb-5 text-white font-semibold rounded-lg hover:bg-red-800 transition duration-300"
          >
            Log Out
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default UserName;
