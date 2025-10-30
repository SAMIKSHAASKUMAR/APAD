import { useState } from "react";
import { projectGet } from "../utils/apiHelpers";

export default function ViewProject() {
  const [projectid, setProjectid] = useState("");
  const [project, setProject] = useState(null);
  const [msg, setMsg] = useState("");

  const handleFetch = async (e) => {
    e.preventDefault();
    const { ok, data } = await projectGet("projectstatus", { projectid });
    if (!ok) {
      setMsg(data.message || "Error fetching project");
      setProject(null);
      return;
    }
    setMsg("");
    setProject(data.project);
  };

  return (
    <div className="card">
      <h2 className="card-title">Project Status</h2>
      <form onSubmit={handleFetch}>
        <div className="form-row">
          <label>Project ID</label>
          <input value={projectid} onChange={(e) => setProjectid(e.target.value)} />
        </div>
        <div className="btn-row">
          <button type="submit" className="btn-primary">
            Fetch
          </button>
        </div>
      </form>

      {msg && <div className="output-box">{msg}</div>}

      {project && (
        <div className="output-box">
          <p>
            <strong>ID:</strong> {project.projectid}
          </p>
          <p>
            <strong>Name:</strong> {project.projectname}
          </p>
          <p>
            <strong>Description:</strong> {project.description}
          </p>
          <p>
            <strong>Authorized Users:</strong>
          </p>
          <div>
            {project.authorized_users && project.authorized_users.length > 0 ? (
              project.authorized_users.map((u) => (
                <span key={u} className="badge">
                  {u}
                </span>
              ))
            ) : (
              <span style={{ fontSize: "0.75rem" }}>No users authorized</span>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
