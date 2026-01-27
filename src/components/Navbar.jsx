import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"; // ← добавили useNavigate
import "./navbar.scss";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const navigate = useNavigate();

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
  const handleLinkClick = (e) => {
    // Если это якорная ссылка на главной
    if (e.currentTarget.getAttribute("href")?.startsWith("/#")) {
      e.preventDefault(); // предотвращаем мгновенный переход

      const targetId = e.currentTarget.getAttribute("href").substring(2); // "#home" → "home"
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        // Закрываем меню с небольшой задержкой → пользователь видит анимацию
        setTimeout(() => {
          setMenuOpen(false);
          // Скроллим плавно
          targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 150); // 150 мс — комфортная задержка
      } else {
        setMenuOpen(false);
      }
    } else {
      // Для других ссылок (например tel:)
      setMenuOpen(false);
    }
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
            <Link to="/#home" onClick={handleLinkClick}>Startseite</Link>
          </li>
          <li>
            <Link to="/#services" onClick={handleLinkClick}>Leistungen</Link>
          </li>
          <li>
            <Link to="/#about" onClick={handleLinkClick}>Über uns</Link>
          </li>
          <li>
            <Link to="/#review" onClick={handleLinkClick}>Bewertungen</Link>
          </li>
          <li>
            <Link to="/#contacts" onClick={handleLinkClick}>Kontakte</Link>
          </li>

          {/* Мобильная кнопка звонка */}
          <li className="menu-kontakt mobile-only">
            <a href="tel:039916734060" onClick={handleLinkClick}>
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