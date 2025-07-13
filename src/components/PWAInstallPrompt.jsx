
"use client";
import { useEffect, useState } from "react";

const PWAInstallPrompt = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault(); 
      setDeferredPrompt(e);
      setShowButton(true); 
    };

    window.addEventListener("beforeinstallprompt", handler);

    return () => {
      window.removeEventListener("beforeinstallprompt", handler);
    };
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === "accepted") {
        console.log("User accepted the install prompt");
      } else {
        console.log("User dismissed the install prompt");
      }
      setDeferredPrompt(null);
      setShowButton(false);
    }
  };

  if (!showButton) return null;

  return (
    <button
      onClick={handleInstallClick}
      className="fixed bottom-5 right-5 bg-red-600 text-white px-4 py-2 rounded-lg shadow-md z-50"
    >
      📲 Install App
    </button>
  );
};

export default PWAInstallPrompt;
