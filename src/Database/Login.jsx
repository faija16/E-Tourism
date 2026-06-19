import React, { useContext, useState } from "react";
import { Authcontext } from "../Context/Authcontext";
import "./Login.css";
import { Navigate, useNavigate, useNavigation } from "react-router-dom";

export default function Login() {
  const { login } = useContext(Authcontext);
  const Navigate= useNavigate();

  const [form, setForm] = useState({
    phone: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const usersave = JSON.parse(localStorage.getItem("user"));

    if (
      usersave &&
      usersave.phone === form.phone &&
      usersave.password === form.password
    ) {
      login(usersave);
      alert("Login Successful");
      Navigate("/");
    } else {
      alert("Invalid credentials");
    }
  };

  const value = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>

        <input
          type="tel"
          name="phone"
          placeholder="Enter Phone Number"
          value={form.phone}
          onChange={value}
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={form.password}
          onChange={value}
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}