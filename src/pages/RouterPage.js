import {
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
  } from '@ant-design/icons';
  import { Layout, Menu, theme } from 'antd';
  import React, { useContext, useState } from 'react';
  import {
    BrowserRouter as Router,
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
    Switch, 
    Routes, redirect
  } from "react-router-dom";
import { Ingresar } from './Ingresar';
import { Cola } from './Cola';
import { CrearTicket } from './CrearTicket';
import { Escritorio } from './Escritorio';
import { UiContext } from '../context/UiContext';


  const { Header, Sider, Content } = Layout;

  

export const RouterPage = () => {
  const {ocultarMenu} = useContext(UiContext);
  return (
    <Router>
    <Layout
        style={{
            height:'100vh'
        }}
    >
    <Sider collapsedWidth={0} hidden={ocultarMenu} breakpoint='md'>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['1']} >
        <Menu.Item key="1" icon={<UserOutlined />}>
            <Link to="/ingresar">
                Ingresar
            </Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<UserOutlined />}>
            <Link to="/cola">
                Cola de Tickets
            </Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<UserOutlined />}>
            <Link to="/crear">
                Crear tickets
            </Link>
        </Menu.Item>
      </Menu>
    </Sider>
    <Layout className="site-layout">
  
      <Content
        style={{
          margin: '24px 16px',
          padding: 24,
          minHeight: 280,
          //background: colorBgContainer,
        }}
      >
        <Routes>
            <Route path="/ingresar" element={<Ingresar />} />
            <Route path="/cola" element={<Cola />} />
            <Route path="/crear" element={<CrearTicket />} />
            <Route path="/escritorio" element={<Escritorio />} />
            <Route path="*" element={<Ingresar />} />
        </Routes>
      </Content>
    </Layout>
  </Layout>
  </Router>
  )
}
