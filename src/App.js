import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import APIGo from "./components/APIGo";

import "./App.css";

import Examples from "./components/examples";
import Nasa from "./components/Nasa";
import NavBar from "./components/NavBar";

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <NavBar />
          <Route component={APIGo} path="/APIGo" exact />
          <Route component={APIGo} path="/" exact />
          <Route component={Examples} path="/Examples" />
          <Route component={Nasa} path="/Nasa" />

      </div>
    </BrowserRouter>
  );
}
