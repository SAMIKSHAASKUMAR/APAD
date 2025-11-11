import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { userPost } from "../../utils/apiHelpers";
import "../Placeholder.css"; 

export default function LoginPage() {
  const [userid, setUserid] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [welcome, setWelcome] = useState("");
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();
  // DEBUG: Check that the navigate function is ready
  console.log("LoginPage rendered. Navigate function is ready:", navigate);

  const validate = () => {
    const e = {};
    if (!userid.trim()) e.userid = "Username is required";
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

    console.log("Sending login request with:", { username: userid, password });
    
    // Send 'username' to match your Python API
    const { ok, data } = await userPost("login", {
      username: userid, 
      password: password,
    });

    // DEBUG: Log the exact response from the API
    console.log("Login API response received:", { ok, data });

    if (!ok) {
      // DEBUG: This is the "fail" branch
      console.log("Login FAILED. Navigation will NOT happen.");
      setMsg(data.message || "Login failed");
      return;
    }

    // DEBUG: This is the "success" branch
    console.log("Login SUCCESS. Will navigate in 1.5 seconds...");
    setWelcome(data.message || `Welcome, ${userid}! Redirecting...`);

    setTimeout(() => {
      console.log("...Timeout finished. Calling navigate('/projects/view') NOW.");
      navigate("/projects/view");
    }, 1500); 
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
      {/* ... rest of your HTML ... */}
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <label>Username</label>
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