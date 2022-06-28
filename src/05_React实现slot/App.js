/*
 * @Author: ycs 1748780248@qq.com
 * @Date: 2022-06-28 13:28:19
 * @LastEditors: ycs 1748780248@qq.com
 * @LastEditTime: 2022-06-28 14:04:43
 * @FilePath: \react-base\src\05_React实现slot\App.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from "react";
import NavBar from "./NavBar";

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar
          leftSlot={<span>left</span>}
          centerSlot={<a href="/#">center</a>}
          rightSlot={<strong>right</strong>}
        ></NavBar>
      </div>
    );
  }
}
