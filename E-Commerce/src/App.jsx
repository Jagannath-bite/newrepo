import React from "react";
import "./app.css";
import LandingPage from "./pages/LandingPage";
import { Routes, Route } from "react-router-dom";
import Mobiles from "./components/Mobiles";
import Mobile from "./pages/Mobile";
import Computers from "./pages/Computers";
import Watches from "./components/Watches";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* <Route path="mobiles" element={<Mobiles />} /> */}
        <Route path="/mobiles" element={<Mobile />} />
        <Route path="/computers" element={<Computers />} />
        <Route path="/Watches" element={<Watches />} />
      </Routes>
    </div>
  );
};

export default App;
