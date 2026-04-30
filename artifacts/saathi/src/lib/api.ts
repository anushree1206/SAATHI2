import { customFetch } from "@workspace/api-client-react";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://13.239.112.241:5000";

function buildApiUrl(path: string): string {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  return `${API_BASE_URL}${path}`;
}

export async function apiGet<T>(path: string): Promise<T> {
  return customFetch<T>(buildApiUrl(path), { method: "GET" });
}

export async function apiPost<T>(path: string, body: unknown): Promise<T> {
  return customFetch<T>(buildApiUrl(path), {
    method: "POST",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
  });
}

export async function apiDelete(path: string): Promise<void> {
  await customFetch<void>(buildApiUrl(path), { method: "DELETE" });
}
