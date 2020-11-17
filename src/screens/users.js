import React from "react";
import { Row, Col, Card, Tag, Button } from "antd";
import { Input, Select, Switch, Avatar, Table } from "antd";
import users from "../fake/users";
import {
  UserOutlined,
  UserAddOutlined,
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
  LockFilled
} from "@ant-design/icons";

const InputFiled = (label, input) => (
  <div style={{ marginBottom: 30 }}>
    <p style={{ fontWeight: "bold", marginBottom: 6 }}>{label}</p>
    {input}
  </div>
);

const columns = [
  {
    title: "",
    dataIndex: "name",
    key: "name",
    width: 50,
    render: (val) => (
      <Avatar style={{ backgroundColor: "#87d068" }} icon={<UserOutlined />} />
    ),
  },
  {
    title: "الاسم",
    dataIndex: "name",
    key: "name",
    render: (val) => <span style={{ fontWeight: "bold", fontSize: 14 }}>{val}</span>,
  },
  {
    title: "اسم المستخدم",
    dataIndex: "username",
    key: "username",
  },
  {
    title: "كلمة المرور",
    dataIndex: "password",
    key: "password",
    render: (val) => <span style={{ color: "gray" }}>{val}</span>,
  },
  {
    title: "الصلاحية",
    dataIndex: "type",
    key: "type",
    render: (val) =>
      val === 1 ? (
        <Tag color="green">مدير</Tag>
      ) : (
        <Tag color="geekblue">موضف</Tag>
      ),
  },
  {
    title: "",
    dataIndex: "active",
    key: "active",
    align: "left",
    render: (val) => (
      <div>
        <Switch size="small" defaultChecked={val} />{" "}
        <Button style={{marginLeft: 10, marginRight: 10}} type="text" icon={<EditOutlined />} />{" "}
        <Button danger type="text" icon={<DeleteOutlined />} />
      </div>
    ),
  },
];

export function Users() {
  return (
    <div className="page users-page">
      <Row gutter={[30, 30]}>
        <Col span={17}>
          <Card style={{ minHeight: 700 }}>
            <Table
              scroll={{ y: 400 }}
              pagination={false}
              dataSource={users}
              columns={columns}
            />
          </Card>
        </Col>
        <Col span={7}>
          <Card style={{ width: "100%" }} title="اظافة مستخدم جديد">
            {InputFiled("اسم الموضف", <Input size="large" suffix={<UserOutlined/>} placeholder="سعدون علي" />)}
            {InputFiled("اسم المستخدم", <Input size="large" suffix={<UserAddOutlined/>} placeholder="sad@0001" />)}
            {InputFiled("كلمة المرور", <Input size="large" suffix={<LockFilled/>} placeholder="كلمة المرور" />)}
            {InputFiled(
              "الصلاحية",
              <Select size="large" placeholder="الصلاحية" style={{ width: "100%" }}>
                <Select.Option>مدير</Select.Option>
                <Select.Option>موضف</Select.Option>
              </Select>
            )}
            <Button style={{height: 60}} type="primary" size="large" block icon={<PlusOutlined />}>
              اضافة
            </Button>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
