import React from "react";
import { Phone } from "lucide-react";
import "./Header.css"; 

export function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        {/* Logo */}
        <div className="logo-container">
          {/* <div className="logo-icon">
            <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="24" cy="24" r="20" />
              <path d="M16 28 Q24 16 32 28" />
              <circle cx="24" cy="14" r="3" fill="currentColor" />
              <path d="M24 17 L24 20 M22 19 L26 19" strokeWidth="1.5" />
              <path d="M18 32 L24 26 L30 32" />
            </svg>
          </div> */}
          <div className="logo-text-wrapper">
            <span className="logo-text">РИБАЛКА</span>
            <span className="logo-text">НА ОЗЕРІ</span>
          </div>
        </div>

        <div className="contacts-container">
          <div className="phone-block">
            <Phone className="phone-icon" />
            <div className="phone-info">
              <span className="phone-number">+380(94)344 34 43</span>
              <span className="phone-hours">ЩОДЕННО З 7:00 ДО 21:00</span>
            </div>
          </div>
          
          <button className="callback-btn">
            Передзвоніть мені
          </button>
        </div>
      </div>
    </header>
  );
}