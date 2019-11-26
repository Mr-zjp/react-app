/*
 * @Author: your name
 * @Date: 2019-11-05 10:09:10
 * @LastEditTime: 2019-11-21 15:08:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-app\src\App.js
 */
import React, { Component } from 'react'
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom'
export default class App extends Component {
  constructor() {
    super()
    this.state = {
      menuList: [
        {
          'path': '/home',
          'title': '首页',
          'icon': "folder",
          'children': []
        },
        {
          'path': '/func3',
          'title': '功能3',
          'icon': "dashboard",
          'children': [
            {
              'path': '/item',
              'title': '功能3-1',
              'icon': "thunderbolt",
              'children': [{
                'path': '/news',
                'icon': "video-camera",
                'title': '新闻',
                'children': []
              }]
            },
            {
              'path': '/func32',
              'title': '功能3-2',
              'icon': "video-camera",
              'children': []
            },
            {
              'path': '/func33',
              'icon': "video-camera",
              'title': '功能3-3',
              'children': []
            }
          ]
        }
      ]
    }
  }
  componentDidMount () {

  };
  renderSubMenu = ({ children, title, path, icon }) => {
    return (
      <Menu.SubMenu
        key={ path }
        title={
          <span>
            <Icon type={ icon } />
            <span>{ title }</span>
          </span>
        }
      >
        {
          children && children.map(item => {
            return item.children && item.children.length > 0 ? this.renderSubMenu(item) : this.renderMenuItem(item)
          })
        }
      </Menu.SubMenu>
    )
  }
  renderMenuItem = ({ title, path, icon }) => {
    return (
      <Menu.Item key={ path } >
        <Link to={ path }>
          <Icon type={ icon } />
          <span>{ title }</span>
        </Link>
      </Menu.Item>
    )
  }
  render () {
    return (
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={ ['1'] }
      >
        {
          this.state.menuList.map((item) => {
            return item.children && item.children.length > 0 ? this.renderSubMenu(item) : this.renderMenuItem(item)
          })
        }
      </Menu>
    )
  }
}
