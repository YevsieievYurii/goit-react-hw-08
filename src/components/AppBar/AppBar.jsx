import Navigation from "../Navigation/Navigation";
import AuthNav from "../AuthNav/AuthNav";
import UserMenu from "../UserMenu/UserMenu";
import { useSelector } from "react-redux";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

const CustomAppBar = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);

  return (
    <AppBar position="static" color="primary">
      <Container maxWidth="lg">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            paddingY: 1,
          }}
        >
          <Navigation />
          <Box>{isLoggedIn ? <UserMenu /> : <AuthNav />}</Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default CustomAppBar;
