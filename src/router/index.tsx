import { Navigate } from "react-router-dom";
import Login from "/@/pages/login";
import Home from "/@/pages/login";

const router = [
  {
    path: "/",
    element: <Navigate to="/home" />,
  }, {
    path: "/login",
    element: <Login />,
  }, {
    path: "/home",
    element: <Home />,
  }];
export default router;