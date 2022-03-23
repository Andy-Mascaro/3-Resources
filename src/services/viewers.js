export async function fetchViewers() {
  const resp = await fetch(`${process.env.REACT_APP_SUPABASE_URL}/rest/v1/viewers?`, {
    headers: {
      apikey: process.env.REACT_APP_SUPABASE_KEY,
      Authorization: `Bearer ${process.env.REACT_APP_SUPABASE_KEY}`,
    },
  });
  const data = await resp.json();
  console.log('fetchdata', data);
  return data;
}