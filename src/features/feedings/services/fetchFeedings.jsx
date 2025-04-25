const url = import.meta.env.VITE_API_URL;
const port = import.meta.env.VITE_API_PORT;
const apiUrl = `${url}:${port}`;

export const fetchFeedings = async () => {
  console.log(`En fetchFeedings`);
  console.log(`apiUrl http://${apiUrl}/details`);
  const response = await fetch(`http://${apiUrl}/details`);
  const data = await response.json();
  return await data;
};

