import React, { useState, useRef } from "react";
import { Button, Card, Row, Col, Input, Select, Popover } from "antd";
import { MainStore } from "../store";
import { PicCenterOutlined } from "@ant-design/icons";
import Keyboard from "react-simple-keyboard";

export function Login() {
  const { setIsLogin } = MainStore();
  const [layoutName, setLayoutName] = useState("default");
  const [password, setPassword] = useState("");

  const onChange = input => {
    setPassword(input);
    console.log("Input changed", input);
  };

  const onKeyPress = button => {
    console.log("Button pressed", button);
    if (button === "{shift}" || button === "{lock}") handleShift();
  };

  const handleShift = () => {
    setLayoutName(layoutName === "default" ? "shift" : "default")
  };

  const onChangeInput = event => {
    const password = event.target.value;
    setPassword(password);
    //keyboard.setInput(input);
  };

  const keyboardComp = () => {
    return (
      <Keyboard
        //keyboardRef={(r) => (keyboard = r)}
        layoutName={layoutName}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
    );
  };

  return (
    <div className="page page-login">
      <Card style={{ width: 360 }} bordered={false}>
        <Row gutter={[20, 20]}>
          <Col span={24}>
            <Select  size="large" placeholder="اختر اسم المستخدم" style={{ width: "100%" }}>
              <Select.Option>murtadha999</Select.Option>
              <Select.Option>shdkansh89</Select.Option>
              <Select.Option>237yshg</Select.Option>
            </Select>
          </Col>
          <Col span={24}>
            <Input.Password
              placeholder="كلمة المرور"
              value={password}
              size="large"
              onChange={onChangeInput}
              prefix={
                <Popover
                  className="login-pop"
                  content={keyboardComp()}
                  trigger="click"
                  placement="bottomRight"
                  // visible={this.state.visible}
                  // onVisibleChange={this.handleVisibleChange}
                >
                  <PicCenterOutlined
                    style={{ color: "gray", marginLeft: 10 }}
                  />
                </Popover>
              }
            />
          </Col>
          <Col span={24}>
            <Button
              style={{ marginTop: 10 }}
              block
              size="large"
              type="primary"
              onClick={() => setIsLogin(true)}
            >
              تسجيل دخول
            </Button>
          </Col>
        </Row>
      </Card>
      <span className="brand-msg">Designed and developed in <a href="#">PureTik</a>.</span>
    </div>
  );
}
