import React from "react";
import "./maps.css";
import lakeImage from "./maps.jpg"; 

export const LakeMap = ({ spots, onSpotClick, selectedSpotId }) => {
  const points = [
    { id: "1", top: "17%", left: "25%" },
    { id: "2", top: "20%", left: "36%" },
    { id: "3", top: "26%", left: "44%" },
    { id: "4", top: "29%", left: "54%" },
    { id: "5", top: "37%", left: "64%" },
    { id: "6", top: "41%", left: "74%" },
    { id: "7", top: "92%", left: "60%" },
    { id: "8", top: "93%", left: "69%" },
  ];

  return (
    <div className="lake-map-container">
      <div className="map-wrapper">
        <img src={lakeImage} alt="Карта озера" className="map-image" />
        {points.map((point) => {
          // Ищем инфо о секторе. Добавляем опциональную цепочку ?., чтобы не было ошибок
          const spotInfo = spots?.find(s => s.id === `Сектор ${point.id}`);
          const isOccupied = spotInfo?.status === "occupied";
          const isSelected = selectedSpotId === spotInfo?.id;

          return (
            <button
              key={point.id}
              type="button"
              className={`spot-node ${isOccupied ? "occupied" : "available"} ${isSelected ? "selected" : ""}`}
              style={{ top: point.top, left: point.left }}
              onClick={() => !isOccupied && onSpotClick(spotInfo)}
            >
              {point.id}
            </button>
          );
        })}
      </div>
    </div>
  );
};