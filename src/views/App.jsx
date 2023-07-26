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