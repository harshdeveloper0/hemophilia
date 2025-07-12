import Head from "next/head";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

export default function SignupPage() {
  return (
    <>
      <Head>
        <title>Hemophilia Signup</title>
      </Head>
      <div className="flex justify-center p-5">
        <div className="bg-white shadow-md h-auto rounded px-8 pt-6 pb-8 mb-4 w-full max-w-sm">
          <h2 className="text-red-600 text-xl font-bold mb-2 text-center">
            Hemophilia Portal
          </h2>
          <p className="text-center text-sm text-red-400 mb-6">
            Create an account
          </p>

          <form className="space-y-4">
            <div>
              <label
                className="block text-red-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Full Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-red-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Full Name"
              />
            </div>
            <div>
              <label
                className="block text-red-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-red-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Email"
              />
            </div>
            <div>
              <label
                className="block text-red-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-red-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Password"
              />
            </div>
            <div>
              <label
                className="block text-red-700 text-sm font-bold mb-2"
                htmlFor="confirmPassword"
              >
                Confirm Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-red-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="confirmPassword"
                type="password"
                placeholder="Confirm Password"
              />
            </div>

            <button
              className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign Up
            </button>
          </form>

          <div className="mt-6 border-t pt-4">
            <p className="text-center text-sm text-gray-500 mb-2">
              Or sign up with
            </p>
            <div className="flex justify-center gap-4">
              <button className="flex items-center gap-2 border border-gray-300 rounded px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                <FaGoogle />
                Google
              </button>
              <button className="flex items-center gap-2 border border-gray-300 rounded px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                <FaFacebook />
                Facebook
              </button>
            </div>
          </div>

          <p className="mt-4 text-sm text-center text-gray-500">
            Already have an account?{" "}
            <a href="/login" className="text-red-500 hover:text-red-700 font-semibold">
              Login
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
