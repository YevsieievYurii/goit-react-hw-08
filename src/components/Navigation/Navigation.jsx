import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import css from "./Navigation.module.css";

const Navigation = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <nav className={css.nav}>
      <Link to="/" className={css.link}>
        Home
      </Link>
      {isLoggedIn && (
        <Link to="/contacts" className={css.link}>
          Contacts
        </Link>
      )}
    </nav>
  );
};

export default Navigation;
