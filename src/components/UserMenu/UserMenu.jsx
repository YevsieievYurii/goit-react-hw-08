import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/operations";
import { Button, Stack, Typography } from "@mui/material";

const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.auth.user.name);

  const handleLogout = () => dispatch(logout());

  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <Typography variant="body1">Welcome, {userName}!</Typography>
      <Button variant="outlined" color="inherit" onClick={handleLogout}>
        Logout
      </Button>
    </Stack>
  );
};

export default UserMenu;
