import React from "react";
import { BrowserRouter, Routes as BrowserRoute, Route } from "react-router-dom";
import Countdown from "../pages/countdown";
import Home from "../pages/home";

export function Routes() {
  return (
    <BrowserRouter>
      <BrowserRoute>
        <Route path="/" element={<Home />} />
        <Route path="/countdown" element={<Countdown />} />
      </BrowserRoute>
    </BrowserRouter>
  );
}
