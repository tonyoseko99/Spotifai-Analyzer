import React, { useState, useEffect } from "react";
import { fetchPhoto, updatePhoto } from "../API/data";
import { useParams } from "react-router-dom";
import { Card, Layout, Typography, Spin, Form, Input, Button } from "antd";

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
    <div className="photo">
      <Layout className="photo-layout">
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
      </Layout>
    </div>
  );
}

export default Photo;
