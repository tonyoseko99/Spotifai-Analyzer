import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Layout, Typography, Col } from "antd";

const LandingPage = () => {
  const { Content } = Layout;
  const { Title } = Typography;

  const [isLoggedin, setIsLoggedin] = useState(false);

  const token = localStorage.getItem("token");

  // check if user is logged in
  useEffect(() => {
    if (token) {
      setIsLoggedin(true);
    }
  }, [token]);

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
          <Col span={12} offset={6}>
            The Galleria is a place where you can find and view the work of
            artists from all over the world. You can also create your own
            profile, upload your own work, and share it with the world.
          </Col>
        </Title>
        {/* if user is logged in redirect to /users else, redirect to /login */}
        <Link to={isLoggedin ? "/users" : "/login"}>
          <Button type="primary" size="large" style={{ marginTop: "2rem" }}>
            {isLoggedin ? "View Users" : "Get Started"}
          </Button>
        </Link>
      </Content>
    </Layout>
  );
};

export default LandingPage;
