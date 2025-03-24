import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./global.css";
import HomePage from "./pages/HomePage/HomePage";

export default function App() {

  return (
    <>
      <header>
        <b>The Multiplayer Foundation</b>
        <nav>
          <ul>
            <li>
              <Link to="/motivation">Motivation</Link>
            </li>
            <li>
              <Link to="/company">Company</Link>
            </li>
            <li>
              <a href="mailto:hey@multiplayerfoundation.org">Email</a>
            </li>
            <li>
              <a href="https://bsky.app/profile/multiplayerfoundation.org" target="_blank">Blog</a>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/company" element={<HomePage />} />
        <Route path="/motivation" element={<HomePage />} />
      </Routes>
      <footer>
        <p>© 2025 The Multiplayer Foundation</p>
      </footer>
    </>
  );

}