const url = import.meta.env.VITE_API_URL;
const port = import.meta.env.VITE_API_PORT;
const apiUrl = `${url}:${port}`;

export const fetchFeedings = async () => {
  console.log(`En fetchFeedings`);
  console.log(`apiUrl http://${apiUrl}/details`);
  const response = await fetch(`http://${apiUrl}/details`);
  const data = await response.json();
  return await data;
}

export const createFeeding = async () => {
  const res = fetch(apiUrl, {
    method: `POST`,
    headers: { 'Content-type': 'application/json' },
    // body: JSON.strigify(),
  });

  if (!res.ok) {
    throw new Error(`Error at POST request`);
  }

  return await res.json();
};

// TODO: Finish CRUD functions
