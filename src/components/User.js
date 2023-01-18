import React, { useState, useEffect } from "react";
import { fetchAlbums, fetchUsers } from "../API/data";
import { Card, Layout, Spin, Table, Typography } from "antd";
import { useParams } from "react-router-dom";

function User() {
  const { id } = useParams();
  const [user, setUser] = useState({});
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);

  // fetch user from API
  useEffect(() => {
    fetchUsers().then((users) => {
      const user = users.find((user) => user.id === parseInt(id));
      setUser(user);
      console.log(user);
      setLoading(false);
    });
  }, [id]);

  // fetch user's albums from API
  useEffect(() => {
    fetchAlbums().then((albums) => {
      const userAlbums = albums.filter(
        (album) => album.userId === parseInt(id)
      );
      setAlbums(userAlbums);
      setLoading(false);
    });
  }, [id]);

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
  ];

  return (
    <Layout>
      <Typography.Title level={2} style={{ textAlign: "center" }}>
        User Details
      </Typography.Title>
      <Typography.Paragraph style={{ textAlign: "center" }}>
        This page shows the details of a user.
      </Typography.Paragraph>
      <Card title={user.name} loading={loading}>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
        <p>Website: {user.website}</p>
      </Card>
      <Card title="Albums" loading={loading}>
        {loading ? (
          <Spin />
        ) : (
          <Table columns={columns} dataSource={albums} rowKey="id" />
        )}
      </Card>
    </Layout>
  );
}

export default User;
