"use client";

import { useSession } from "next-auth/react";

export default function AuthGuard({ children }) {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div className="flex justify-center mt-10">
        <div className="bg-white shadow-md border border-red-200 rounded-lg p-6 text-center">
          <p className="text-red-700 font-semibold">Loading...</p>
        </div>
      </div>
    );
  }

  if (status === "unauthenticated") {
    return (
      <div className="flex justify-center z-0 m-10">
        <div className="bg-white  border border-red-200 rounded-lg p-6 max-w-md text-center">
          <h2 className="text-2xl font-bold text-red-700 mb-2">Access Restricted ❌</h2>
          <p className="text-gray-700">Please login to view factor availability.</p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
