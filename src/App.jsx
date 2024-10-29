import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./assets/components/Navbar/Navbar";
import MovieList from "./assets/components/MovieList/MovieList";

import "./App.css";

function App() {
  const [dayMode, setDayMode] = useState(false);

  return (
    
    <div className={dayMode ? "day-mode app" : "app"}>
      <Navbar dayMode={dayMode} setDayMode={setDayMode} />
      <Routes>
        <Route path="/popular" element={ <MovieList title="Popular" category="popular" />} />
        <Route path="/upcoming" element={ <MovieList title="Up coming" category="upcoming" />} />
        <Route path="/top_rated" element={ <MovieList title="Top rated" category="top_rated" />} />
      </Routes>
    </div>
  );
}

export default App;
