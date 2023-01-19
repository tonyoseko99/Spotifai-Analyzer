import React from "react";
import { Button, Layout, Typography, Carousel } from "antd";
const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "linear-gradient(135deg, #adb2b4 0%, #44464a 135%)",
};

const LandingPage = () => {
  const { Content } = Layout;
  const { Title } = Typography;

  return (
    <Layout className="landingPage">
      <Content className="landingPage-1">
        <Title level={1} style={{ color: "white", textAlign: "center" }}>
          Welcome to the Galleria
        </Title>
        <Title
          level={4}
          style={{
            color: "white",
            width: "30%",
            textAlign: "center",
            lineHeight: "1.8rem",
          }}
        >
          Galleria is your home of art. We have a wide range of art pieces from
          different artists.
        </Title>
        <Button>
          <a href="/users">View Art</a>
        </Button>
      </Content>
    </Layout>
  );
};

export default LandingPage;
