import React, { useEffect, useState } from "react";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please fill in all fields");
    } else {
      alert(`Logging in as ${email}`);
    }
  };

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

  return (
    <div className="login-bg">
      <div className="sparkles"></div>
      <h1 className="login-welcome">WELCOME</h1>
      <form className="login-card" onSubmit={handleLogin}>
        <h2>Log In</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="login-btn" type="submit">LOGIN</button>
      </form>
    </div>
  );
}

export default Login;
