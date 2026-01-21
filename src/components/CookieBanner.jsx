import React, { useEffect, useState } from "react";
import "./cookieBanner.scss";
import { Link } from "react-router-dom";

const CookieBanner = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setIsOpen(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="cookie-backdrop">
      <div className="cookie-modal">
        <h3>Cookies & Datenschutz</h3>
        <p>
          Diese Website verwendet ausschließlich technisch notwendige Cookies,
          um eine einwandfreie Funktion sicherzustellen. Weitere Informationen
          finden Sie in unserer{" "}
          <Link to="/datenschutz">Datenschutzerklärung</Link>        </p>
        <button onClick={acceptCookies}>OK</button>
      </div>
    </div>
  );
};

export default CookieBanner;
