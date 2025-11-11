import { useState } from "react";
// Make sure this path is correct for your file structure
import { projectPost } from "../../utils/apiHelpers";
import "../Placeholder.css"; // (For styles)

export default function CreateProjectPage() {
  const [projectid, setProjectid] = useState("");
  const [projectname, setProjectname] = useState("");
  const [description, setDescription] = useState("");
  const [userid, setUserid] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg("");

    if (!projectid.trim() || !projectname.trim() || !description.trim() || !userid.trim()) {
      setMsg("All fields are mandatory.");
      return;
    }

    // FIX 1: The endpoint is "createproject" (no underscore)
    // FIX 2: The JSON key is "created_by" (to match Python)
    const { ok, data } = await projectPost("createproject", {
      projectid,
      projectname,
      description,
      created_by: userid, 
    });

    setMsg(data.message || (ok ? "Project created" : "Error"));
  };

  return (
    <div className="card">
      <h2 className="card-title">Create Project</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <label>Project ID *</label>
          <input value={projectid} onChange={(e) => setProjectid(e.target.value)} />
        </div>
        <div className="form-row">
          <label>Project Name *</label>
          <input value={projectname} onChange={(e) => setProjectname(e.target.value)} />
        </div>
        <div className="form-row">
          <label>Description *</label>
          <input value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div className="form-row">
          <label>User ID  *</label>
          <input
            value={userid}
            onChange={(e) => setUserid(e.target.value)}
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