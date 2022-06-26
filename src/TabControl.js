/*
 * @Author: ycs 1748780248@qq.com
 * @Date: 2022-06-26 16:25:33
 * @LastEditors: ycs 1748780248@qq.com
 * @LastEditTime: 2022-06-26 17:25:10
 * @FilePath: \react-base\src\TabControl.js
 * @Description: tabControl 组件
 */
import React, { Component } from "react";
import PropTypes from "prop-types";

export default class TabControl extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentIndex: 0,
    };
  }
  render() {
    const { titles } = this.props;
    const { currentIndex } = this.state;

    return (
      <div className="tab-control">
        {titles.map((item, index) => {
          return (
            <div
              key={index}
              className={
                "tab-item " + (currentIndex === index ? "is-active" : "")
              }
              onClick={(e) => this.itemClick(index)}
            >
              <span>{item}</span>
            </div>
          );
        })}
      </div>
    );
  }

  itemClick(index) {
    this.setState({
      currentIndex: index,
    });
    const { onItemClick } = this.props;
    onItemClick(index);
  }
}

TabControl.propTypes = {
  titles: PropTypes.array.isRequired,
};
