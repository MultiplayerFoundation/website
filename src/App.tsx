import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./global.css";
import HomePage from "./pages/HomePage/HomePage";
import Header from "./components/Header/Header";
import CompanyPage from "./pages/CompanyPage/CompanyPage";
import FinanceSummaryPage from "./pages/FinancialSummaryPage/FinancialSummaryPage";

export default function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/finances" element={<FinanceSummaryPage />} />
        <Route path="/company" element={<CompanyPage />} />
      </Routes>
      <footer>
        <p>© 2025 The Multiplayer Foundation</p>
      </footer>
    </>
  );

}