import React, { useContext, useState } from "react";
import "./Signup.css";
import { Authcontext } from "../Context/Authcontext";

export default function Signup() {
  const {signup}=useContext(Authcontext);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
     //localStorage.setItem("user", JSON.stringify(form));
     signup(form);
  alert("Signup Successful");
   
    console.log("Signup successfully done",form);
  };

  const value = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Sign Up Here</h2>

        <input
          type="text"
          placeholder="Enter your name"
          name="name"
          value={form.name}
          onChange={value}
        />

        <input
          type="tel"
          placeholder="Enter your number"
          name="phone"
          value={form.phone}
          onChange={value}
        />

        <input
          type="password"
          placeholder="Enter your password"
          name="password"
          value={form.password}
          onChange={value}
        />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}