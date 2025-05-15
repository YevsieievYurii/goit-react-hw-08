import { Link } from "react-router-dom";
import { Button, Stack } from "@mui/material";

const AuthNav = () => {
  return (
    <Stack direction="row" spacing={2}>
      <Button component={Link} to="/login" variant="outlined" color="inherit">
        Login
      </Button>
      <Button
        component={Link}
        to="/register"
        variant="outlined"
        color="inherit"
      >
        Register
      </Button>
    </Stack>
  );
};

export default AuthNav;
