import { Card, Table } from "antd";
import React, { useState, useEffect } from "react";
import { fetchUsers, fetchAlbums } from "../API/data";

function Home() {
  const [users, setUsers] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);

  // fetch users from 'https://jsonplaceholder.typicode.com/users'
  useEffect(() => {
    fetchUsers().then((users) => {
      setUsers(users);
      setLoading(false);
    });
  }, []);

  // fetch albums from 'https://jsonplaceholder.typicode.com/albums'
  useEffect(() => {
    fetchAlbums().then((albums) => {
      // check if the album has a userId that matches the user's id
      // if it does, add the album to the user's albums array
      users.forEach((user) => {
        user.albums = [];
        albums.forEach((album) => {
          if (album.userId === user.id) {
            user.albums.push(album);
          }
        });
      });
      setAlbums(albums);
      console.log(users);
    });
  }, [users]);

  return (
    <Card title="Users" loading={loading}>
      <Table dataSource={users} rowKey="id">
        <Table.Column title="Name" dataIndex="name" key="name" />
        <Table.Column title="Website" dataIndex="website" key="website" />
        {/* number of albums */}
        <Table.Column title="Albums" dataIndex="albums" key="albums" />
      </Table>
    </Card>
  );
}

export default Home;
