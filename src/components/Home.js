import React, { useState, useEffect } from "react";
import fetchUsers from "../api/fetchUsers";

function Home() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers().then((users) => {
      setUsers(users);
      setLoading(false);
    });
  }, []);

  return <div>Home</div>;
}

export default Home;
