import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Layout, Button } from "antd";

const { Header } = Layout;

const AppHeader = () => {
  const [isLoggedin, setIsLoggedin] = useState(false);

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
  };

  return (
    <Header className="appHeader">
      <div className="logo" />
      <div className="headerLinks">
        <Link to="/">Home</Link>
        <Link to="/users">Users</Link>
        {isLoggedin ? (
          <Button type="primary" onClick={handleLogout}>
            Logout
          </Button>
        ) : (
          <>
            <Link to="/login" style={{float: "right"}}>Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </Header>
  );
};

export default AppHeader;
