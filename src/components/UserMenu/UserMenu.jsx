import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/operations";
import css from "./UserMenu.module.css";

const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.auth.user.name);

  const handleLogout = () => dispatch(logout());

  return (
    <div className={css.menu}>
      <span>Welcome, {userName}!</span>
      <button className={css.button} onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
