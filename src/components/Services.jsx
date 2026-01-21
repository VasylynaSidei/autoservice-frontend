import React from "react";
import { useTranslation } from "react-i18next";
import "./services.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import motor from "../assets/images/motor.png";
import getriebe from "../assets/images/getriebe.png";
import bremsen from "../assets/images/bremsen.png";
import fahrwerk from "../assets/images/fahrwerk.png";
import klima from "../assets/images/klimaanlage.png";
import scheibe from "../assets/images/scheibe.png";
import reifen from "../assets/images/reifen.png";
import huau from "../assets/images/hu-au.jpg";
import inspection from "../assets/images/inspection.png";

function Services() {
  const { t } = useTranslation();

  AOS.init({
    easing: "linear",
    duration: 1500, // animation duration
    once: true, // whether animation should happen only once
  });
  const services = [
    {
      img: motor,
      title: "MOTORDIAGNOSE",
      desc: "Fehlersuche mit moderner Diagnosetechnik.",
    },
    {
      img: getriebe,
      title: "GETRIEBEÖLWECHSEL",
      desc: "Fachgerechter Getriebeölwechsel und Spülung.",
    },
    {
      img: bremsen,
      title: "BREMSENREPARATUR",
      desc: "Sicher bremsen! Wir prüfen, reparieren oder tauschen Ihre Bremsen fachgerecht aus.",
    },
    {
      img: fahrwerk,
      title: "FAHRWERKSREPARATUR",
      desc: "Für ein sicheres Fahrverhalten sorgen wir durch fachgerechte Reparatur und genaue Achsvermessung.",
    },
    {
      img: klima,
      title: "KLIMAANLAGENSERVICE",
      desc: "Wartung und Reparatur Ihre Klimaanlage.",
    },
    {
      img: scheibe,
      title: "FRONTSCHEIBENREPARATUR",
      desc: "Wir reparieren, schlänge oder ersetzen Ihre Frontscheibe fachgerecht Abrechnung mit allen Versicherungen.",
    },
    {
      img: reifen,
      title: "REIFENDIENST",
      desc: "Reifen Bestellung, Montage, Auswuchten und Einlagerung.",
    },
    {
      img: huau,
      title: "HU/AU-TÄGLICH",
      desc: "Tägliche Haupt- und Abgasuntersuchung direkt bei uns – schnell und unkompliziert.",
    },
    {
      img: inspection,
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
          <div className="card" key={index}>
            <img src={service.img} alt={service.title} />
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
