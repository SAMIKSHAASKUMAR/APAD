import { useState } from "react";
import { projectPost } from "../utils/apiHelpers";

export default function AddUserToProject() {
  const [projectid, setProjectid] = useState("");
  const [userid, setUserid] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { ok, data } = await projectPost("addUserProject", {
      projectid,
      userid,
    });
    setMsg(data.message || (ok ? "User added" : "Error"));
  };

  return (
    <div className="card">
      <h2 className="card-title">Add User to Project</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <label>Project ID</label>
          <input value={projectid} onChange={(e) => setProjectid(e.target.value)} />
        </div>
        <div className="form-row">
          <label>User ID</label>
          <input value={userid} onChange={(e) => setUserid(e.target.value)} />
        </div>
        <div className="btn-row">
          <button type="submit" className="btn-primary">
            Add
          </button>
        </div>
      </form>
      {msg && <div className="output-box">{msg}</div>}
    </div>
  );
}
