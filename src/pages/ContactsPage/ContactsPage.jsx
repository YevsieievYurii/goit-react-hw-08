import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";

import {
  selectFilteredContacts,
  selectIsLoading,
  selectError,
} from "../../redux/contacts/selectors";

import {
  selectIsLoggedIn,
  selectIsRefreshing,
} from "../../redux/auth/selectors";

import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";

import {
  Container,
  Typography,
  Box,
  CircularProgress,
  Alert,
} from "@mui/material";

const ContactsPage = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    if (!isRefreshing && isLoggedIn) {
      dispatch(fetchContacts());
    }
  }, [dispatch, isRefreshing, isLoggedIn]);

  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>
        Your Contacts
      </Typography>

      <Box mb={3}>
        <SearchBox />
        <ContactForm />
      </Box>

      {isLoading && (
        <Box display="flex" justifyContent="center" mb={2}>
          <CircularProgress />
        </Box>
      )}

      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      <ContactList />
    </Container>
  );
};

export default ContactsPage;
