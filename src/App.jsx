import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import CookieBanner from "./components/CookieBanner";

import Home from "./components/Home";
import Impressum from "./components/Impressum";
import Datenschutz from "./components/Datenschutz";
import MobileContactMenu from "./components/MobileContactMenu";

function App() {
  const location = useLocation();

  // Разрешённые пути (главная + юридические страницы)
  const allowedPaths = ["/", "/impressum", "/datenschutz"];

  // Если текущий путь НЕ разрешён → редиректим на главную
  if (!allowedPaths.includes(location.pathname)) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <ScrollToTop />
      <CookieBanner />
      <MobileContactMenu />

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
        {/* Если в будущем добавишь ещё страницы — добавь их сюда и в allowedPaths */}
      </Routes>

      <Footer />
    </>
  );
}

export default App;