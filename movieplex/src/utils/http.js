export const GET = async (endpoint) => {
  const res = await fetch(endpoint);
  const data = await res.json();
  return data;
};
