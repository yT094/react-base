/*
 * @Author: ycs 1748780248@qq.com
 * @Date: 2022-07-10 21:09:35
 * @LastEditors: ycs 1748780248@qq.com
 * @LastEditTime: 2022-07-10 22:32:22
 * @FilePath: \react-base\src\comment\components\CommentInput.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { PureComponent } from "react";

import { Input, Button } from "antd";
import moment from "moment";

const { TextArea } = Input;

export default class CommentInput extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
    };
  }
  render() {
    const { content } = this.state;
    return (
      <div>
        <TextArea
          rows={4}
          value={content}
          onChange={(e) => this.handleChange(e)}
        />
        <Button
          type="primary"
          onClick={(e) => {
            this.addComment();
          }}
        >
          添加评论
        </Button>
      </div>
    );
  }

  handleChange(event) {
    this.setState({
      content: event.target.value,
    });
  }

  addComment() {
    // 将数据整合
    const commentInfo = {
      id: moment().valueOf(),
      avatar:
        "https://upload.jianshu.io/users/upload_avatars/1102036/c3628b478f06.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240",
      nickname: "coderycs",
      datetime: moment(),
      content: this.state.content,
    };

    // 向父组件传来的方法中写数据
    this.props.submitComment(commentInfo);

    // 数据传递后, 将输入框清空
    this.setState({
      content: "",
    });
  }
}
