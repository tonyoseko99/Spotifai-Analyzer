// fetch API data from 'https://jsonplaceholder.typicode.com'
// fetch users from 'https://jsonplaceholder.typicode.com/users'

const fetchUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  return users;
};

// fetch albums from 'https://jsonplaceholder.typicode.com/albums'

// fetch photos from 'https://jsonplaceholder.typicode.com/photos'
