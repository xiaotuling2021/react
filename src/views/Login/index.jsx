import styles from './index.module.less';
import { useNavigate } from 'react-router-dom'
const Login = () => {
  const navigate = useNavigate()
  const onsubmit = () => {
    navigate("/home")
  }
  return (
    <div className={styles.container}>
      <div className={styles.login_box}>
      <h2>LOGIN</h2>
      <div className={styles.input_box}>
        <input type="text" placeholder="请输入用户名" />
      </div>
      <div className={styles.input_box}>
        <input type="password" placeholder="请输入密码" />
      </div>
      <button onClick={()=>onsubmit()}>登录</button>
    </div>
    </div>
  )
};
export default Login