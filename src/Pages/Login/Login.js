import React, { useState, useEffect } from "react";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "./Login.css";
import MenuRouting from "../../Routers/MenuRouting";
const Login = () => {
  const [form] = Form.useForm();
  const [, forceUpdate] = useState({}); // To disable submit button at the beginning.
  const [val, setva] = useState({ name: "", pass: "" });
  useEffect(() => {
    forceUpdate({});
  }, []);

  const onFinish = (values) => {
    const { username, password } = values;
    console.log("Finish:", username, password);
    if (username == "admin" && password == "123456") {
      setva({ name: username, pass: password });
    }
  };

  return (
    <div className="containers" style={{}}>
      <div style={{ width: 120 }}>
        <h1 className="h12">Reactjs</h1>
      </div>
      <div style={{ width: 320, marginTop: 200 }}>
        <Form
          form={form}
          name="horizontal_login"
          onFinish={onFinish}
          size={"middle"}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item shouldUpdate>
            {() => (
              <Button
                type="primary"
                htmlType="submit"
                disabled={
                  !form.isFieldsTouched(true) ||
                  !!form.getFieldsError().filter(({ errors }) => errors.length)
                    .length
                }
              >
                Log in
              </Button>
            )}
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
