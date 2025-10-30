// src/utils/apiHelpers.js
import { PROJECT_BASE } from "./apiConfig";

// POST helper
export async function projectPost(endpoint, payload) {
  const res = await fetch(`${PROJECT_BASE}/${endpoint}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const data = await res.json();
  return { ok: res.ok, data };
}

// GET helper
export async function projectGet(endpoint, params = {}) {
  const qs = new URLSearchParams(params).toString();
  const url = qs ? `${PROJECT_BASE}/${endpoint}?${qs}` : `${PROJECT_BASE}/${endpoint}`;
  const res = await fetch(url);
  const data = await res.json();
  return { ok: res.ok, data };
}
