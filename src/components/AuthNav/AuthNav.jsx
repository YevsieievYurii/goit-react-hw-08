import { Link } from "react-router-dom";
import css from "./AuthNav.module.css";

const AuthNav = () => {
  return (
    <nav className={css.nav}>
      <Link className={css.link} to="/login">
        Login
      </Link>
      <Link className={css.link} to="/register">
        Register
      </Link>
    </nav>
  );
};

export default AuthNav;
