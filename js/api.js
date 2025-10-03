const API_URL = "http://localhost:8080";

// Suppress console messages in production to avoid clutter
if (window.location.hostname !== 'localhost') {
  console.log = console.warn = console.error = console.info = console.debug = () => {};
}

async function apiPost(path, body) {
  const response = await fetch(API_URL + path, {
    method: "POST",
    body: body
  });
  return response.json();
}

async function apiGet(path) {
  const response = await fetch(API_URL + path);
  return response.json();
}
