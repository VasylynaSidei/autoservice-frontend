import React from "react";
import "./about.scss";

function About() {
  return (
    <>
      <section className="about-us" id="about">
        {" "}
        <h2>Über uns</h2>
        <div className="about-content">
          <p className="about-intro">
            G&P Meisterwerkstatt ist Ihre zuverlässige Autowerkstatt in Waren
            (Müritz). Seit über 13 Jahren kümmern wir uns mit Leidenschaft um
            Ihr Fahrzeug. Wir lieben Autos und bieten Reparatur- und
            Wartungsdienste für alle Automarken an. Unsere Spezialisten
            behandeln jedes Fahrzeug mit Sorgfalt und Leidenschaft.
          </p>

          <div className="about-columns">
            {/** <div className="about-left">
        <h3>Unsere Werte</h3>
        <ul>
          <li>Transparenz</li>
          <li>Verlässlichkeit</li>
          <li>Höchste Qualität</li>
        </ul>
       
      </div>*/}
            <div className="about-right">
              <img src="src/assets/images/car-service.jpg" alt="Unser Team" />
              <p className="about-note">Ihr Fahrzeug in besten Händen!</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
