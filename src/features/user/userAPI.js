export async function fetchUsers(page = 1) {
  const response = await fetch(`https://reqres.in/api/users?page=${page}`);
  return await response.json();
}
