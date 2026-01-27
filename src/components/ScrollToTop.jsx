import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./scrollToTop.scss";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const { pathname, hash } = useLocation();
  const navigate = useNavigate(); // ← добавили для изменения URL

  // Скролл при смене маршрута или хэша (оставляем как было, но с небольшой задержкой)
  useEffect(() => {
    const timer = setTimeout(() => {
      if (hash) {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          const yOffset = -80; // отступ под фиксированную шапку — подбери под свой navbar
          const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 80); // небольшая задержка для надёжности

    return () => clearTimeout(timer);
  }, [pathname, hash]);

  // Показ кнопки при скролле вниз
  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Обработчик кнопки «Наверх»
  const scrollToTop = () => {
    // 1. Прокручиваем наверх плавно
    window.scrollTo({ top: 0, behavior: "smooth" });

    // 2. Убираем хэш из URL → возвращаем чистый "/"
    // Только если мы уже на главной странице и есть хэш
    if (pathname === "/" && hash) {
      navigate("/", { replace: true }); // replace: true → не добавляет новую запись в историю
    }
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className="scroll-to-top"
        aria-label="Наверх страницы"
      >
        ↑
      </button>
    )
  );
}