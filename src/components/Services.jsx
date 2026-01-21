import React from "react";
import { useTranslation } from "react-i18next";
import "./services.scss";
import AOS from 'aos';
import 'aos/dist/aos.css'
function Services() {
  const { t } = useTranslation();

  AOS.init({
    easing:"linear",
    duration: 1500, // animation duration
    once: true     // whether animation should happen only once
  });
  const services = [
    {
      img: "motor.png",
      title: "MOTORDIAGNOSE",
      desc: "Fehlersuche mit moderner Diagnosetechnik.",
    },
    {
      img: "getriebe.png",
      title: "GETRIEBEÖLWECHSEL",
      desc: "Fachgerechter Getriebeölwechsel und Spülung.",
    },
    {
      img: "bremsen.png",
      title: "BREMSENREPARATUR",
      desc: "Sicher bremsen! Wir prüfen, reparieren oder tauschen Ihre Bremsen fachgerecht aus.",
    },
    {
      img: "fahrwerk.png",
      title: "FAHRWERKSREPARATUR",
      desc: "Für ein sicheres Fahrverhalten sorgen wir durch fachgerechte Reparatur und genaue Achsvermessung.",
    },
    {
      img: "klimaanlage.png",
      title: "KLIMAANLAGENSERVICE",
      desc: "Wartung und Reparatur Ihre Klimaanlage.",
    },
    {
      img: "scheibe.png",
      title: "FRONTSCHEIBENREPARATUR",
      desc: "Wir reparieren, schlänge oder ersetzen Ihre Frontscheibe fachgerecht Abrechnung mit allen Versicherungen.",
    },
    {
      img: "reifen.png",
      title: "REIFENDIENST",
      desc: "Reifen Bestellung, Montage, Auswuchten und Einlagerung.",
    },
    {
      img: "hu-au.jpg",
      title: "HU/AU-TÄGLICH",
      desc: "Tägliche Haupt- und Abgasuntersuchung direkt bei uns – schnell und unkompliziert.",
    },
    {
      img: "inspection.png",
      title: "INSPEKTION UND WARTUNG ",
      desc: "Fachgerechte Wartung mit freigegebenem Markenöl. Inspektion nach Herstellervorgaben, Eintragung in Digitales Serviceheft.",
    },
  ];
  

  return (
    <section className="services" id="services">
      <h1>{t("services.title", "LEISTUNGEN")}</h1>
      <p className="subtitle">
        {t(
          "services.subtitle",
          "In unserer Werkstatt bieten wir qualitativ hochwertige Reparaturen in folgenden Bereichen an:"
        )}
      </p>

      <div className="grid">
        {services.map((service, index) => (
          <div className="card"  key={index}>
            <img
              src={(`src/assets/images/${service.img}`)}
              alt={service.title}
            />
            <div className="card-content">
              <h2>{service.title}</h2>
              <p>{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
