import React from "react";
import Home from "./components/Home.jsx";
import Rice1 from "./components/Rice1.jsx";
import Rice2 from "./components/Rice2.jsx";
import Rice3 from "./components/Rice3.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductPage from "./components/pages/ProductPage.jsx";
import AboutPage from "./components/pages/AboutPage.jsx";
import GalleryPage from "./components/pages/GalleryPage.jsx";
import ContactForm from "./components/pages/ContactForm.jsx";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rice1" element={<Rice1 />} />
        <Route path="/rice2" element={<Rice2 />} />
        <Route path="/rice3" element={<Rice3 />} />
        <Route path="/productspage" element={<ProductPage />} />
        <Route path="/aboutpage" element={<AboutPage />} />
        <Route path="/gallerypage" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
