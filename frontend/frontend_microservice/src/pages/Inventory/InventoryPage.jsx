// src/components/InventoryPage.jsx
import React, { useState } from "react";
import { INVENTORY_BASE } from "../../utils/apiConfig";

const HW_ORDER = ["hw1", "hw2"]; // force UI order

export default function InventoryPage() {
  const [projectId, setProjectId] = useState("");
  const [checkedOut, setCheckedOut] = useState([]);
  const [inventory, setInventory] = useState([]);
  const [qtyByHw, setQtyByHw] = useState({});
  const [msg, setMsg] = useState("");

  const loadProject = async () => {
    setMsg("");
    const url = `${INVENTORY_BASE}/projectstatus?projectid=${projectId}`;
    const res = await fetch(url);
    const data = await res.json();

    if (!res.ok) {
      setMsg(data.message || "Error loading project");
      setCheckedOut([]);
      setInventory([]);
      return;
    }

    // 1) checked out comes as array -> keep as is
    setCheckedOut(data.response.checkedOut || []);

    // 2) inventory comes as array -> re-order to hw1, hw2
    const inv = data.response.inventory || [];
    const ordered = HW_ORDER.map((id) => inv.find((x) => x.hardwareid === id) || {
      hardwareid: id,
      capacity: 0,
      available: 0,
    });
    setInventory(ordered);

    // reset user qty
    setQtyByHw({});
    setMsg("Project loaded successfully");
  };

  const handleQtyChange = (hwid, val) => {
    setQtyByHw((prev) => ({ ...prev, [hwid]: val }));
  };

  const doAction = async (action) => {
    setMsg("");
    const payload = {
      projectid: projectId,
      action,
      inventory: inventory.map((row) => ({
        hardwareid: row.hardwareid,
        quantity: Number(qtyByHw[row.hardwareid] || 0),
      })),
    };

    const res = await fetch(`${INVENTORY_BASE}/checkincheckout`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const data = await res.json();

    if (!res.ok) {
      setMsg(data.message || "Action failed");
      return;
    }

    // refresh view from backend
    await loadProject();
    setMsg(`${action === "checkout" ? "Checkout" : "Checkin"} successful`);
  };

  return (
    <div style={{ padding: "2.5rem 3rem" }}>
      <h1>Inventory / Check-In / Check-Out</h1>
      <p>Enter project id to load its current hardware and availability.</p>

      <div style={{ display: "flex", gap: "1rem", marginTop: "1.5rem" }}>
        <div>
          <label style={{ fontWeight: 600 }}>
            Project ID <span style={{ color: "red" }}>*</span>
          </label>
          <input
            style={{ display: "block", marginTop: "0.5rem", width: "250px" }}
            value={projectId}
            onChange={(e) => setProjectId(e.target.value)}
          />
        </div>
        <button
          style={{ marginTop: "2rem", background: "#4a0072", color: "white", padding: "0.5rem 1.5rem", border: "none", borderRadius: "6px" }}
          onClick={loadProject}
          disabled={!projectId}
        >
          Load
        </button>
      </div>

      {msg && <p style={{ marginTop: "1rem", color: "green" }}>{msg}</p>}

      {/* Checked Out table */}
      {checkedOut.length > 0 && (
        <>
          <h3 style={{ marginTop: "2rem" }}>Checked Out (by project)</h3>
          <table style={{ borderCollapse: "collapse", width: "100%", marginTop: "0.75rem" }}>
            <thead>
              <tr>
                <th style={{ border: "1px solid #eee", padding: "0.75rem" }}>Hardware</th>
                <th style={{ border: "1px solid #eee", padding: "0.75rem" }}>Checked Out Qty</th>
              </tr>
            </thead>
            <tbody>
              {checkedOut.map((qty, idx) => (
                <tr key={idx}>
                  <td style={{ border: "1px solid #eee", padding: "0.75rem" }}>SET {idx + 1}</td>
                  <td style={{ border: "1px solid #eee", padding: "0.75rem" }}>{qty}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}

      {/* Inventory table */}
      {inventory.length > 0 && (
        <>
          <h3 style={{ marginTop: "2rem" }}>Inventory</h3>
          <table style={{ borderCollapse: "collapse", width: "100%", marginTop: "0.75rem" }}>
            <thead>
              <tr>
                <th style={{ border: "1px solid #eee", padding: "0.75rem" }}>Hardware ID</th>
                <th style={{ border: "1px solid #eee", padding: "0.75rem" }}>Capacity</th>
                <th style={{ border: "1px solid #eee", padding: "0.75rem" }}>Available</th>
                <th style={{ border: "1px solid #eee", padding: "0.75rem" }}>Request</th>
              </tr>
            </thead>
            <tbody>
              {inventory.map((row) => (
                <tr key={row.hardwareid}>
                  <td style={{ border: "1px solid #eee", padding: "0.75rem" }}>{row.hardwareid}</td>
                  <td style={{ border: "1px solid #eee", padding: "0.75rem" }}>{row.capacity}</td>
                  <td style={{ border: "1px solid #eee", padding: "0.75rem" }}>{row.available}</td>
                  <td style={{ border: "1px solid #eee", padding: "0.75rem" }}>
                    <input
                      type="number"
                      min="0"
                      style={{ width: "120px" }}
                      placeholder="qty"
                      value={qtyByHw[row.hardwareid] || ""}
                      onChange={(e) => handleQtyChange(row.hardwareid, e.target.value)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div style={{ display: "flex", gap: "1rem", justifyContent: "flex-end", marginTop: "1.5rem" }}>
            <button
              onClick={() => doAction("checkout")}
              style={{ background: "white", border: "1px solid #4a0072", color: "#4a0072", padding: "0.5rem 1.5rem", borderRadius: "6px" }}
            >
              Check Out
            </button>
            <button
              onClick={() => doAction("checkin")}
              style={{ background: "#4a0072", border: "1px solid #4a0072", color: "white", padding: "0.5rem 1.5rem", borderRadius: "6px" }}
            >
              Check In
            </button>
          </div>
        </>
      )}
    </div>
  );
}
