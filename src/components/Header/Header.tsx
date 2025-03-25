import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import logo from "./The Multiplayer Foundation logo.png"
import styles from "./Header.module.css"

export default function Header() {

  return (
    <header id={styles.header}>
      <Link to="/">
        <img src={logo} />
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/motivation">Motivation</Link>
          </li>
          <li>
            <Link to="/company">Company</Link>
          </li>
          <li>
            <Link to="/finances">Finances</Link>
          </li>
          <li>
            <a href="/one-pager.pdf">One-pager</a>
          </li>
          <li>
            <a href="mailto:hey@multiplayerfoundation.org">Email</a>
          </li>
        </ul>
      </nav>
    </header>
  )

}