import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import { TextField } from "@mui/material";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector((state) => state.filter.filterValue);

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <TextField
      label="Search contacts"
      variant="outlined"
      fullWidth
      value={filterValue}
      onChange={handleChange}
      sx={{ mb: 3 }}
    />
  );
};

export default SearchBox;
