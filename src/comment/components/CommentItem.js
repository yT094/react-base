/*
 * @Author: ycs 1748780248@qq.com
 * @Date: 2022-07-10 21:09:46
 * @LastEditors: ycs 1748780248@qq.com
 * @LastEditTime: 2022-07-10 23:16:34
 * @FilePath: \react-base\src\comment\components\CommentItem.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { PureComponent } from "react";

import { Comment, Avatar, Tooltip } from "antd";

import { DeleteOutlined } from "@ant-design/icons";

export default class CommentItem extends PureComponent {
  render() {
    const { nickname, avatar, content, datetime } = this.props.comment;
    return (
      <Comment
        author={<a href="/#">{nickname}</a>}
        avatar={<Avatar src={avatar} alt={nickname}></Avatar>}
        content={<p>{content}</p>}
        datetime={
          <Tooltip title={datetime.format("YYYY-MM-DD")}>
            <span>{datetime.fromNow()}</span>
          </Tooltip>
        }
        actions={[
          <span onClick={(e) => this.removeItem()}>
            <DeleteOutlined />
            删除
          </span>,
        ]}
      ></Comment>
    );
  }

  // 触发删除事件
  removeItem() {
    this.props.removeItem();
  }
}
