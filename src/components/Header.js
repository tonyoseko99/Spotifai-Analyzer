import React from "react";
import { Link } from "react-router-dom";
import { Layout, Button } from "antd";

const { Header } = Layout;

const AppHeader = () => {
  return (
    <Header className="appHeader">
      <div>
        <a href="/">
          <span style={{ color: "white", fontSize: "1.5rem" }} id="logo">
            Galleria
          </span>
        </a>
        <a
          href="/login"
          type="dark"
          style={{ color: "white", fontSize: "1rem" }}
        >
          Sign In
        </a>
      </div>
    </Header>
  );
};

export default AppHeader;
