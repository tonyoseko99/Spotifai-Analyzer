import React, { useState } from "react";
import { Form, Input, Button, Checkbox, Space, Typography, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

const { Text } = Typography;

const Register = () => {
  const [form] = Form.useForm();
  const [formError, setFormError] = useState(null);

  const onFinishFailed = (errorInfo) => {
    setFormError(errorInfo.errorFields[0].errors[0]);
  };

  // handle form submit
  const handleFormSubmit = async (values) => {
    try {
      const response = await fetch(
        "http://localhost:4000/auth/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );
      const results = await response.json();
      if (response.ok) {
        // handle successul signup here
        console.log(results);
        message.success("Signup successful");
        window.location.href = "/login";
      } else {
        setFormError(results.message);
      }
    } catch (error) {
      setFormError(error.message);
    }
  };

  return (
    <Form
      form={form}
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={handleFormSubmit}
      onFinishFailed={onFinishFailed}
    >
      <Space direction="vertical" align="center" style={{ width: "100%" }}>
        <Typography.Title level={2}>Register</Typography.Title>
        <Form.Item
          name="name"
          rules={[{ required: true, message: "Please input your name!" }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Full Name"
          />
        </Form.Item>
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please input your Username!" }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="somebody@domain.com"
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

        {formError && (
          <Text type="danger" style={{ textAlign: "center" }}>
            {formError}
          </Text>
        )}

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            // set block to true to make button full width
            block
          >
            Register
          </Button>
          Or <a href="/login">login now!</a>
        </Form.Item>
      </Space>
    </Form>
  );
};

export default Register;
