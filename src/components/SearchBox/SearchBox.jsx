import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import styles from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector((state) => state.filter.filterValue);

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <input
      className={styles.searchInput}
      type="text"
      value={filterValue}
      placeholder="Find contact by name"
      onChange={handleChange}
    />
  );
};

export default SearchBox;
