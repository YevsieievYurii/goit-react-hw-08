import { Container, Typography, Box } from "@mui/material";

const HomePage = () => {
  return (
    <Container maxWidth="md">
      <Box textAlign="center" py={6}>
        <Typography variant="h3" gutterBottom>
          Welcome to Contact Book
        </Typography>
        <Typography variant="h6">
          Please register or log in to manage your contacts.
        </Typography>
      </Box>
    </Container>
  );
};

export default HomePage;
