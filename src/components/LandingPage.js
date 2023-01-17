import React from "react";
import { Button, Layout, Typography } from "antd";

const LandingPage = () => {
  const { Content } = Layout;
  const { Title } = Typography;

  return (
    <Layout className="landingPage">
      <Content style={{ padding: "50px" }} className="landingPage-background" >
        <Title level={2} style={{ color: "white" }}>
          Welcome to the Galleria
        </Title>
        <Title level={5} style={{ color: "white", width: "43%" }}>
          The Galleria is a place where you can find the best art pieces from
          the best artists. Galleria is your home of art. We have a wide range
          of art pieces from different artists. You can view the art pieces and
          also purchase them.
        </Title>
        <Button type="default" size="large" ghost="true">
          <a href="/home">View Art</a>
        </Button>
      </Content>
      {/* talk about artists */}

      {/* talk about art */}
      {/* talk about about */}

    </Layout>
  );
};

export default LandingPage;
