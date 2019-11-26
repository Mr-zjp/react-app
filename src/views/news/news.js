/*
 * @Author: your name
 * @Date: 2019-11-20 13:56:28
 * @LastEditTime: 2019-11-21 10:04:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-app\src\views\news\news.js
 */
import React, { Component } from 'react'
export default class news extends Component {
  news = () => {
    this.props.history.push('/news/detail?id=2&title=特大新闻二')
  }
  render () {
    return (
      <div>
        <ul>
          <li onClick={ this.news }>特大新闻二</li>
        </ul>
      </div>
    )
  }
}
