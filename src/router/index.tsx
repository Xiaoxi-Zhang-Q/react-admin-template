import { Navigate } from "react-router-dom";
import Login from "/@/pages/login";
import Home from "/@/pages/home";
import Layout from "/@/layout";
const router = [
  {
    path: "/",
    element: <Navigate to="/home" />,
  }, {
    path: "/login",
    element: <Login />,
  }, {
    path: "/home",
    element: <Layout />,
    children: [
      {
        path: "index",
        element: <Home />,
      }
    ]
  }];
export default router;