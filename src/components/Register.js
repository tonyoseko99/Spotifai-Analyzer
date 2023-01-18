import React, { useState } from "react";
import { Form, Input, Button, Checkbox, Space, Typography } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

const Register = () => {
  const [form] = Form.useForm();
  const [formError, setFormError] = useState(null);

  const onFinish = (values) => {
    // handle successful login here
    console.log("Received values of form: ", values);
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
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Space direction="vertical" align="center" style={{ width: "100%" }}>
        <Typography.Title level={2}>Register</Typography.Title>
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
          have an account?<a href="/login">sign in</a>
        </Form.Item>
      </Space>
    </Form>
  );
};

export default Register;
