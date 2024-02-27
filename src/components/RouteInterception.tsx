// 路由拦截，未登录跳转到登录页
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "/@/store";
import { Navigate, useLocation } from "react-router-dom";

// 定义props接口
interface ChildProps {
  children: React.ReactElement;
}
const RouteInterception: React.FC<ChildProps> = (props) => {
  const { pathname } = useLocation();
  const { token } = useSelector((state: RootState) => state.user);
  if (pathname === "/login" && !token) return props.children;
  return token ? props.children : <Navigate to={"/login"} replace></Navigate>;
};
export default RouteInterception;
