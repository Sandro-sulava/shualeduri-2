// CHANGE THIS to your actual MockAPI collection URL
export const MOCKAPI_URL = "https://example.mockapi.io/api/v1/feedback";

export async function createFeedback(payload) {
  const res = await fetch(MOCKAPI_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || `Request failed with ${res.status}`);
  }
  return res.json();
}
