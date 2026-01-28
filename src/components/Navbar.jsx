import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom"; // ← добавили useNavigate
import "./navbar.scss";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const navigate = useNavigate();
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (!section) return;
  
    const navbarHeight = document.querySelector(".navbar")?.offsetHeight || 0;
    const sectionTop =
      section.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
  
    const distance = Math.abs(window.pageYOffset - sectionTop);
  
    window.scrollTo({
      top: sectionTop,
      behavior: distance < 600 ? "smooth" : "auto", // 👈 магия
    });
  };
  
  
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [menuOpen]);

  // Плавное закрытие меню + переход
  const handleAnchorClick = (e) => {
    e.preventDefault();
  
    const targetId = e.currentTarget.getAttribute("href")?.replace("#", "");
    if (!targetId) return;
  
    setMenuOpen(false);
  
    // Если НЕ на главной
    if (window.location.pathname !== "/") {
      navigate(`/#${targetId}`);
      return;
    }
  
    // Ждём, пока меню закроется (мобильный layout!)
    setTimeout(() => {
      scrollToSection(targetId);
    }, 300); // 👈 ключевой момент
  };
  
  
  
  return (
    <nav className={`navbar d-flex justify-content-between ${isFixed ? "fixed" : ""}`}>
      <p className="logo" />

      <div className={`menu-icon ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="d-flex">
      <ul className={`menu ${menuOpen ? "open" : ""}`}>
  <li>
    <a href="#home" onClick={handleAnchorClick}>Startseite</a>
  </li>
  <li>
    <a href="#services" onClick={handleAnchorClick}>Leistungen</a>
  </li>
  <li>
    <a href="#about" onClick={handleAnchorClick}>Über uns</a>
  </li>
  <li>
    <a href="#review" onClick={handleAnchorClick}>Bewertungen</a>
  </li>
  <li>
    <a href="#contacts" onClick={handleAnchorClick}>Kontakte</a>
  </li>

  


          {/* Мобильная кнопка звонка */}
          <li className="menu-kontakt mobile-only">
            <a href="tel:039916734060" onClick={handleAnchorClick}>
              <button className="kontakt-btn-brg">Kontakt</button>
            </a>
          </li>
        </ul>

        {/* Десктоп кнопка */}
        <div className="kontakt-btn-wrapper desktop-only">
          <a href="tel:039916734060">
            <button className="kontakt-btn-brg">Kontakt</button>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;