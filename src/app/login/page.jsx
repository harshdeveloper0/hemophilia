"use client";

import { useSession, signIn, signOut } from "next-auth/react";

export default function AuthStatus() {
  const { data: session } = useSession();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-white to-red-100 text-gray-800 p-6">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 border border-red-200">
        <h1 className="text-3xl font-bold text-red-600 text-center mb-6">
          Hemophilia Portal
        </h1>

        {session ? (
          <div className="text-center space-y-4">
            <p className="text-lg">
              Signed in as{" "}
              <span className="font-semibold text-red-700">
                {session.user?.email}
              </span>
            </p>
            <button
              onClick={() => signOut()}
              className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-full transition-all"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <div className="text-center space-y-4">
            <p className="text-lg text-gray-700">Not signed in</p>
            <button
              onClick={() => signIn()}
              className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-full transition-all"
            >
              Sign In
            </button>
          </div>
        )}

        <div className="mt-6 text-xs text-gray-500 text-center">
          Hemophilia Awareness • Stay Strong, Stay Safe
        </div>
      </div>
    </div>
  );
}
