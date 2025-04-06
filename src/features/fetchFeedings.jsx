const url = import.meta.env.REACT_APP_API_URL;
const port = import.meta.env.REACT_APP_API_PORT;
const apiUrl = url + port;

export const fetchFeedings = async () => {
  const res = await fetch(apiUrl);
  if (!res.ok) {
    throw new Error(`Error at GET request`);
  }

  return res.json();
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

  return res.json();
};

// TODO: Finish CRUD functions
