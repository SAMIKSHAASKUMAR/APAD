import { useState } from "react";
import { userPost } from "../utils/apiHelpers";

export default function SignupComponent() {
  const [userid, setUserid] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!userid.trim()) e.userid = "User ID is required";
    if (!password.trim()) e.password = "Password is required";
    if (password && password.length < 4) {
      e.password = "Password must be at least 4 characters";
    }
    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg("");
    const eobj = validate();
    setErrors(eobj);
    if (Object.keys(eobj).length > 0) return;

    const { ok, data } = await userPost("signup", {
      username: userid,
      password: password,
    });

    if (!ok) {
      setMsg(data.message || "Signup failed");
      return;
    }

    setMsg(data.message || "User registered successfully");
  };

  const handleCancel = () => {
    setUserid("");
    setPassword("");
    setMsg("");
    setErrors({});
  };

  return (
    <div className="card">
      <h2 className="card-title">Create User</h2>
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
            Sign Up
          </button>
          <button type="button" onClick={handleCancel} className="btn-secondary">
            Cancel
          </button>
        </div>
      </form>

      {msg && <div className="msg-success">{msg}</div>}
    </div>
  );
}
