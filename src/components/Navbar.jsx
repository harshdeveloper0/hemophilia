"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import AdminGuard from "@/components/AdminGuard";

const DEFAULT_IMAGE = "/images/defaultProfile.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { data: session } = useSession();
  const menuRef = useRef(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const profileImage = session?.user?.image || DEFAULT_IMAGE;

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        isMobileMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <nav className="bg-red-500 text-white py-2 px-4 flex items-center justify-between relative">
      <div className="flex items-center">
        <img
          src="/assets/logo.png"
          alt="Hemophilia Welfare Society Logo"
          className="h-10 mr-2 rounded-full"
        />
        <span className="font-bold text-sm md:text-base">
          Hemophilia Welfare Society Gorakhpur
        </span>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6 items-center">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/Meetings">Meetings</Link>
        </li>
        <li>
          <Link href="/Hemophelia">Hemophilia</Link>
        </li>
        <li>
          <Link href="/HemophiliaSymptoms">Symptoms</Link>
        </li>
        <li>
          <Link href="/HemophiliaTreatment">Treatment</Link>
        </li>
        <li>
          <Link href="/Camps">Camps</Link>
        </li>
        <li>
          <Link href="/Contact">Contact</Link>
        </li>
        

        {session && (
          <li>
            <img
              src={profileImage}
              alt="User Profile"
              className="w-8 h-8 rounded-full border-2 border-white object-cover"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = DEFAULT_IMAGE;
              }}
              title={session.user.name || "User"}
            />
          </li>
        )}

        <li>
          {session ? (
            <button
              onClick={() => signOut()}
              className="bg-white text-red-500 py-2 px-4 rounded-md font-semibold"
            >
              Log out
            </button>
          ) : (
            <button
              onClick={() => signIn()}
              className="bg-white text-red-500 py-2 px-4 rounded-md font-semibold"
            >
              Login
            </button>
          )}
        </li>
        <AdminGuard>
          <li>
            <Link
              href="/AdminPanel/FactorInformation"
              onClick={toggleMobileMenu}
            >
              <button className="bg-white text-red-500 py-2 px-4 rounded-md w-full text-left font-semibold">
                Admin
              </button>
            </Link>
          </li>
        </AdminGuard>
      </ul>

      {/* Hamburger / Cross Button */}
      <button
        onClick={toggleMobileMenu}
        className="md:hidden flex flex-col justify-center items-center space-y-1 z-50 relative"
        aria-label="Toggle Menu"
      >
        <div
          className={`w-6 h-0.5 bg-white transition-transform duration-300 ${
            isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
          }`}
        />
        <div
          className={`w-6 h-0.5 bg-white transition-opacity duration-300 ${
            isMobileMenuOpen ? "opacity-0" : ""
          }`}
        />
        <div
          className={`w-6 h-0.5 bg-white transition-transform duration-300 ${
            isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
          }`}
        />
      </button>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`fixed top-0 left-0 h-full w-64 bg-red-300 bg-opacity-90 backdrop-blur-md text-white z-10 transform transition-transform duration-300 ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4 pt-8 relative">
          {session && (
            <div className="flex items-center space-x-3 mb-6">
              <img
                src={profileImage}
                alt="User Profile"
                className="w-12 h-12 rounded-full border-2 border-white object-cover"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = DEFAULT_IMAGE;
                }}
                title={session.user.name || "User"}
              />
              <span className="font-semibold text-lg">
                {session.user.name || "User"}
              </span>
            </div>
          )}

          <ul className="space-y-4">
            <li>
              <Link href="/" onClick={toggleMobileMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/Meetings" onClick={toggleMobileMenu}>
                Meetings
              </Link>
            </li>
            <li>
              <Link href="/Hemophelia" onClick={toggleMobileMenu}>
                Hemophilia
              </Link>
            </li>
            <li>
              <Link href="/HemophiliaSymptoms" onClick={toggleMobileMenu}>
                Symptoms
              </Link>
            </li>
            <li>
              <Link href="/HemophiliaTreatment" onClick={toggleMobileMenu}>
                Treatment
              </Link>
            </li>
            <li>
              <Link href="/Camps" onClick={toggleMobileMenu}>
                Camps
              </Link>
            </li>
            <li>
              <Link href="/Contact" onClick={toggleMobileMenu}>
                Contact
              </Link>
            </li>
            <AdminGuard>
              <li>
                <Link
                  href="/AdminPanel/FactorInformation"
                  onClick={toggleMobileMenu}
                >
                  <button className="bg-white text-red-500 py-2 px-4 rounded-md w-full text-left font-semibold">
                    Admin
                  </button>
                </Link>
              </li>
            </AdminGuard>
          </ul>

          <button
            className="bg-white text-red-500 py-2 px-4 rounded-md mt-8 w-full font-semibold"
            onClick={() => {
              toggleMobileMenu();
              session ? signOut() : signIn();
            }}
          >
            {session ? "Logout" : "Login"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
