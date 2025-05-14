import AppBar from "../AppBar/AppBar";
import { Outlet } from "react-router-dom";
import css from "./Layout.module.css";

const Layout = () => {
  return (
    <div className={css.container}>
      <AppBar />
      <main className={css.main}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
