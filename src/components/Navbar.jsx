"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import AdminGuard from "@/components/AdminGuard";
import { usePWAInstall } from "@/context/PWAInstallContext";

const DEFAULT_IMAGE = "/images/defaultProfile.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { data: session } = useSession();
  const menuRef = useRef(null);
  const { isInstallable, installApp } = usePWAInstall(); // ✅ use hook

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
        <li><Link href="/">Home</Link></li>
        <li><Link href="/Meetings">Meetings</Link></li>
        <li><Link href="/hemophilia">Hemophilia</Link></li>
        <li><Link href="/HemophiliaSymptoms">Symptoms</Link></li>
        <li><Link href="/HemophiliaTreatment">Treatment</Link></li>
        <li><Link href="/Camps">Camps</Link></li>
        <li><Link href="/Contact">Contact</Link></li>

        {isInstallable && (
          <li>
            <button
              onClick={installApp}
              className="bg-green-600 text-white px-3 py-1 rounded-md font-medium hover:bg-green-700 transition-all"
            >
              📲 Install App
            </button>
          </li>
        )}

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
              className="bg-white text-red-500 py-1 px-4 rounded-md font-semibold"
            >
              Log out
            </button>
          ) : (
            <button
              onClick={() => signIn()}
              className="bg-white text-red-500 py-1 px-4 rounded-md font-semibold"
            >
              Login
            </button>
          )}
        </li>

        <AdminGuard>
          <li>
            <Link href="/AdminPanel/FactorInformation">
              <button className="bg-zinc-600 text-white py-1 px-4 rounded-md font-semibold">
                Admin
              </button>
            </Link>
          </li>
        </AdminGuard>
      </ul>

      {/* Hamburger */}
      <button
        onClick={toggleMobileMenu}
        className="md:hidden flex flex-col justify-center items-center space-y-1 z-50 relative"
        aria-label="Toggle Menu"
      >
        <div className={`w-6 h-0.5 bg-white transition-transform duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
        <div className={`w-6 h-0.5 bg-white transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`} />
        <div className={`w-6 h-0.5 bg-white transition-transform duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
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
            <li><Link href="/" onClick={toggleMobileMenu}>Home</Link></li>
            <li><Link href="/Meetings" onClick={toggleMobileMenu}>Meetings</Link></li>
            <li><Link href="/hemophilia" onClick={toggleMobileMenu}>Hemophilia</Link></li>
            <li><Link href="/HemophiliaSymptoms" onClick={toggleMobileMenu}>Symptoms</Link></li>
            <li><Link href="/HemophiliaTreatment" onClick={toggleMobileMenu}>Treatment</Link></li>
            <li><Link href="/Camps" onClick={toggleMobileMenu}>Camps</Link></li>
            <li><Link href="/Contact" onClick={toggleMobileMenu}>Contact</Link></li>

            <AdminGuard>
              <li>
                <Link href="/AdminPanel/FactorInformation" onClick={toggleMobileMenu}>
                  <button className="bg-slate-400 text-white py-1 px-4 rounded-md w-full font-semibold">
                    Admin
                  </button>
                </Link>
              </li>
            </AdminGuard>

            {isInstallable && (
              <li>
                <button
                  onClick={() => {
                    toggleMobileMenu();
                    installApp();
                  }}
                  className="bg-green-700 text-white py-2 px-4 w-full rounded-md mt-4 font-semibold"
                >
                  📲 Install App
                </button>
              </li>
            )}
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
