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
