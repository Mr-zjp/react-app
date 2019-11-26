/*
 * @Author: your name
 * @Date: 2019-11-05 10:09:10
 * @LastEditTime: 2019-11-21 14:58:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-app\src\App.js
 */
import React, { Component} from 'react'
import { Layout, Icon } from 'antd';
import SideBar from '../nav/sideBar'
import '../../assets/css/sideBar.css'
import RouterMain from '../routerMain/routerMain.jsx'
const { Header, Sider, Content } = Layout;
export default class App extends Component {
  constructor() {
    super()
    this.state = {
      collapsed: false,
    }
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  render () {
    return (
      <div>
        <Layout style={ { maxHeight: '100vh' } }>
          <Sider trigger={ null } collapsible collapsed={ this.state.collapsed }>
            <div className="logo" />
            <SideBar />
          </Sider>
          <Layout>
            <Header style={ { background: '#fff', paddingLeft: 22, } }>
              <Icon
                className="trigger"
                type={ this.state.collapsed ? 'menu-unfold' : 'menu-fold' }
                onClick={ this.toggle }
              />
            </Header>
            <Content
              style={ {
                margin: '24px 16px',
                padding: 24,
                background: '#fff',
                minHeight: 280,
              } }
            >
              <RouterMain />
            </Content>
          </Layout>
        </Layout>
      </div >
    )
  }
}
