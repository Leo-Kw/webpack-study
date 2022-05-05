'use strict'

import React from "react";
import ReactDOM from "react-dom";
import './search.less';
import img from './img/login_left_sel.png'

class Search extends React.Component {
  render() {
    return <div className="search-text">
      搜索文字12asd
      <img src={img} />
    </div>;
  }
}

ReactDOM.render(
  <Search />,
  document.getElementById('root')
)