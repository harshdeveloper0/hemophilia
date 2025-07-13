
"use client";
import { createContext, useContext, useEffect, useState } from "react";

const PWAInstallContext = createContext();

export const usePWAInstall = () => useContext(PWAInstallContext);

export const PWAInstallProvider = ({ children }) => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isInstallable, setIsInstallable] = useState(false);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setIsInstallable(true);
    };

    window.addEventListener("beforeinstallprompt", handler);

    return () => {
      window.removeEventListener("beforeinstallprompt", handler);
    };
  }, []);

  const installApp = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const result = await deferredPrompt.userChoice;
    console.log("Install result:", result);
    setDeferredPrompt(null);
    setIsInstallable(false);
  };

  return (
    <PWAInstallContext.Provider value={{ isInstallable, installApp }}>
      {children}
    </PWAInstallContext.Provider>
  );
};
