import { useState } from "react";
import { userPost } from "../utils/apiHelpers";

export default function LoginComponent() {
  const [userid, setUserid] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [welcome, setWelcome] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!userid.trim()) e.userid = "User ID is required";
    if (!password.trim()) e.password = "Password is required";
    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg("");
    setWelcome("");
    const eobj = validate();
    setErrors(eobj);
    if (Object.keys(eobj).length > 0) return;

    const { ok, data } = await userPost("login", {
      username: userid,
      password: password,
    });

    if (!ok) {
      setMsg(data.message || "Login failed");
      return;
    }

    setWelcome(data.message || `Welcome, ${userid}!`);
  };

  const handleCancel = () => {
    setUserid("");
    setPassword("");
    setMsg("");
    setWelcome("");
    setErrors({});
  };

  return (
    <div className="card">
      <h2 className="card-title">Welcome to User Sign-In Page</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <label>User ID</label>
          <input
            value={userid}
            onChange={(e) => setUserid(e.target.value)}
            
          />
          {errors.userid && <div className="field-error">{errors.userid}</div>}
        </div>
        <div className="form-row">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <div className="field-error">{errors.password}</div>}
        </div>
        <div className="btn-row">
          <button type="submit" className="btn-primary">
            Login
          </button>
          <button type="button" onClick={handleCancel} className="btn-secondary">
            Cancel
          </button>
        </div>
      </form>

      {msg && <div className="msg-error">{msg}</div>}
      {welcome && <div className="msg-success">{welcome}</div>}
    </div>
  );
}
