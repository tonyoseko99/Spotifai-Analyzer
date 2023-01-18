import React, { useState, useEffect } from "react";
import { fetchUsers, fetchAlbums } from "../API/data";
import { Card, Table } from "antd";

function Home() {
  const [users, setUsers] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);

  // fetch users from API
  useEffect(() => {
    fetchUsers().then((users) => {
      setUsers(users);
      setLoading(false);
    });
  }, []);

  // fetch albums from API
  useEffect(() => {
    fetchAlbums().then((albums) => {
      setAlbums(albums);
      if (users.length > 0) {
        const usersWithAlbums = users.map((user) => {
          const userAlbums = albums.filter((album) => album.userId === user.id);
          return { ...user, albums: userAlbums.length };
        });
        setUsers(usersWithAlbums);
      }
      setLoading(false);
    });
  }, [users]);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Website",
      dataIndex: "website",
      key: "website",
    },
    {
      title: "Albums",
      dataIndex: "albums",
      key: "albums",
    },
  ];

  return (
    <div>
      <Card title="Users" loading={loading}>
        <Table columns={columns} dataSource={users} rowKey="id" />
      </Card>
    </div>
  );
}

export default Home;
