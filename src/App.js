import React from "react";
import "./App.css";
import GoogleMap from "./components/MapComponents/GoogleMap";
import { MainPage } from "./components/MainComponents/MainPage";

function App() {
  return (
    <div className="App">
      <MainPage />
      <GoogleMap />
    </div>
  );
}

export default App;
