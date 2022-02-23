import React from "react";
import "./App.css";
import { Routes, Route } from "react-router";
import GoogleMap from "./components/MapComponents/GoogleMap";
import { MainPage } from "./components/MainComponents/MainPage";
import { GlossaryMain } from "./components/GlossaryComponents/GlossaryMain";
import { ChartPage } from "./components/ChartComponents/ChartPage";
import { routes } from "../src/routes/index";
import { WelcomeComponent } from "./components/MainComponents/WelcomeComponent";

function App() {
  return (
    <div className="App">
      <MainPage />
      <Routes>
        <Route exact path={routes.Welcome} element={<WelcomeComponent />} />
        <Route exact path={routes.Map} element={<GoogleMap />} />
        <Route exact path={routes.Glossary} element={<GlossaryMain />} />
        <Route exact path={routes.Charts} element={<ChartPage />} />
      </Routes>
    </div>
  );
}

export default App;
