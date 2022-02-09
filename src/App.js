import React from "react";
import "./App.css";
import { Routes, Route } from "react-router";
import GoogleMap from "./components/MapComponents/GoogleMap";
import { MainPage } from "./components/MainComponents/MainPage";
import { GlossaryMain } from "./components/GlossaryComponents/GlossaryMain";
import { ChartPage } from "./components/ChartComponents/ChartPage";
import { routes } from "../src/routes/index";

function App() {
  return (
    <div className="App">
      <MainPage />
      <Routes>
        <Route exact path={routes.map} element={<GoogleMap />} />
        <Route exact path={routes.glossary} element={<GlossaryMain />} />
        <Route exact path={routes.charts} element={<ChartPage />} />
      </Routes>
    </div>
  );
}

export default App;
