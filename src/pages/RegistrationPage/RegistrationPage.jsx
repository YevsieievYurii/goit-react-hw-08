import { Container, Box, Typography } from "@mui/material";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";

const RegistrationPage = () => {
  return (
    <Container maxWidth="sm">
      <Box py={6}>
        <Typography variant="h4" textAlign="center" gutterBottom>
          Register
        </Typography>
        <RegistrationForm />
      </Box>
    </Container>
  );
};

export default RegistrationPage;
