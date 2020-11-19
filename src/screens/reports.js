import React from "react";
import {
  Row,
  Col,
  Card,
  Table,
  Button,
  Select,
  Tag,
  DatePicker,
  Input,
  Statistic,
  List,
  Avatar,
  Divider,
} from "antd";
import {
  FilterOutlined,
  MoreOutlined,
  SearchOutlined,
  LeftOutlined,
  RightOutlined,
  UserOutlined,
  ArrowDownOutlined
} from "@ant-design/icons";
import reports from "../fake/reports";

const columns = [
  {
    title: "",
    dataIndex: "id",
    key: "id",
    render: (val) => <Button type={"text"} icon={<MoreOutlined />} />,
  },
  {
    title: "رقم الفاتورة",
    dataIndex: "number",
    key: "number",
    render: (val) => (
      <span style={{ fontWeight: "bold", fontSize: 12 }}>{val}</span>
    ),
  },
  {
    title: "تاريخ البيع",
    dataIndex: "date",
    key: "date",
    render: (val) => (
      <span style={{ fontWeight: "bold", fontSize: 12, color: "gray" }}>
        {val}
      </span>
    ),
  },
  {
    title: "قيمة الخصم",
    dataIndex: "discount",
    key: "discount",
    render: (val) => <Tag>{val}%</Tag>,
  },
  {
    title: "السعر النهائي",
    dataIndex: "totalPrice",
    key: "totalPrice",
    render: (val) => <Tag color="success">{val} IQD</Tag>,
  },
  {
    title: "اسم البائع",
    dataIndex: "user",
    key: "user",
    render: (val) => <span style={{ color: "gray" }}>{val}</span>,
  },
];

const data = [
  {
    title: "ابو سلام",
    reports: 200,
    total: 130000,
  },
  {
    title: "عبد الله",
    reports: 2390,
    total: 167000,
  },
  {
    title: "محمد عبود",
    reports: 2330,
    total: 4500000,
  },
];

const InputFiled = (label, input) => (
  <div style={{ marginBottom: 10 }}>
    <p style={{ marginBottom: 6, color: "gray", fontSize: 12 }}>{label}</p>
    {input}
  </div>
);

const { Option } = Select;

export function Reports() {
  return (
    <div className="page reports-page">
      <Row gutter={[20, 20]}>
        <Col span={18}>
          <Card
            className="report-table"
            // title={
            //   <div>
            //     <FileSyncOutlined />
            //     <span style={{ marginRight: 10 }}>ارشيف الفواتير</span>
            //   </div>
            // }
          >
            <Table pagination={false} columns={columns} dataSource={reports} />
            <div className="table-footer">
              <span>عدد السجلات الكلي {20}</span>
              <div className="paginate-info">
                <Button
                  type="text"
                  // disabled={
                  //   props.page == Math.ceil(props.count / 10) ? true : false
                  // }
                  //onClick={() => props.setPage(props.page + 1)}
                >
                  <RightOutlined style={{ color: "gray" }} />
                </Button>

                <span>10 / 1</span>
                <Button
                  type="text"
                  //disabled={props.page == 1 ? true : false}
                  //onClick={() => props.setPage(props.page - 1)}
                >
                  <LeftOutlined style={{ color: "gray" }} />
                </Button>
              </div>
            </div>
          </Card>
        </Col>
        <Col span={6}>
          <Row >
            <Col span={24}>
              <Card
                title={
                  <div className="app-flex">
                    <div>
                      <FilterOutlined />
                      <span style={{ marginRight: 10 }}>فلترة النتائج</span>
                    </div>
                    <Button type="link">بحـث</Button>
                  </div>
                }
              >
                <Row gutter={[20, 20]}>
                  <Col span={24}>
                    <Input
                      suffix={<SearchOutlined style={{ color: "#ccc" }} />}
                      placeholder="بحث . . ."
                    />
                  </Col>
                  <Col span={24}>
                    {InputFiled(
                      "التاريخ",
                      <DatePicker.RangePicker
                        showNow
                        placeholder={["بداية", "نهاية"]}
                        style={{ width: "100%" }}
                      />
                    )}
                  </Col>

                  <Col span={14}>
                    {InputFiled(
                      "اسم البائع",
                      <Select
                        allowClear
                        placeholder="الكل"
                        style={{ width: "100%" }}
                      >
                        <Option value="1">ابو سلام</Option>
                        <Option value="2">عبد الله</Option>
                      </Select>
                    )}
                  </Col>
                  <Col span={10}>
                    {InputFiled(
                      "الخصومات",
                      <Select
                        allowClear
                        placeholder="الكل"
                        style={{ width: "100%" }}
                      >
                        <Option value="1">بدون خصم</Option>
                        <Option value="2">خصم</Option>
                      </Select>
                    )}
                  </Col>
                  {/* <Col span={24}>
                    <Button block size="large" type="primary" disabled>بحث</Button>
                  </Col> */}
                </Row>
              </Card>
            </Col>
            <Col span={24}>
              <Card>
                <Statistic
                  suffix={"IQD"}
                  title="الوارد الكلي"
                  value={112893}
                  valueStyle={{ fontSize: 40 }}
                />
              </Card>
            </Col>
            <Col span={24}>
              <Card >
                <List
                  itemLayout="horizontal"
                  dataSource={data}
                  renderItem={(item) => (
                    <List.Item
                      extra={
                        <Statistic
                          prefix={<span style={{fontSize: 10}}>IQD</span>}
                          value={item.total}
                          valueStyle={{ fontSize: 14 }}
                        />
                      }
                    >
                      <List.Item.Meta
                        avatar={
                          <Avatar>
                            <UserOutlined />
                          </Avatar>
                        }
                        title={<a href="https://ant.design">{item.title}</a>}
                        //description={item.reports}
                      />
                    </List.Item>
                  )}
                />
                <Divider/>
                <Button size="small" type="link"  block icon={<ArrowDownOutlined />}>عرض المزيد</Button>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
