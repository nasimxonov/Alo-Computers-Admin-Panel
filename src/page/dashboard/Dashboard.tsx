import { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { FaClipboardList } from "react-icons/fa";
import { MdOutlineSettingsSuggest } from "react-icons/md";
import { MdBorderColor } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

import { Button, Layout, Menu, theme } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
const { Header, Sider, Content } = Layout;

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const navigate = useNavigate();

  return (
    <Layout>
      <Sider  className="!bg-[#ff5b00]" trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical  gap-2 h-6 w-full py-10 flex items-center justify-center text-2xl text-[#fff]">
          <UserOutlined />
          {collapsed ? "" : <p className="font-[500]">ALO ADMIN</p>}
        </div>
        <Menu
          theme="dark"
          mode="inline"
          className="h-screen  !bg-[#ff5b00]  !px-2"
          defaultSelectedKeys={["1"]}
          
          items={[
            {
              key: "1",
              icon: <FaClipboardList className="!text-xl" />,
              label: <p className="text-xl ">Category</p>,
              onClick: () => navigate("/"),
            },
            {
              key: "2",
              icon: <MdOutlineSettingsSuggest className="!text-xl" />,
              label: <p className="!text-xl ">Suggest</p>,
              onClick: () => navigate("/suggest"),
            },
            {
              key: "3",
              icon: <MdBorderColor className="!text-xl " />,
              label: <p className="text-xl ">Order</p>,
              onClick: () => navigate("/order"),
            },
            {
              key: "4",
              icon: <CgProfile className="!text-xl " />,
              label: <p className="text-xl ">Profile</p>,
              onClick: () => navigate("/profile"),
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
         <Outlet/>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
