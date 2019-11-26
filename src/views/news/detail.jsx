import React, { Component } from 'react'
import { localParam } from '../../assets/js/utils/index'
export default class detail extends Component {
  render () {
    return (
      <div>
        <button type="button" onClick={ this.props.history.go.bind(this, -1) }>返回</button>
        id：{ localParam(this.props.location.search).search.id },
        title:{ decodeURIComponent(localParam(this.props.location.search).search.title) }
      </div>
    )
  }
}
