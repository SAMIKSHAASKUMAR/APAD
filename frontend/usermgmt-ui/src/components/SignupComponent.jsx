// src/components/SignupComponent.jsx
import { useState } from "react";
import { authPost } from "../utils/apiHelpers";

export default function SignupComponent() {
  const [userid, setUserid] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { ok, data } = await authPost("signup", {
      username: userid,
      password: password,
    });
    setMsg(data.message || (ok ? "Signup successful" : "Signup failed"));
  };

  return (
    <div className="auth-card">
      <h2 className="auth-title">Create User</h2>
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
            Sign Up
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
