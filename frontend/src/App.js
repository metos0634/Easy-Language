import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EasyLanguageLanding from "./components/EasyLanguageLanding";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EasyLanguageLanding />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;