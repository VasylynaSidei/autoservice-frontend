import React from "react";
import  { useEffect, useRef, useState } from "react";
import "./ourTeam.scss";

const teamMembers = [
  {
    name: "Rocco Grambeck",
    role: "Geschäftsfürer / KFZ-Meister",
    photo: "src/assets/images/roco.jpg",
  },
  {
    name: "Sergej Pritcin",
    role: "Geschäftsfürer / KFZ-Mechaniker",
    photo: "src/assets/images/IMG_4292.jpg", 
  },
  {
    name: "Helena Pritcin",
    role: "Bürokauffrau",
    photo: "src/assets/images/IMG_6039.jpg",
  },
  {
    name: "Vorname Nachame",
    role: "Auszubildender",
    photo: "src/assets/images/IMG_3020.JPG",
  },
  {
    name: "Ronny Seifreid",
    role: "KFZ-Mechaniker",
    photo: "src/assets/images/IMG_6157.jpg",

  },
];

export default function OurTeam() {
  const sectionRef = useRef(null);
const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);
  return (
    <section className="team-section" ref={sectionRef}>
      <div className="team-container">
        <h2 className="team-title">Unser Team</h2>
        <p className="team-subtitle">
          Meisterbetrieb. Persönlich. Präzise. Lernen Sie die Menschen hinter G&amp;P kennen.
        </p>

        <div className={`team-grid ${visible ? "visible" : ""}`}>
          {teamMembers.map((member, i) => (
            <div key={i} className="team-card">
              <div className="team-card__media">
                <img src={member.photo} alt={member.name} />
              </div>
              <div className="team-card__info">
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
