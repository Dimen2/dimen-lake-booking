import React from "react";
import photo1 from "./grill.jpg"; 
import photo2 from "./gazebo.jpg"; 
import photo3 from "./fish.jpg"; 
import "./About.css"; 

const FEATURE_CARDS = [
  {
    title: "МАНГАЛИ ТА ВСЕ ДЛЯ ВІДПОЧИНКУ",
    description: "Мангал, решітки, вугілля та дрова - усе, що потрібно для смачного відпочинку на природі.",
    image: photo1
  },
  {
    title: "ТИХИЙ ВІДПОЧИНОК І КОМФОРТ",
    description: "Альтанки, будиночки та зручні місця для відпочинку з родиною і друзями.",
    image: photo2
  },
  {
    title: "ВІДМІННА РИБАЛКА",
    description: "Регулярне зариблення та гарна риболовля протягом усього року.",
    image: photo3
  }
];

export function About() {
  return (
    <section id="about" className="features-section">
      <div className="features-container">
        {FEATURE_CARDS.map((card, index) => (
          <div key={index} className="feature-card">
            <div className="feature-card-bg">
              <img src={card.image} alt={card.title} />
              <div className="feature-overlay"></div>
            </div>
            
            <div className="feature-card-content">
              <div className="feature-text-top">
                <h3 className="feature-card-title">{card.title}</h3>
                <p className="feature-card-desc">{card.description}</p>
              </div>
              <button className="feature-more-btn">Детальніше</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}