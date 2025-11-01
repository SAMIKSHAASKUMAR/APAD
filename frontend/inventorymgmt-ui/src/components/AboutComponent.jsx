// src/components/About.jsx
export default function AboutComponent() {
  return (
    <div className="main-shell">
      <div className="card">
        <h2>About Inventory Management</h2>
        <p style={{ marginTop: "0.8rem" }}>
          This microservice lets you view a project’s current hardware
          allocation and perform <b>check-out</b> or <b>check-in</b> against the
          shared inventory in MongoDB.
        </p>
        <ul style={{ marginTop: "1rem", lineHeight: 1.5 }}>
          <li>GET: <code>/shecodes/inventory/projectstatus</code></li>
          <li>POST: <code>/shecodes/inventory/checkincheckout</code></li>
          <li>Works with <code>Projects.Projects</code> and <code>Inventory.Inventory</code></li>
          <li>Same pattern as usermgmt (8001) and projectmgmt (8002), this runs on 8003.</li>
        </ul>
        <p style={{ marginTop: "1rem", fontSize: "0.85rem", color: "#555" }}>
          Frontend is a thin React app that just calls these 2 endpoints and
          mirrors the old SheCodes resource screen.
        </p>
      </div>
    </div>
  );
}
