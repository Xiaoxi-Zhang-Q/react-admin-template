import React from "react";
import { ConfigProvider, theme } from "antd";
import router from "/@/router";
import { useRoutes } from "react-router-dom";

const App: React.FC = () => {
  const outlet = useRoutes(router);
  return <ConfigProvider
    theme={{
      // 1. 单独使用暗色算法
      algorithm: theme.defaultAlgorithm,
      // 2. 组合使用暗色算法与紧凑算法
      // algorithm: [theme.darkAlgorithm, theme.compactAlgorithm],
    }}
  >
    {outlet}
  </ConfigProvider>;
};

export default App;
