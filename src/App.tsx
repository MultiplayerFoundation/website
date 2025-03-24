import React from "react";
import { Routes, Route } from "react-router-dom";
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
              <a href="/motivation">Motivation</a>
            </li>
            <li>
              <a href="/company">Company</a>
            </li>
            <li>
              <a href="https://bsky.app/profile/multiplayerfoundation.org">Blog</a>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <footer>
        <ul>
          <li>
            <a href="mailto:hey@multiplayerfoundation.org">Email</a>
          </li>
        </ul>
        <p>© 2025 The Multiplayer Foundation</p>
      </footer>
    </>
  );

}