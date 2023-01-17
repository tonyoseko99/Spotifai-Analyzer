import React from "react";
import { Layout, Typography } from "antd";

const LandingPage = () => {
  const { Content } = Layout;
  const { Title } = Typography;

  return (
    <Layout className="landingPage">
      <Content style={{ padding: "50px" }}>
        <Title level={2} style={{ color: "white" }}>
          Welcome to the Galleria
        </Title>
        <Typography.Paragraph style={{ color: "white" }}>
          Galleria is your home of art. We have a wide range of art pieces from
          different artists. You can view the art pieces and also purchase them.
        </Typography.Paragraph>
      </Content>
    </Layout>
  );
};

export default LandingPage;
