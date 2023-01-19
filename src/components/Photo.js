import React, { useState, useEffect } from "react";
import { fetchPhoto, updatePhoto } from "../API/data";
import { useParams } from "react-router-dom";
import { Card, Layout, Typography, Spin, Form, Input, Button } from "antd";
import { Content } from "antd/es/layout/layout";

function Photo() {
  const { id } = useParams();
  const [photo, setPhoto] = useState({});
  const [loading, setLoading] = useState(true);
  const [form] = Form.useForm();

  // fetch photo from API
  useEffect(() => {
    fetchPhoto(id).then((photo) => {
      setPhoto(photo);
      form.setFieldsValue({
        title: photo.title,
      });
      console.log(photo);
      setLoading(false);
    });
  }, [form, id]);

  const onFinish = (values) => {
    updatePhoto(id, values).then((photo) => {
      setPhoto({ ...photo, title: values.title });
      console.log(photo);
      setLoading(false);
    });
  };

  return (
    <Layout className="photo-layout">
      <Content className="photo-content">
        <Typography.Title level={2} style={{ textAlign: "center" }}>
          Update Photo
        </Typography.Title>
        {loading ? (
          <Spin />
        ) : (
          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            initialValues={{ title: photo.title }}
          >
            <Form.Item
              label="Title"
              name="title"
              rules={[
                {
                  required: true,
                  message: "Please input the title!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                Update
              </Button>
            </Form.Item>
          </Form>
        )}
        <Card title={photo.title || "Loading..."} loading={loading}>
          <img src={photo.url} alt={photo.title} style={{maxHeight: "100%", maxWidth: "100%"}} />
        </Card>
      </Content>
    </Layout>
  );
}

export default Photo;
