import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Authcontext } from "../Context/Authcontext";
import "./Navbar.css";

export default function Navbar() {
  const { user, logout } = useContext(Authcontext);
  const [menu, setMenu] = useState(false);

  return (
    <nav className="navbar">

      <div className="logo">
        🌍 Travel
      </div>

      <div className="hamburger" onClick={() => setMenu(!menu)}>
        ☰
      </div>

      <div className={`nav-links ${menu ? "active" : ""}`}>
        <Link to="/" onClick={() => setMenu(false)}>Home</Link>

        {!user ? (
          <>
            <Link to="/login" onClick={() => setMenu(false)}>Login</Link>
            <Link to="/signup" onClick={() => setMenu(false)}>Sign Up</Link>
          </>
        ) : (
          <>
            <span>Hi {user.name}</span>
            <button onClick={logout}>Logout</button>
          </>
        )}
      </div>

    </nav>
  );
}