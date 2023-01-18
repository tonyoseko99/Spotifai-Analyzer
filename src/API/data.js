// fetch API data from 'https://jsonplaceholder.typicode.com'
// fetch users from 'https://jsonplaceholder.typicode.com/users'

export const fetchUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  return users;
};

// fetch albums from 'https://jsonplaceholder.typicode.com/albums'
export const fetchAlbums = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/albums");
  const albums = await response.json();
  return albums;
};
