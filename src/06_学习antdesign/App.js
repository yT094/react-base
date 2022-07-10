/*
 * @Author: ycs 1748780248@qq.com
 * @Date: 2022-07-10 20:02:30
 * @LastEditors: ycs 1748780248@qq.com
 * @LastEditTime: 2022-07-10 20:10:11
 * @FilePath: \react-base\src\06_学习antdesign\App.js
 * @Description: App.js
 */

import { PoweroffOutlined } from "@ant-design/icons";
import { Button, Space } from "antd";
import React, { useState } from "react";

const App = () => {
  const [loadings, setLoadings] = useState([]);

  const enterLoading = (index) => {
    setLoadings((prevLoadings) => {
      const newLoadings = [...prevLoadings];
      newLoadings[index] = true;
      return newLoadings;
    });
    setTimeout(() => {
      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = false;
        return newLoadings;
      });
    }, 6000);
  };

  return (
    <>
      <Space
        style={{
          width: "100%",
        }}
      >
        <Button type="primary" loading>
          Loading
        </Button>
        <Button type="primary" size="small" loading>
          Loading
        </Button>
        <Button type="primary" icon={<PoweroffOutlined />} loading />
      </Space>

      <Space
        style={{
          width: "100%",
        }}
      >
        <Button
          type="primary"
          loading={loadings[0]}
          onClick={() => enterLoading(0)}
        >
          Click me!
        </Button>
        <Button
          type="primary"
          icon={<PoweroffOutlined />}
          loading={loadings[1]}
          onClick={() => enterLoading(1)}
        >
          Click me!
        </Button>
        <Button
          type="primary"
          icon={<PoweroffOutlined />}
          loading={loadings[2]}
          onClick={() => enterLoading(2)}
        />
      </Space>
    </>
  );
};

export default App;
