/*
 * @Author: ycs 1748780248@qq.com
 * @Date: 2022-07-10 21:09:21
 * @LastEditors: ycs 1748780248@qq.com
 * @LastEditTime: 2022-07-10 23:17:11
 * @FilePath: \react-base\src\comment\App.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { PureComponent } from "react";

import CommentItem from "./components/CommentItem";
import CommentInput from "./components/CommentInput";

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      commentList: [],
    };
  }
  render() {
    return (
      <div style={{ width: "500px", padding: "16px" }}>
        {this.state.commentList.map((item, index) => {
          return (
            <CommentItem
              key={item.id}
              comment={item}
              removeItem={(e) => this.removeComment(index)}
            />
          );
        })}

        <CommentInput submitComment={this.submitComment.bind(this)} />
      </div>
    );
  }

  // 向子组件传一个回调函数
  submitComment(info) {
    // 浅拷贝
    this.setState({
      commentList: [info, ...this.state.commentList],
    });
  }

  // 向子组件传入一个删除的回调函数
  removeComment(index) {
    const newCommentList = [...this.state.commentList];
    newCommentList.splice(index, 1);
    // 更新数据
    this.setState({
      commentList: newCommentList,
    });
  }
}
