import React, { useState, useEffect, forwardRef } from "react";
import { ChevronLeft, ChevronRight, User, Phone, Sun, Moon, X } from "lucide-react";
import { LakeMap } from "./maps";
import "./booking-section.css";

const DAYS = ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"];
const MONTHS = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

export const BookingSection = forwardRef((props, ref) => {
  const [selectedSpot, setSelectedSpot] = useState(null);
  const [selectedDates, setSelectedDates] = useState([28]); 
  const [bookingType, setBookingType] = useState("day"); 
  const [currentMonth] = useState(3); 
  const [currentYear] = useState(2026);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [showModal, setShowModal] = useState(false);

  // Сохранение в localStorage (Логика из прошлого шага)
  const [allBookings, setAllBookings] = useState(() => {
    const saved = localStorage.getItem("fishing_reservations");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("fishing_reservations", JSON.stringify(allBookings));
  }, [allBookings]);

  const PRICE_DAY = 1500;
  const PRICE_FULL = 2500;

  // Дата для отображения карты (смотрим на последнюю выбранную дату)
  const viewDate = selectedDates[selectedDates.length - 1] || 28;

  // Формируем статус мест для карты
  const spotsForMap = [1, 2, 3, 4, 5, 6, 7, 8].map(num => {
    const isOccupied = allBookings.some(b => b.date === viewDate && b.spotId === num.toString());
    return {
      id: `Сектор ${num}`,
      status: isOccupied ? "occupied" : "available"
    };
  });

  const handleDateClick = (day) => {
    if (bookingType === "day") {
      // Если дневная — можно выбрать только один день
      setSelectedDates([day]);
    } else {
      // Если сутки — можно выбирать несколько
      if (selectedDates.includes(day)) {
        setSelectedDates(selectedDates.filter(d => d !== day));
      } else {
        setSelectedDates([...selectedDates, day]);
      }
    }
  };

  const calculateTotal = () => {
    const price = bookingType === 'day' ? PRICE_DAY : PRICE_FULL;
    return selectedDates.length * price;
  };

  const confirmBooking = () => {
    const newEntries = selectedDates.map(date => ({
      date,
      spotId: selectedSpot.replace('Сектор ', ''),
      type: bookingType,
      name,
      phone
    }));

    setAllBookings([...allBookings, ...newEntries]);
    setShowModal(false);
    setSelectedSpot(null);
    alert('Бронь успешно сохранена!');
  };

  const renderCalendar = () => {
    const days = [];
    for (let i = 0; i < 2; i++) days.push(<div key={`empty-${i}`} className="calendar-day empty" />);
    for (let day = 1; day <= 30; day++) {
      const isSelected = selectedDates.includes(day);
      days.push(
        <button 
          key={day} 
          onClick={() => handleDateClick(day)} 
          className={`calendar-day ${isSelected ? 'selected' : ''}`}
        >
          {day}
        </button>
      );
    }
    return days;
  };

  return (
    <section ref={ref} className="booking-section">
      <div className="booking-card">
        
        <div className="grid-top">
          <div className="column">
            <h3 className="booking-title">1. ВЫБЕРИТЕ МЕСТО (на {viewDate} апр.)</h3>
            <div className="map-container-styled">
              <LakeMap 
                spots={spotsForMap} 
                onSpotClick={(spot) => setSelectedSpot(spot.id)} 
                selectedSpotId={selectedSpot} 
              />
            </div>
            <div className="map-legend">
               <div className="legend-item"><span className="legend-dot available"></span> <span>Свободно</span></div>
               <div className="legend-item"><span className="legend-dot occupied"></span> <span>Занято</span></div>
            </div>
          </div>

          <div className="column">
            <h3 className="booking-title">2. ДАТА ВИЗИТА</h3>
            <div className="calendar-wrapper">
              <div className="calendar-nav">
                <button className="nav-btn"><ChevronLeft size={20}/></button>
                <span className="current-month-year">{MONTHS[currentMonth]} {currentYear}</span>
                <button className="nav-btn"><ChevronRight size={20}/></button>
              </div>
              <div className="calendar-grid">
                {DAYS.map(d => <div key={d} className={`day-header ${d === 'СБ' || d === 'ВС' ? 'weekend' : ''}`}>{d}</div>)}
                {renderCalendar()}
              </div>
            </div>

            <h3 className="booking-title" style={{marginTop: '2rem'}}>3. ВЫБЕРИТЕ ТИП</h3>
            <div className="type-selector-mini">
              <button 
                className={`type-btn ${bookingType === 'day' ? 'active' : ''}`}
                onClick={() => {
                  setBookingType('day');
                  if (selectedDates.length > 1) setSelectedDates([selectedDates[0]]); // сбрасываем до одного дня
                }}
              >
                <Sun size={16} /> Дневная
              </button>
              <button 
                className={`type-btn ${bookingType === 'full' ? 'active' : ''}`}
                onClick={() => setBookingType('full')}
              >
                <Moon size={16} /> Суточная
              </button>
            </div>
            
            <div className="selection-info-inline">
              <div className="info-badge">Место: <b>{selectedSpot ? selectedSpot.replace('Сектор ', '') : '—'}</b></div>
              <div className="info-badge">Даты: <b>{selectedDates.sort((a,b)=>a-b).join(', ')}</b></div>
            </div>
          </div>
        </div>

        {/* НИЖНИЙ РЯД: ВЕРНУЛ ТВОЙ ДИЗАЙН СТОИМОСТИ */}
        <div className="grid-bottom">
          <div className="column">
            <h3 className="booking-title">4. СТОИМОСТЬ РЫБАЛКИ</h3>
            <table className="price-table">
              <thead><tr><th>Тип рыбалки</th><th>Цена</th></tr></thead>
              <tbody>
                <tr className={bookingType === 'day' ? 'row-highlight' : ''}>
                  <td>Дневная <small>(06:00 - 20:00)</small></td>
                  <td className="price-val">{PRICE_DAY} ₽</td>
                </tr>
                <tr className={bookingType === 'full' ? 'row-highlight' : ''}>
                  <td>Сутки <small>(12:00 - 12:00)</small></td>
                  <td className="price-val">{PRICE_FULL} ₽</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="column">
            <h3 className="booking-title">5. ОСТАВЬТЕ ЗАЯВКУ</h3>
            <div className="booking-form">
              <div className="input-row">
                <div className="input-group">
                  <User className="input-icon" size={18} />
                  <input type="text" placeholder="Имя" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="input-group">
                  <Phone className="input-icon" size={18} />
                  <input type="tel" placeholder="Телефон" value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>
              </div>
              <button className="submit-btn" onClick={() => setShowModal(true)}>ИТОГ</button>
            </div>
          </div>
        </div>
      </div>

      {/* MODAL */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="modal-close" onClick={() => setShowModal(false)}><X size={24} /></button>
            <h2 className="modal-title">Подтверждение</h2>
            <div className="modal-details">
              <div className="detail-item"><span>Имя:</span> <strong>{name || '—'}</strong></div>
              <div className="detail-item"><span>Телефон:</span> <strong>{phone || '—'}</strong></div>
              <div className="detail-item"><span>Место:</span> <strong>{selectedSpot || '—'}</strong></div>
              <div className="detail-item"><span>Даты:</span> <strong>{selectedDates.sort((a,b)=>a-b).join(', ')} {MONTHS[currentMonth]}</strong></div>
              <div className="detail-item"><span>Тип:</span> <strong>{bookingType === 'day' ? 'Дневная' : 'Суточная'}</strong></div>
              <div className="modal-divider"></div>
              <div className="detail-item total"><span>К оплате:</span> <strong>{calculateTotal()} ₽</strong></div>
            </div>
            <button className="btn-confirm-final" onClick={confirmBooking}>
              ЗАБРОНИРОВАТЬ МЕСТО
            </button>
          </div>
        </div>
      )}
    </section>
  );
});