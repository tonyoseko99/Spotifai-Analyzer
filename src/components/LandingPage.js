import React from "react";
import { Layout, Typography } from "antd";

const LandingPage = () => {
  const { Content } = Layout;
  const { Title } = Typography;

  return (
    <Layout>
      <Content style={{ padding: "50px" }}>
        <Title level={2}>Welcome to the Galleria</Title>
        <p>
          This web app allows you to view and manage users and their albums. You
          can view a list of all users, view a specific user's information and
          albums, view a specific album's information and photos, and edit a
          photo's title.
        </p>
      </Content>
    </Layout>
  );
};

export default LandingPage;
