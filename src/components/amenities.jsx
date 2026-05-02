import React, { forwardRef } from "react";
import { Sun, Umbrella, Trees, Car } from "lucide-react";
import "./Amenities.css";
import photo from "./Onas.jpg"; 

const amenities = [
  {
    icon: Sun,
    title: "Чисте озеро і природа",
  },
  {
    icon: Umbrella,
    title: "Зручні місця на березі",
  },
  {
    icon: Trees,
    title: "Тиша і відпочинок для душі",
  },
  {
    icon: Car,
    title: "Зручний під’їзд і парковка",
  },
];

export const Amenities = forwardRef((props, ref) => {
  return (
    <section ref={ref} className="about-section">
      <div className="about-content">
        
        {/* ЛЕВАЯ ЧАСТЬ: Текст и иконки */}
        <div className="about-text-block">
          <div className="about-header">
            <h2 className="about-title">ПРО НАС</h2>
            <p className="about-description">
              Наше озеро це чиста вода, свіже повітря і все для
                комфортної риболовлі та відпочинку на природі.
            </p>
          </div>

          <div className="about-icons-list">
            {amenities.map((item, index) => (
              <div key={index} className="about-icon-item">
                <div className="icon-circle">
                  <item.icon className="icon-svg" strokeWidth={1.2} />
                </div>
                <span className="icon-title">{item.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ПРАВАЯ ЧАСТЬ: Фотография (сдвинутая вверх) */}
        <div className="about-image-block">
          <img src={photo} alt="Наше озеро" className="about-img" />
          <div className="image-overlay-gradient"></div>
        </div>

      </div>
    </section>
  );
});

Amenities.displayName = "Amenities";