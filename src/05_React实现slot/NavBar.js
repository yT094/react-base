/*
 * @Author: ycs 1748780248@qq.com
 * @Date: 2022-06-28 13:28:44
 * @LastEditors: ycs 1748780248@qq.com
 * @LastEditTime: 2022-06-28 13:59:25
 * @FilePath: \react-base\src\05_React实现slot\NavBar.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from "react";

export default class NavBar extends Component {
  render() {
    const { leftSlot, centerSlot, rightSlot } = this.props;
    return (
      <div className="nav-bar">
        <div className="left">{leftSlot}</div>
        <div className="center">{centerSlot}</div>
        <div className="right">{rightSlot}</div>
      </div>
    );
  }
}
