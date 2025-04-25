const url = import.meta.env.VITE_API_URL;
const port = import.meta.env.VITE_API_PORT;
const apiUrl = `http://${url}:${port}/details`;

export const createFeeding = async (payload) => {
  console.log(`createFeeding apiUrl ${apiUrl}`);
  const res = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error(`Failed to create feeding`);
  }

  // return await res.json();
};
