import React from "react";
import { Menu, Button } from "antd";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Menu mode="horizontal" theme="dark" className="appHeader">
      <Menu.Item key="home" id="logo">
        <Link to="/">GALLERIA</Link>
      </Menu.Item>
      <Menu.Item key="SignIn" id="signin-btn">
        <Link to="/signin">
          <Button type="link" style={{color: "black"}}>Sign In</Button>
        </Link>
      </Menu.Item>
    </Menu>
  );
}

export default Header;
