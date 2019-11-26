/*
 * @Author: your name
 * @Date: 2019-11-05 10:09:10
 * @LastEditTime: 2019-11-21 15:03:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-app\src\index.js
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/common/public.css';
import Router from './routers';
import Layout from './components/layout/layout'
import * as serviceWorker from './serviceWorker';
function App () {
  return (
    <React.Fragment>
      <Router>
        <Layout />
      </Router>
    </React.Fragment>
  )
}
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
