import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button, Stack } from "@mui/material";

const Navigation = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <Stack direction="row" spacing={2}>
      <Button component={Link} to="/" color="inherit">
        Home
      </Button>
      {isLoggedIn && (
        <Button component={Link} to="/contacts" color="inherit">
          Contacts
        </Button>
      )}
    </Stack>
  );
};

export default Navigation;
