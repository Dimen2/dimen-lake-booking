import { useRef } from "react";
import { Header } from "./components/header"; // проверь, чтобы имя файла совпадало (маленькая или большая буква)
import { Hero } from "./components/hero";
import { BookingSection } from "./components/booking-section"; // Закомментируй это
import { About } from "./components/About";
// import { Features } from "./components/Features";
import { Amenities } from "./components/Amenities";
// import { Contacts } from "./components/Contacts";
// import { spotsData } from "./data/spotsData"; 
import { FishSection } from "./components/FishSection";
import "./App.css";
import { spotsData } from "./data/spotsData";

function App() {
  const bookingRef = useRef(null);

  return (
    <div className="app">
      <Header />
      <Hero />
      <BookingSection ref={bookingRef} spots={spotsData} />
      <About />
      {/* <Features /> */}
      <FishSection/>
      <Amenities />

      {/* <Contacts /> */}
    </div>
  );
}

export default App;