export default async function(url: string) {
  const res = await fetch(url);
  return await res.json();
}
