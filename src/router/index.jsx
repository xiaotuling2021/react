import Login from "@/views/Login";
import { Navigate } from "react-router-dom";
import React, { lazy } from "react";
import Home from "@/views/Home";
import NotFound from "@/views/404";
const Page1 = lazy(() => import("@/views/Page/Page1"));
const Page2 = lazy(() => import("@/views/Page/Page2"));
const Page3 = lazy(() => import("@/views/Page/Page3"));
const Page4 = lazy(() => import("@/views/Page/Page4"));
// 懒加载模式的组件，外面需要套一层Loading的提示加载组件
const withLoadingComp = (comp) => {
  return <React.Suspense fallback={<div>Loading</div>}>{comp}</React.Suspense>;
};
const routes = [
  {
    path: "/",
    element: <Navigate to="/login" />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/page1",
        element: withLoadingComp(<Page1 />)
      },
      {
        path: "/page2",
        element: withLoadingComp(<Page2 />)
      },
      {
        path: "/page3",
        element: withLoadingComp(<Page3 />)
      },
      {
        path: "/page4",
        element: withLoadingComp(<Page4 />)
      },
    ]
  },
  {
    path: '/404',
    element: <NotFound />
  },
  {
    path: "*",
    element: <Navigate to="/404" />
  }
];
export default routes;