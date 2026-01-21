import React, { useEffect } from "react";
import "./WhyUsStats.scss"; // Подключаем CSS
//import "./GoogleReviewsWidget.scss";
//
function GoogleReviewsWidget() {
  useEffect(() => {
    // Dynamically load Elfsight script
    const script = document.createElement("script");
    script.src = "https://apps.elfsight.com/p/platform.js";
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section className="reviews-section" id="review">
      <h2 className="stat-label">Was unsere Kunden sagen</h2>
      {/* Paste your Elfsight widget ID here */}
      <div className="elfsight-app-64f56d75-3598-4961-a4cc-2f55ea8ce09f"></div>
    </section>
  );
}

export default GoogleReviewsWidget;
