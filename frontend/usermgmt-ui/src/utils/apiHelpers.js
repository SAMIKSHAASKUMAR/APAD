// src/utils/apiHelpers.js
import { AUTH_BASE } from "./apiConfig";

export async function authPost(endpoint, payload) {
  const res = await fetch(`${AUTH_BASE}/${endpoint}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const data = await res.json();
  return { ok: res.ok, data };
}
