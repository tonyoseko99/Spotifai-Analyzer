import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Button, Layout, Typography, Carousel } from "antd";
import {AuthContext} from "../AuthContext/AuthContext";
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

  const { authenticated } = useContext(AuthContext);

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
            width: "auto",
            textAlign: "center",
            lineHeight: "1.8rem",
          }}
        >
          Galleria is your home of art. We have a wide range of art pieces from
          different artists.
        </Title>
        {/* redirect to /users if user is authenticated */}
        {authenticated ? (
          <Link to="/users">
            <Button type="primary" size="large">
              View Users
            </Button>
          </Link>
        ) : (
          <Link to="/login">
            <Button type="primary" size="large">
              Login
            </Button>
          </Link>
        )}
      </Content>
    </Layout>
  );
};

export default LandingPage;
