import React, { useState, useContext } from "react";
import { AuthContext, AuthProvider } from "../AuthContext/AuthContext";
import { Form, Input, Button, Checkbox, Space, Typography } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

const Login = () => {
  const [form] = Form.useForm();
  const [formError, setFormError] = useState(null);

  const { login } = useContext(AuthContext);

  //  handle login form submit
  const handleLogin = async (values) => {
    try {
      const response = await fetch("https://galleria-auth.onrender.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      const results = await response.json();
      if (response.ok) {
        // handle successful login here
        console.log(results);
        alert("Login successful");
        window.location.href = "/users";
      } else {
        setFormError(results.message);
      }
    } catch (error) {
      setFormError(error.message);
    }

    const data = { email: values.email, password: values.password };
    const token = localStorage.getItem("token");
    login(data, token);
  };

  const onFinishFailed = (errorInfo) => {
    setFormError(errorInfo.errorFields[0].errors[0]);
  };

  return (
    <Form
      form={form}
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={handleLogin}
      onFinishFailed={onFinishFailed}
    >
      <Space direction="vertical" align="center" style={{ width: "100%" }}>
        <Typography.Title level={2}>Login</Typography.Title>
        <Form.Item
          name="email"
          rules={[{ required: true, message: "Please input your Username!" }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            type="email"
            placeholder="email@company.com"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a className="login-form-forgot" href="/forgot-password">
            Forgot password
          </a>
        </Form.Item>

        {formError && <div className="form-error">{formError}</div>}

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            block
          >
            Log in
          </Button>
          new user? <a href="/register">register now!</a>
        </Form.Item>
      </Space>
    </Form>
  );
};

export default () => (
  <AuthProvider>
    <Login />
  </AuthProvider>
);

