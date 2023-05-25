import React, { useState } from "react";
import Navbar from "./components/Navbar";
import ImageSwiper from "./components/ImageSwiper";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Footer from "./components/Footer";
const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className="app">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <ImageSwiper darkMode={darkMode} setDarkMode={setDarkMode} />
      <Section2 darkMode={darkMode} setDarkMode={setDarkMode} />
      <Section3 darkMode={darkMode} setDarkMode={setDarkMode} />
      <Section4 darkMode={darkMode} setDarkMode={setDarkMode} />
      <Footer darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
};

export default App;
