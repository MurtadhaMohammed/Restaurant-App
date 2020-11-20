import React, { useEffect, useState } from "react";
import { HomeIcon, FoodIcon, SettingIcon, StatsIcon, UsersIcon } from "./icons";
import NavLink from "./navLink";
import { useLocation } from "react-router-dom";
import { Avatar, Menu, Dropdown } from "antd";
import { MainStore } from "../store";

import {
  UserOutlined,
  DownOutlined,
  EditOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

export default function AppContainer(props) {
  const {setIsLogin} = MainStore()
  const [path, setPath] = useState("/");
  let location = useLocation();

  useEffect(() => {
    setPath(location.pathname);
  }, [location]);

  const menu = (
    <Menu>
      <Menu.Item icon={<EditOutlined />}>تغيير كلمة المرور</Menu.Item>
      <Menu.Item onClick={()=> setIsLogin(false)} danger icon={<LogoutOutlined />}>
        تسجيل خروج
      </Menu.Item>
    </Menu>
  );

  const getTitle = (link) => {
    switch (link) {
      case "/items":
        return ["#faad14","شاشة الاصناف"];
        break;
      case "/users":
        return ["#40a9ff","المستخدمين والصلاحيات"];
        break;
      case "/reports":
        return ["#52c41a","شاشة الفواتير"];
        break;

      default:
        return ["#eb2f96","الصفحة الرئيسية"];
        break;
    }
  };

  return (
    <div className="app-navbar">
      <div className="app-menu">
        <div style={{ textAlign: "center" }}>
          <img
            style={{ marginBottom: 50, width: 30 }}
            src={require("../assets/logo.svg")}
          />
          <NavLink
            to={"/"}
            active={path === "/" ? true : false}
            icon={<HomeIcon />}
          />
          <NavLink
            to={"/items"}
            active={path === "/items" ? true : false}
            icon={<FoodIcon />}
          />
          <NavLink
            to={"/users"}
            active={path === "/users" ? true : false}
            icon={<UsersIcon />}
          />
          <NavLink
            to={"/reports"}
            active={path === "/reports" ? true : false}
            icon={<StatsIcon />}
          />
        </div>
        <NavLink icon={<SettingIcon />} />
      </div>
      <div className="app-container">
        <div className="app-header app-flex">
          <span style={{ fontSize: 18, fontWeight: "bold" }}>
            {" "}
            <div className="app-dot" style={{background: getTitle(path)[0]}}></div> {getTitle(path)[1]}
          </span>
          <Dropdown overlay={menu}>
            <a
              className="ant-dropdown-link"
              onClick={(e) => e.preventDefault()}
            >
              <div className="user-account">
                <DownOutlined style={{ color: "gray" }} />
                <h4>ابو سلام</h4>
                <Avatar
                  size="small"
                  style={{ backgroundColor: "#87d068" }}
                  icon={<UserOutlined />}
                />
              </div>
            </a>
          </Dropdown>
        </div>
        <div className="app-page"> {props.children}</div>
      </div>
    </div>
  );
}
