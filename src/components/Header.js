import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Layout, Button, Menu, Divider } from "antd";

const { Header } = Layout;

const AppHeader = () => {
  const [isLoggedin, setIsLoggedin] = useState(false);

  // get token from local storage
  const token = localStorage.getItem("token");

  // check if user is logged in
  useEffect(() => {
    if (token) {
      setIsLoggedin(true);
    }
  }, [token]);

  // handle user logout
  const handleLogout = () => {
    // remove token from local storage
    localStorage.removeItem("token");
    // set isLoggedin to false
    setIsLoggedin(false);
    // redirect to login page
    window.location.href = "/";
  };

  return (
    <Header className="appHeader">
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        className="menu"
      >
        <>
          <Menu.Item key="1">
            <Link to="/">Home</Link>
          </Menu.Item>
        </>
        <Divider type="vertical" />
        {isLoggedin ? (
          <>
            <Menu.Item key="2" id="menu-users">
              <Link to="/users">Artists</Link>
            </Menu.Item>

            <Menu.Item key="3">
              {/* logout */}
              <Button type="link" onClick={handleLogout}>
                Logout
              </Button>
            </Menu.Item>
          </>
        ) : (
          <span className="menu-right">
            <Menu.Item key="2">
              <Link to="/login">Login</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/register">Register</Link>
            </Menu.Item>
          </span>
        )}
      </Menu>
    </Header>
  );
};

export default AppHeader;
