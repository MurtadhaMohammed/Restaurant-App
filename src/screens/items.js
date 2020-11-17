import React, { useState } from "react";
import items from "../fake/items";
import { Card, Input, Row, Col, Tag, Button } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { AddModal } from "../components/items";

const { Meta } = Card;
export function Items() {
  const [isAdd , setIsAdd] = useState(false)
  return (
    <div className="page">
      <Row gutter={[30, 30]}>
        <Col span={24}>
          <div className="app-flex">
            <Input.Search style={{ width: 400 }} placeholder="بحث..." />

            <Button
              type="primary"
              style={{ width: 120 }}
              icon={<PlusOutlined />}
              onClick={()=> setIsAdd(true)}
            >
              {" "}
              انشاء
            </Button>
          </div>
        </Col>

        {items.map((item) => (
          <Col key={item.id} xl={6} lg={8}>
            <Card
              hoverable
              style={{ width: "100%" }}
              cover={
                <img
                  style={{ height: '14vw', width: "100%", objectFit: "cover" }}
                  alt="example"
                  src={item.image}
                />
              }
              actions={[
                <SettingOutlined key="setting" />,
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />,
              ]}
            >
              <Meta
                title={
                  <div className="app-flex">
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
      <AddModal
        visible={isAdd}
        onCancel={()=> setIsAdd(false)}
        onSubmit={()=> setIsAdd(false)}
      />
    </div>
  );
}
