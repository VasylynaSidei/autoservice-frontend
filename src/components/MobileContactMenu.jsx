import React, { useEffect, useState } from "react";
import { FiPhone, FiMail, FiMoreHorizontal } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import "./mobileContactMenu.scss";

const MobileContactMenu = () => {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className={`mobile-menu ${open ? "open" : ""}`}>
      <a
        href="https://wa.me/+49039916734060"
        className="menu-item whatsapp"
        target="_blank"
        rel="noreferrer"
      >
        <FaWhatsapp />
      </a>

      <a href="tel:+49039916734060" className="menu-item phone">
        <FiPhone />
      </a>

      <a
        href="mailto:gundpmeisterwerkstatt@t-online.de"
        className="menu-item mail"
      >
        <FiMail />
      </a>

      <button className="menu-toggle" onClick={() => setOpen(!open)}>
        <FiMoreHorizontal />
      </button>
    </div>
  );
};

export default MobileContactMenu;
