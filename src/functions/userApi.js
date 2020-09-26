export async function getUsers() {
  const data = await fetch("https://randomuser.me/api/?results=10&nat=es");
  const response = await data.json();
  return response.results;
}
