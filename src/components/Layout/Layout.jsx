import AppBar from "../AppBar/AppBar";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import { Container, Box } from "@mui/material";

const Layout = () => {
  return (
    <>
      <AppBar />
      <Toaster position="top-right" reverseOrder={false} />
      <Container maxWidth="md">
        <Box component="main" py={4}>
          <Outlet />
        </Box>
      </Container>
    </>
  );
};

export default Layout;
