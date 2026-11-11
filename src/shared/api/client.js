const BASE_URL = "/api";

export async function apiClient(path, { method = "GET", body, ...options } = {}) {
  const response = await fetch(`${BASE_URL}${path}`, {
    method,
    headers: body ? { "Content-Type": "application/json" } : undefined,
    body: body ? JSON.stringify(body) : undefined,
    ...options,
  });

  if (!response.ok) {
    throw new Error(`API ${method} ${path} 실패 (${response.status})`);
  }

  return response.status === 204 ? null : response.json();
}
