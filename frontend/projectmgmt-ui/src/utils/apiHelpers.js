// src/utils/apiHelpers.js
import { PROJECT_BASE } from "./apiConfig";

// GET: /shecodes/projects/projectstatus?projectid=...
export async function projectGet(endpoint, params = {}) {
  // make sure there's NO leading slash in endpoint
  const cleanEndpoint = endpoint.replace(/^\//, "");

  const qs = new URLSearchParams(params).toString();
  const url = qs
    ? `${PROJECT_BASE}/${cleanEndpoint}?${qs}`
    : `${PROJECT_BASE}/${cleanEndpoint}`;

  const res = await fetch(url);
  const data = await res.json();
  return { ok: res.ok, data };
}

// POST: /shecodes/projects/createproject, /addUserProject
export async function projectPost(endpoint, payload) {
  const cleanEndpoint = endpoint.replace(/^\//, "");
  const url = `${PROJECT_BASE}/${cleanEndpoint}`;

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const data = await res.json();
  return { ok: res.ok, data };
}
