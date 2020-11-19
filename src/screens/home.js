import React from "react";
import items from "../fake/items";
import paidItems from "../fake/paidItems";
import { UsersIcon } from "../components/icons";
import {
  Card,
  Input,
  Row,
  Col,
  Tag,
  Table,
  Skeleton,
  Button,
  InputNumber,
} from "antd";
import {
  DeleteOutlined,
  MinusCircleOutlined,
  PlusCircleOutlined,
  ClearOutlined,
  PrinterOutlined,
} from "@ant-design/icons";

const { Meta } = Card;

const columns = [
  {
    title: "",
    dataIndex: "id",
    key: "id",
    width: 20,
    render: (val) => (
      <Button style={{ color: "gray" }} type="text" icon={<DeleteOutlined />} />
    ),
  },
  {
    title: "الاسم",
    dataIndex: "name",
    key: "name",
    render: (val) => (
      <span style={{ fontWeight: "bold", fontSize: 12 }}>{val}</span>
    ),
  },
  {
    title: "العدد",
    dataIndex: "qt",
    key: "qt",
    render: (val) => (
      <div>
        <Button
          style={{ color: "gray" }}
          type="text"
          icon={<PlusCircleOutlined />}
        />
        <span style={{ marginRight: 5, marginLeft: 5 }}>4</span>
        <Button
          style={{ color: "gray" }}
          type="text"
          icon={<MinusCircleOutlined />}
        />
      </div>
    ),
  },
  {
    title: "السعر",
    dataIndex: "price",
    key: "price",
    render: (val) => <span style={{ color: "gray" }}>{val}</span>,
  },
];

export function Home() {
  return (
    <div className="page page-home">
      <Row gutter={[20, 20]}>
        <Col flex="0 1 460px">
          <Row>
            <Col span={24}>
              <Card className="paid-cards">
                <Table
                  pagination={false}
                  dataSource={paidItems}
                  columns={columns}
                />
              </Card>
            </Col>
            <Col span={24}>
              <Card className="discount-card">
                <div className="app-flex">
                  <span>قيمة الخصم (%)</span>
                  <InputNumber
                    min={0}
                    max={100}
                    formatter={(value) => `${value}%`}
                    parser={(value) => value.replace("%", "")}
                    defaultValue={0}
                  />
                </div>
              </Card>
            </Col>
            <Col span={24}>
              <Card className="final-paid">
                <div className="app-flex" style={{ marginTop: 20 }}>
                  <div>
                    <small>السعر النهائي</small>
                    <h1>32,000 IQD</h1>
                  </div>
                  <div>
                    <small>السعر بدون خصم</small>
                    <h3>34,000 IQD</h3>
                  </div>
                </div>
              </Card>
            </Col>

            <Col span={8}>
              <Card className="reset-btn" hoverable>
                <ClearOutlined />
              </Card>
            </Col>
            <Col span={16}>
              <Card className="print-btn" hoverable>
                <PrinterOutlined style={{ marginLeft: 10 }} /> طباعة
              </Card>
            </Col>
          </Row>
        </Col>
        <Col flex="1">
          <Row>
            <Col span={24}>
              <Card
                className="items-cards"
                title={
                  <div className="app-flex">
                    <h4>قائمة الاصناف</h4>
                    <Input.Search
                      style={{ width: 300 }}
                      placeholder="بحث . . ."
                    />
                  </div>
                }
              >
                <Row gutter={[25, 25]}>
                  {items.map((item) => (
                    <Col key={item.id} span={6}>
                      <Card
                        className="items-card"
                        hoverable
                        style={{ width: "100%" }}
                        cover={
                          <img
                            style={{
                              height: "10vw",
                              width: "100%",
                              objectFit: "cover",
                            }}
                            alt="example"
                            src={item.image}
                          />
                        }
                      >
                        <Meta
                          title={
                            <div>
                              <h4
                                style={
                                  !item.active
                                    ? {
                                        color: "#35353540",
                                        textDecoration: "line-through",
                                      }
                                    : {}
                                }
                              >
                                {item.name}
                              </h4>
                              <Tag
                                style={{ margin: 0 }}
                                color={item.active ? "success" : "error"}
                              >
                                {item.price} IQD
                              </Tag>
                            </div>
                          }
                        />
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Card>
            </Col>
            <Col span={24}>
              <Row className="filter-btns">
                <Col span={3}>
                  <Card className="filter-btn" hoverable>
                    <img src={require("../assets/svg/icon7.svg")} /> الكل
                  </Card>
                </Col>
                <Col span={3}>
                  <Card className="filter-btn active" hoverable>
                    <img src={require("../assets/svg/icon11.svg")} /> اكلات
                    شرقية
                  </Card>
                </Col>
                <Col span={3}>
                  <Card className="filter-btn" hoverable>
                    <img src={require("../assets/svg/icon9.svg")} /> اكلات غربية
                  </Card>
                </Col>
                <Col span={3}>
                  <Card className="filter-btn" hoverable>
                    <img src={require("../assets/svg/icon10.svg")} /> وجبات
                    سريعة
                  </Card>
                </Col>
                <Col span={3}>
                  <Card className="filter-btn" hoverable>
                    <img src={require("../assets/svg/icon12.svg")} /> مشاوي
                  </Card>
                </Col>
                <Col span={3}>
                  <Card className="filter-btn" hoverable>
                    <img src={require("../assets/svg/icon13.svg")} /> عصائر
                  </Card>
                </Col>
                <Col span={3}>
                  <Card className="filter-btn" hoverable>
                    <img src={require("../assets/svg/icon6.svg")} /> مقبلات
                  </Card>
                </Col>
                <Col span={3}>
                  <Card className="filter-btn" hoverable>
                    <img src={require("../assets/svg/icon5.svg")} /> تحلية
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
