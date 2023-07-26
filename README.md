# vite搭建React项目

1. npm命令创建项目

   ```
   npm create vite@latest
   ```

2. vite.config.js的配置文件

   ```
   import { defineConfig } from 'vite'
   import react from '@vitejs/plugin-react'
   import path from 'path'
   const __dirname = path.resolve();
   
   // https://vitejs.dev/config/
   export default defineConfig({
     plugins: [react()],
     resolve: {
       alias: {
         '@': path.resolve(__dirname, 'src')
       }
     },
     server: {
       host: "localhost",
       port: 8080,
       open: true
     }
   })
   ```

3. 目录创建

   ```
   在src目录下面创建目录
   1.assets:该目录下存放图片、全局样式，自行创建文件夹
   2.components:存放公共组件
   3.router:用于配置路由文件
   4.store:仓库，Redux等等
   5.views:页面
   ```

4. package.json

   ```
     "dependencies": {
       "@ant-design/icons": "^4.6.2",
       "antd": "^4.24.12",
       "less": "^4.1.3",
       "react": "^18.2.0",
       "react-dom": "^18.2.0",
       "react-redux": "^8.1.1",
       "react-router-dom": "^6.14.2",
       "reset-css": "^5.0.2"
     },
   ```

5. src目录下main.jsx

   ```
   import ReactDOM from 'react-dom/client'
   // 1.样式初始化
   import "reset-css";
   // 2.UI框架等样式
   // 3.全局样式
   import "@/assets/styles/global.less";
   // 4.组件样式
   import App from '@/views/App.jsx'
   import { BrowserRouter } from 'react-router-dom';
   
   ReactDOM.createRoot(document.getElementById('root')).render(
     <BrowserRouter>
       <App />
     </BrowserRouter>   
   )
   ```



6. 全局样式global.less

   ```
   * {
     margin: 0;
     padding: 0;
   }
   body {
     background-color: #eee;
     // 禁用文字选中
     user-select: none;
   }
   
   img {
     // 禁用图片拖拽
     -webkit-user-drag: none;
   }
   ```

7. 配置路由

   ```
   import Login from "@/views/Login";
   import { Navigate } from "react-router-dom";
   import React, { lazy } from "react";
   import Home from "@/views/Home";
   import NotFound from "@/views/404";
   const Page1 = lazy(() => import("@/views/Page/Page1"));
   const Page2 = lazy(() => import("@/views/Page/Page2"));
   // 懒加载模式的组件，外面需要套一层Loading的提示加载组件
   const withLoadingComp = (comp) => {
     <React.Suspense fallback={<div>Loading</div>}>{comp}</React.Suspense>;
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
       path: "/home",
       element: <Home />,
       children: [
         {
           path: "/page1",
           element: withLoadingComp(<Page1 />)
         },
         {
           path: "/page2",
           element: withLoadingComp(<Page2 />)
         }
       ]
     },
     {
       path: "*",
       element: <NotFound />
     }
   ];
   export default routes;
   ```

   

8. src/views目录下App.jsx

   ```
   import "antd/dist/antd.css";
   import { useRoutes } from "react-router-dom";
   import router from "@/router";
   const App = () => {
     const outlet = useRoutes(router);
     return (
       <div className="app">
         {outlet}
       </div>
     )
   };
   export default App
   ```

   