export async function fetchDirectors(name, query = '') {
  const urlParams = new URLSearchParams();
  if (name !== 'All') {
    urlParams.set('name', `eq.${name}`);
  } 
  if (query.length > 0) {
    urlParams.set('name', `ilike.%${query}%`);
  }
  urlParams.set('select', '*');

  const resp = await fetch(
    `${process.env.REACT_APP_SUPABASE_URL}/rest/v1/directors?${urlParams.toString()}`,
    {
      headers: {
        apikey: process.env.REACT_APP_SUPABASE_KEY, Authorization: `Bearer ${process.env.REACT_APP_SUPABASE_KEY}`
      },
    }
  );
  const data = await resp.json();
  return data;
}