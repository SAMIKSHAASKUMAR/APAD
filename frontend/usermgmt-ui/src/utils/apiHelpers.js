// src/utils/apiHelpers.js
import { USER_BASE } from "./apiConfig";

export async function userPost(endpoint, payload) {
  const res = await fetch(`${USER_BASE}/${endpoint}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const data = await res.json();
  return { ok: res.ok, data };
}
