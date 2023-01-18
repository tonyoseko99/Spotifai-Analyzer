import React, { useState, useEffect } from "react";
import { fetchAlbums, fetchUsers } from "../API/data";

function User({ match }) {
  const [user, setUser] = useState({});
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);

  // fetch user from API
  useEffect(() => {
    fetchUsers().then((users) => {
      const user = users.find((user) => user.id === parseInt(match.params.id));
      setUser(user);
      setLoading(false);
    });
  }, [match.params.id]);

  // fetch albums from API
  useEffect(() => {
    fetchAlbums().then((albums) => {
      const userAlbums = albums.filter((album) => album.userId === user.id);
      setAlbums(userAlbums);
      setLoading(false);
    });
  }, [user]);

  
  return <div>User</div>;
}

export default User;
