import React from "react";
import { Button, Layout, Typography, Carousel } from "antd";
const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "linear-gradient(135deg, #adb2b4 0%, #44464a 135%)"
};

const LandingPage = () => {
  const { Content } = Layout;
  const { Title } = Typography;

  return (
    <Layout className="landingPage">
      <Content className="landingPage-1">
        <Title level={2} style={{ color: "white" }}>
          Welcome to the Galleria
        </Title>
        <Title level={5} style={{ color: "white", width: "43%" }}>
          The Galleria is a place where you can find the best art pieces from
          the best artists. Galleria is your home of art. We have a wide range
          of art pieces from different artists. You can view the art pieces and
          also purchase them.
        </Title>
        <Button>
          <a href="/home">View Art</a>
        </Button>
      </Content>

      <Content className="landingPage-2">
        <Title level={2}>
          Meet the Artists
        </Title>
        <Title level={5} style={{ width: "43%" }}>
          We have a wide range of artists from different parts of the world. We
          have artists from the United States, United Kingdom, Canada, and
          Australia. We have artists from different backgrounds and different
          styles. We have artists who are into abstract art, modern art, and
          contemporary art. We have artists who are into traditional art and
          digital art. We have artists who are into photography and artists who
          are into painting. We have artists who are into drawing and artists
          who are into sculpture. We have artists who are into mixed media and
          artists who are into collage. We have artists who are into
          installation art and artists who are into performance art. We have
          artists who are into conceptual art and artists who are into
          environmental art. We have artists who are into street art and artists
          who are into graffiti.
        </Title>
        <Button type="primary" size="large" ghost="true">
          <a href="/home">View Artists</a>
        </Button>
      </Content>
      
    </Layout>
  );
};

export default LandingPage;
