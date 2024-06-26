// external
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// internal
import Home from "./v2/Home";

const routes = (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </Router>
);

export default routes;
