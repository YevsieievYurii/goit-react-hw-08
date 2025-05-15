import { Container, Box } from "@mui/material";
import LoginForm from "../../components/LoginForm/LoginForm";

const LoginPage = () => {
  return (
    <Container maxWidth="sm">
      <Box py={6}>
        <LoginForm />
      </Box>
    </Container>
  );
};

export default LoginPage;
