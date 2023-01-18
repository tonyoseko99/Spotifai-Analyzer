import { Form, Button, Input } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import React from "react";

function Login() {
  return (
    <Form className="login-form">
      <Form.Item>
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Username"
        />
      </Form.Item>
      <Form.Item>
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or <a href="">register now!</a>
      </Form.Item>
    </Form>
  );
}

export default Login;
