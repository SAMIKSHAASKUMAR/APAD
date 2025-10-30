import { useState } from "react";
import { projectPost } from "../utils/apiHelpers";

export default function CreateProject() {
  const [projectid, setProjectid] = useState("");
  const [projectname, setProjectname] = useState("");
  const [description, setDescription] = useState("");
  const [userid, setUserid] = useState(""); // NEW
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { ok, data } = await projectPost("createproject", {
      projectid,
      projectname,
      description,
      userid, // backend will auto-add to authorized_users
    });
    setMsg(data.message || (ok ? "Project created" : "Error"));
  };

  return (
    <div className="card">
      <h2 className="card-title">Create Project</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <label>Project ID</label>
          <input value={projectid} onChange={(e) => setProjectid(e.target.value)} />
        </div>
        <div className="form-row">
          <label>Project Name</label>
          <input value={projectname} onChange={(e) => setProjectname(e.target.value)} />
        </div>
        <div className="form-row">
          <label>Description</label>
          <input value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div className="form-row">
          <label>User ID (creator)</label>
          <input
            value={userid}
            onChange={(e) => setUserid(e.target.value)}
            placeholder="aditi123"
          />
        </div>
        <div className="btn-row">
          <button type="submit" className="btn-primary">
            Create
          </button>
        </div>
      </form>
      {msg && <div className="output-box">{msg}</div>}
    </div>
  );
}
