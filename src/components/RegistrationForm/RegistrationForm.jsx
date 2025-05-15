import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { register } from "../../redux/auth/operations";

import {
  TextField,
  Button,
  Stack,
  Typography,
  Box,
  Alert,
} from "@mui/material";

const validationSchema = Yup.object({
  name: Yup.string().min(2, "Too short").required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(6, "Minimum 6 characters").required("Required"),
});

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const error = useSelector((state) => state.auth.error);

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const resultAction = await dispatch(register(values));
      if (register.fulfilled.match(resultAction)) {
        resetForm();
        navigate("/contacts");
      } else {
        console.error("Registration failed:", resultAction.payload);
      }
    } catch (err) {
      console.error("Unexpected error:", err);
    }
  };

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form>
          <Stack spacing={3} maxWidth={400} mx="auto">
            <Typography variant="h5" textAlign="center">
              Register
            </Typography>

            <Field
              name="name"
              as={TextField}
              label="Name"
              fullWidth
              error={touched.name && Boolean(errors.name)}
              helperText={<ErrorMessage name="name" />}
            />

            <Field
              name="email"
              as={TextField}
              label="Email"
              type="email"
              fullWidth
              error={touched.email && Boolean(errors.email)}
              helperText={<ErrorMessage name="email" />}
            />

            <Field
              name="password"
              as={TextField}
              label="Password"
              type="password"
              fullWidth
              error={touched.password && Boolean(errors.password)}
              helperText={<ErrorMessage name="password" />}
            />

            {error && (
              <Alert severity="error" variant="outlined">
                {error}
              </Alert>
            )}

            <Box textAlign="right">
              <Button variant="contained" color="primary" type="submit">
                Register
              </Button>
            </Box>
          </Stack>
        </Form>
      )}
    </Formik>
  );
};

export default RegistrationForm;
