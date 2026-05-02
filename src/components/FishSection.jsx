import React from "react";
import { Phone } from "lucide-react";
import Cancer from "./cancer.jpg"; 
import Pisces from "./pisces.jpg";
import "./Fish-section.css";

export const FishSection = () => {
  return (
    <section className="fish-section">
      <div className="fish-container">
        
        {/* ЛЕВАЯ ЧАСТЬ: ТЕКСТ */}
        <div className="fish-text-content">
          {/* <h2 className="booking-title">Свежий улов</h2> */}
          <h1 className="fish-main-title">ЖИВА РИБА ТА РАКИ ДЛЯ ВАШОГО ВІДПОЧИНКУ</h1>
          <p className="fish-description">
            Ви можете придбати найсвіжішу рибу та раків прямо на місці.
            Ми дбаємо про якість продукції, щоб ваш відпочинок був максимально смачним.
          </p>
        </div>

        {/* ПРАВАЯ ЧАСТЬ: КАРТОЧКИ */}
        <div className="fish-cards-grid">
          
          {/* КАРТОЧКА 1: РЫБА */}
          <div className="fish-card">
            <div className="fish-card-top">
              <div className="fish-card-info">
                <h3 className="fish-card-title">ЖИВАЯ РЫБА</h3>
                <ul className="fish-list">
                  <li>КАРП</li>
                  <li>АМУР</li>
                  <li>КАРП</li>
                  <li>АМУР</li>
                </ul>
              </div>
              <img src={Pisces} alt="Живая рыба" className="fish-card-img" />
            </div>
            <div className="fish-card-bottom">
              <span className="fish-price">Карп - <b>от 500грн/кг</b></span>
              <button className="fish-action-btn">
                <Phone size={16}/> Уточнити наявність
              </button>
            </div>
          </div>

          {/* КАРТОЧКА 2: РАКИ */}
          <div className="fish-card">
            <div className="fish-card-top">
              <div className="fish-card-info">
                <h3 className="fish-card-title">ЖИВЫЕ РАКИ</h3>
                <ul className="fish-list">
                  <li>Свежие раки</li>
                  <li>Продажа на месте</li>
                  <li>Можно заказать заранее</li>
                </ul>
              </div>
              <img src={Cancer} alt="Живые раки" className="fish-card-img" />
            </div>
            <div className="fish-card-bottom">
              <span className="fish-price">Раки - <b>по наличию</b></span>
              <button className="fish-action-btn">
                <Phone size={16} /> Уточнити наявність
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};