import React from "react";
import "./aboutCopy.scss";
import { FaRegCheckSquare  } from "react-icons/fa";
import WhyUsStats from "./WhyUsStats";
import OurTeam from "./OurTeam";
import GoogleReviewsWidget from "./GoogleReviewsWidget.jsx"
function About() {
  return (
    <>
      <section className="about-us" id="about">
        {" "}
        <h2>Über uns</h2>
        <div className="about-content">
          <p className="about-intro">
            G&P Meisterwerkstatt ist Ihre zuverlässige Autowerkstatt in Waren
            (Müritz). Seit über 13 Jahren stehen wir für zuverlässigen Service, faire Beratung und echte Auto-Leidenschaft. Wir bieten Wartung und Reparatur für alle Fahrzeugmarken – schnell, kompetent und persönlich.
            <h4 className="werte-heading">Unsere Werte:</h4>
            <ul className="ul-werte">
              <li > <FaRegCheckSquare className="werte-icon" /> Qualität vom Meisterbetrieb</li>
              <li > <FaRegCheckSquare className="werte-icon"/> Individuelle Beratung</li>
              <li > <FaRegCheckSquare className="werte-icon"/> Sorgfältige Arbeit mit Herz</li>
              <li > <FaRegCheckSquare className="werte-icon"/> Transparente Preise</li>
            </ul>
          </p>

{/* <p className="cont-img-about"><img src="src/assets/images/sergey.JPG" alt="Unser Team" /></p>
<p className="cont-img-about"><img className="team-img"  src="src/assets/images/dima.jpeg" alt="Unser Team"/></p> */}

<div className="about-right">
              <img src="src/assets/images/car-service.jpg" alt="Unser Team" />
              <p className="about-note">Ihr Fahrzeug in besten Händen!</p>
            </div>
         
        </div>
        <OurTeam />
        <WhyUsStats />
        <GoogleReviewsWidget />
      </section>
    </>
  );
}

export default About;
