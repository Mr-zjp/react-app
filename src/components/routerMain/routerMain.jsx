import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import AsyncRouter from '../lazyRouter/asyncRouter'
const Home = AsyncRouter(() => import("../../views/index/home"))
const NewsPage = AsyncRouter(() => import("../../views/news/news"))
const DetailPage = AsyncRouter(() => import("../../views/news/detail.jsx"))
export default class routerMain extends Component {
  render () {
    return (
      <div>
        <Switch>
          <Route path='/home' exact component={ Home }></Route>
          <Route path='/news' exact component={ NewsPage }></Route>
          <Route path='/news/detail' exact component={ DetailPage }></Route>
        </Switch>
      </div>
    )
  }
}
