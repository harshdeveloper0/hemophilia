import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-red-100 text-gray-800 py-8 px-4 mt-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* About Section */}
        <div>
          <h2 className="text-xl font-bold mb-2">हीमोफीलिया जागरूकता</h2>
          <p className="text-sm">
            हमारा लक्ष्य है हीमोफीलिया से ग्रसित लोगों को सही जानकारी और समर्थन
            प्रदान करना। जानकारी ही बचाव है।
          </p>
        </div>

        {/* Quick Links / Contact */}
        <div>
          <h2 className="text-xl font-bold mb-2">संपर्क करें</h2>
          <ul className="text-sm space-y-1">
            <li>Email: <a href="mailto:info@hemocare.org" className="text-blue-700">shailesh999876@gmail.com</a></li>
            <li>फ़ोन: +91 8486452572</li>
            <li>स्थान: गोरखपुर</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-xl font-bold mb-2">हमसे जुड़ें</h2>
          <div className="flex space-x-4 text-2xl text-red-600">
            <a href="https://facebook.com" aria-label="Facebook"><FaFacebookF /></a>
            <a href="https://twitter.com" aria-label="Twitter"><FaTwitter /></a>
            <a href="https://instagram.com" aria-label="Instagram"><FaInstagram /></a>
            <a href="shailesh999876@gmail.com" aria-label="Email"><FaEnvelope /></a>
          </div>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 mt-6 border-t pt-4">
        © 2025 Hemocare | सभी अधिकार सुरक्षित हैं।
      </div>
    </footer>
  );
};

export default Footer;
