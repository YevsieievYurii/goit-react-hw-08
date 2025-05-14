import css from "./HomePage.module.css";
import { LoginForm } from "../../components/LoginForm/LoginForm";

const LoginPage = () => {
  return (
    <div className={css.wrapper}>
      <h2>Login</h2>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
