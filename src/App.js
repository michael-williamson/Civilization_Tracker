import React from "react";
import "./App.css";
import { Routes, Route } from "react-router";
import { MainPage } from "./components/MainComponents/MainPage";
import { GlossaryMain } from "./components/GlossaryComponents/GlossaryMain";
import { ChartPage } from "./components/ChartComponents/ChartPage";
import { routes } from "../src/routes/index";
import { WelcomeComponent } from "./components/MainComponents/WelcomeComponent";
import { CivilizationPage } from "./components/CivilizationComponents/CivilizationPage";
import { MainMapComponent } from "./components/MapComponents/MainMapComponent";

function App() {
  return (
    <div className="App">
      <MainPage />
      <Routes>
        <Route exact path={routes.Welcome} element={<WelcomeComponent />} />
        <Route exact path={routes.Map} element={<MainMapComponent />} />
        <Route
          exact
          path={routes.Civilizations}
          element={<CivilizationPage />}
        />

        <Route exact path={routes.Charts} element={<ChartPage />} />
        <Route exact path={routes.Glossary} element={<GlossaryMain />} />
      </Routes>
    </div>
  );
}

export default App;
