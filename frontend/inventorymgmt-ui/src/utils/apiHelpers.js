// src/utils/apiHelpers.js
import { INVENTORY_BASE } from "./apiConfig";

export async function getFromEndpoint(path, params = {}) {
  const url = new URL(`${INVENTORY_BASE}/${path}`);
  Object.entries(params).forEach(([k, v]) => url.searchParams.append(k, v));

  const res = await fetch(url, {
    method: "GET",
  });

  const data = await res.json().catch(() => ({}));
  return { ok: res.ok, data };
}

export async function postToEndpoint(path, body = {}) {
  const res = await fetch(`${INVENTORY_BASE}/${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  const data = await res.json().catch(() => ({}));
  return { ok: res.ok, data };
}
