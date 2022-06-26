/*
 * @Author: ycs 1748780248@qq.com
 * @Date: 2022-06-26 16:15:55
 * @LastEditors: ycs 1748780248@qq.com
 * @LastEditTime: 2022-06-26 17:11:51
 * @FilePath: \react-base\src\App.js
 * @Description: Tabcontrol 组件演示
 */
import React, { Component } from "react";

import TabControl from "./TabControl";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.titles = ["新款", "流行", "精选"];
    this.state = {
      currentTitle: "新款",
    };
  }

  render() {
    const { currentTitle } = this.state;
    return (
      <div>
        <TabControl
          onItemClick={(index) => this.itemClick(index)}
          titles={this.titles}
        />
        <h2>{currentTitle}</h2>
      </div>
    );
  }

  itemClick(index) {
    this.setState({
      currentTitle: this.titles[index],
    });
  }
}
