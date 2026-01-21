import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import CookieBanner from "./components/CookieBanner";

import Home from "./components/Home";
import Impressum from "./components/Impressum";
import Datenschutz from "./components/Datenschutz";

function App() {
  return (
   <>
      <ScrollToTop />
      <CookieBanner />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
