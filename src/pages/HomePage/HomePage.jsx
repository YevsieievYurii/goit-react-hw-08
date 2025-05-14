import css from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={css.wrapper}>
      <h2>Welcome to Contact Book</h2>
      <p>Please register or log in to manage your contacts.</p>
    </div>
  );
};

export default HomePage;
