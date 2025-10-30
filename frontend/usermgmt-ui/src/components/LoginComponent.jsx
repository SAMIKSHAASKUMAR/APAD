// src/components/LoginComponent.jsx
import { useState } from "react";
import { authPost } from "../utils/apiHelpers";

export default function LoginComponent() {
  const [userid, setUserid] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { ok, data } = await authPost("login", {
      username: userid,
      password: password,
    });
    setMsg(data.message || (ok ? "Login successful" : "Login failed"));
  };

  return (
    <div className="auth-card">
      <h2 className="auth-title">Welcome to User Sign-In Page</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <label>User ID</label>
          <input
            value={userid}
            onChange={(e) => setUserid(e.target.value)}
            placeholder="Enter user id"
          />
        </div>
        <div className="form-row">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
          />
        </div>
        <div className="btn-row">
          <button type="submit" className="btn-primary">
            Login
          </button>
          <button
            type="button"
            className="btn-secondary"
            onClick={() => {
              setUserid("");
              setPassword("");
              setMsg("");
            }}
          >
            Cancel
          </button>
        </div>
      </form>
      {msg && <p className="message">{msg}</p>}
    </div>
  );
}
