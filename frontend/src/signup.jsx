// Signup.jsx
import React, { useEffect, useState } from "react";
import "./Signup.css";

function Signup() {
  const [form, setForm] = useState({
    email: "",
    name: "",
    nickname: "",
    dob: "",
    gender: "",
    region: ""
  });

  const [file, setFile] = useState(null);

  useEffect(() => {
    const container = document.querySelector(".sparkles");
    for (let i = 0; i < 50; i++) {
      const s = document.createElement("div");
      s.className = "sparkle";
      s.style.top = `${Math.random() * 100}%`;
      s.style.left = `${Math.random() * 100}%`;
      s.style.animationDuration = `${2 + Math.random() * 2}s`;
      s.style.animationDelay = `${Math.random() * 5}s`;
      container.appendChild(s);
    }
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const missingField = Object.entries(form).find(([k, v]) => !v);
    if (missingField) {
      alert(`Please fill in: ${missingField[0]}`);
    } else {
      alert(`Account created for ${form.name}`);
    }
  };

  return (
    <div className="signup-bg">
      <div className="sparkles"></div>
      <h1 className="signup-welcome">WELCOME</h1>
      <form className="signup-card" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={form.name}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Nick Name"
          name="nickname"
          value={form.nickname}
          onChange={handleChange}
        />
        <label className="upload">
          <input type="file" onChange={handleFileChange} />
          <span>{file ? file.name : "📷 Profile Pic"}</span>
        </label>
        <input
          type="date"
          name="dob"
          value={form.dob}
          onChange={handleChange}
        />
        <select name="gender" value={form.gender} onChange={handleChange}>
          <option value="">Select Gender</option>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>
        <input
          type="text"
          placeholder="Region/Country"
          name="region"
          value={form.region}
          onChange={handleChange}
        />
        <button className="signup-btn" type="submit">SIGN UP</button>
      </form>
    </div>
  );
}

export default Signup;
