import React from "react";

const Footer = () => {
  return (
    <footer className="bg-red-600 text-white py-6 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Logo and Society Name */}
        <div className="flex items-center mb-4 md:mb-0">
          <img
            src="/images/logo.jpeg"
            alt="Logo"
            className="h-12 border-2 border-white p-1 mr-3 rounded-full shadow-lg"
          />
          <p className="text-lg font-bold tracking-wide uppercase">
            Hemophilia Welfare Society Gorakhpur
          </p>
        </div>

        {/* Contact Information */}
        <div className="text-center md:text-right">
          <p className="text-sm">Phone: +91-8486452572</p>
          <p className="text-sm">Email: shailesh999876@gmail.com</p>
          <p className="text-sm">
            WhatsApp:{" "}
            <a
              href="https://wa.me/8486452572"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-200 underline"
            >
              +91-9876543210
            </a>
          </p>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-200"
          >
            <i className="fab fa-facebook-f"></i> Facebook
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-200"
          >
            <i className="fab fa-twitter"></i> Twitter
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-200"
          >
            <i className="fab fa-instagram"></i> Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
