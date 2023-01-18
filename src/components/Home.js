import { Card, Table } from "antd";
import React, { useState, useEffect } from "react";
import { fetchUsers, fetchAlbums } from "../API/data";

function Home() {
  const [users, setUsers] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers().then((users) => {
      setUsers(users);
      console.log(users);
      setLoading(false);
    });
  }, []);

  return (
    <Card title="Users" loading={loading}>
      <Table dataSource={users} rowKey="id">
        <Table.Column title="Name" dataIndex="name" key="name" />
        <Table.Column title="Username" dataIndex="username" key="username" />
        <Table.Column title="Email" dataIndex="email" key="email" />
        <Table.Column title="Phone" dataIndex="phone" key="phone" />
        <Table.Column title="Website" dataIndex="website" key="website" />
      </Table>
    </Card>
  );
}

export default Home;
