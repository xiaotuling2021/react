import {DesktopOutlined} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu } from 'antd';
import { useState } from 'react';
const { Header, Content, Footer, Sider } = Layout;
import { Outlet } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';
const items = [
  {
    label: "Option1",
    key: "/page1",
    icon: <DesktopOutlined />,
    children: [
      {
        label: "Page1",
        key: "/page1",
      },
      {
        label: "Page2",
        key: "/page2"
      }
    ]
  },
  {
    label: "Option2",
    key: "/page3",
    icon: <DesktopOutlined />,
    children: [
      {
        label: "Page3",
        key: "/page3",
      },
      {
        label: "Page3",
        key: "/page4"
      }
    ]
  },
];
const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigateTo = useNavigate();
  const currentRoute = useLocation();
  const menuClick = (e) => {
    // 点击跳转到对应的路由
    navigateTo(e.key);
  };
  let firstOpenkey = "";
  function findKey(obj) {
    return obj.key === currentRoute.pathname
  }
  for (let i = 0; i < items.length; i++) {
    if (items[i]['children'] && items[i]['children'].length > 0 && items[i]['children'].find(findKey)) {
      firstOpenkey = items[i].key;
      break;
    }
  }
  const [openKeys, setopenKeys] = useState([firstOpenkey]);
  const handleOpenChange = (keys) => {
    setopenKeys([keys[keys.length - 1]])
    console.log(111);
    console.log(keys);
  }
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="logo" />
        <Menu
          theme="dark"
          defaultSelectedKeys={[currentRoute.pathname]}
          mode="inline"
          items={items}
          onClick={menuClick}
          // 某项菜单展开和回收的事件
          onOpenChange={handleOpenChange}
          // 当前菜单展开项的数组
          openKeys={openKeys}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
        </Header>
        <Content
          style={{
            margin: '16px 16px 0',
          }}
        >
          <Outlet />
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
export default App;