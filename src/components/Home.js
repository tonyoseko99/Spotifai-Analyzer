import React, { useState, useEffect } from "react";
import { fetchUsers, fetchAlbums } from "../API/data";
import { Card, Layout, Table } from "antd";

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
        console.log(usersWithAlbums);
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
      title: "Company",
      dataIndex: "company",
      key: "company",
      render: (company) => company["name"],
    },
    
    {
      title: "Albums",
      dataIndex: "albums",
      key: "albums",
    },
  ];

  return (
    <Layout className="home-layout">
      <Card title="Users" loading={loading} className="home-card">
        <Table
          style={{ width: "100%" }}
          columns={columns}
          dataSource={users}
          rowKey="id"
          scroll={{ x: 500 }}
          sticky // sticky header
          onRow={(record, rowIndex) => {
            return {
              // onClick, redirect to user page with user id
              onClick: (event) => {
                window.location.href = `/users/${record.id}`;
              },
            };
          }}
        />
      </Card>
    </Layout>
  );
}

export default Home;
