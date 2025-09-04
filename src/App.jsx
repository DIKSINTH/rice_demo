import React from "react";
import Home from "./Home.jsx";
import Rice1 from "./Rice1.jsx";
import Rice2 from "./Rice2.jsx";
import Rice3 from "./Rice3.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rice1" element={<Rice1 />} />
        <Route path="/rice2" element={<Rice2 />} />
        <Route path="/rice3" element={<Rice3 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
