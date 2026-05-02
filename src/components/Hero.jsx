import React from "react";
import "./Hero.css";
import photo from "./baner.jpg"; // Импортируем твоё фото

export function Hero() {
  return (
    <section 
      className="hero" 
      style={{ backgroundImage: `url(${photo})` }}
    >
      {/*....*/}
      <div className="hero-overlay"></div>
      
      <div className="hero-inner">
        <h1 className="hero-title">
          ГАРНА РИБАЛКА<br />
          І ТИХИЙ ВІДПОЧИНОК
        </h1>
        <p className="hero-subtitle">
          Зручні місця на березі озера<br />
          для рибалки та відпочинку на природі

        </p>
      </div>
    </section>
  );
}