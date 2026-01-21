import React, { useEffect, useRef, useState } from "react";
import "./WhyUsStats.scss"; // Подключаем CSS

const statsData = [
  { label: "Zufriedene Kunden", value: 3924 },
  { label: "Reparierte Fahrzeuge", value: 23760 },
  { label: "Jahren G&P Meisterwerkstatt", value: 13 },
 
];

const StatBox = ({ label, value, trigger,index }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;

    const duration = 1500; // 1.5 секунды
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    let frame = 0;

    const interval = setInterval(() => {
      frame++;
      current += increment;
      if (frame >= steps) {
        setCount(Math.round(value));
        clearInterval(interval);
      } else {
        setCount(Math.round(current));
      }
    }, duration / steps);

    return () => clearInterval(interval);
  }, [trigger, value]);

  const borderClass = index < 2 ? "with-border" : "";
  return (
    <div className={`stat-box ${borderClass}`}>
      <div className="stat-number">{count}</div>
      <p className="stat-label">{label}</p>
    </div>
  );
};

const WhyUsStats = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="stats-section">
      <div className="stats-container">
        <h2 className="stats-title">Warum wir?</h2>
        <div className="stats-grid">
        {statsData.map((stat, idx) => (
  <StatBox
    key={idx}
    index={idx}
    label={stat.label}
    value={stat.value}
    trigger={isVisible}
  />
))}

        </div>
      </div>
    </section>
  );
};

export default WhyUsStats;
