import React from "react";
import { Layout, Button } from "antd";

const { Header } = Layout;

const AppHeader = () => {
  return (
    <Header className="appHeader">
      <div>
        <span
          style={{ color: "white", fontSize: "1.5rem"}}
          id="logo"
        >
          Galleria
        </span>
        <Button type="dark" style={{ color: "white", fontSize: "1rem" }}>
          Sign In
        </Button>
      </div>
    </Header>
  );
};

export default AppHeader;
