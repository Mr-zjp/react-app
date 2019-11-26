/*
 * @Author: your name
 * @Date: 2019-11-20 10:51:09
 * @LastEditTime: 2019-11-21 15:06:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-app\src\router.js
 */
/*router.js 页面里的代码
HashRouter:有#号
BrowserRouter:没有#号
Route：设置路由与组件关联
Switch:只要匹配到一个地址不往下匹配，相当于for循环里面的break
Link:跳转页面，相当于vue里面的router-link
exact :完全匹配路由
Redirect:路由重定向
*/
import React, { Component } from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import Layout from './components/layout/layout'
export default class Routers extends Component {
  render() {
    return (
      <div>
        <React.Fragment>
          <Router>
            <React.Fragment>
              <Route exact component={Layout}></Route>
            </React.Fragment>
          </Router>
        </React.Fragment>
      </div>
    )
  }
}
