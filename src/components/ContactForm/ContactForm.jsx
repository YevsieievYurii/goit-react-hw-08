import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { addContact } from "../../redux/contacts/operations";
import toast from "react-hot-toast";

import { TextField, Button, Box, Stack, Typography } from "@mui/material";

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, "The name must contain at least 3 characters.")
    .max(50, "The name must not exceed 50 characters.")
    .required("Name is required"),
  number: Yup.string()
    .min(10, "Phone number must contain at least 10 characters")
    .max(15, "Phone number must not exceed 15 characters.")
    .required("Phone number is required"),
});

const initialValues = {
  name: "",
  number: "",
};

const ContactForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        dispatch(addContact(values))
          .unwrap()
          .then(() => {
            toast.success("Contact added successfully!");
            resetForm();
          })
          .catch((error) => {
            console.error("Error adding contact: ", error);
            toast.error("Failed to add contact");
          });
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <Stack spacing={2} maxWidth={400} marginBottom={3}>
            <Typography variant="h6">Add New Contact</Typography>

            <Field
              name="name"
              as={TextField}
              label="Name"
              variant="outlined"
              error={touched.name && Boolean(errors.name)}
              helperText={<ErrorMessage name="name" />}
            />

            <Field
              name="number"
              as={TextField}
              label="Phone number"
              variant="outlined"
              error={touched.number && Boolean(errors.number)}
              helperText={<ErrorMessage name="number" />}
            />

            <Box textAlign="right">
              <Button type="submit" variant="contained" color="primary">
                Add Contact
              </Button>
            </Box>
          </Stack>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
