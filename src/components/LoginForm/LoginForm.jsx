import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { login } from "../../redux/auth/operations";

import { TextField, Button, Stack, Typography, Box } from "@mui/material";

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(6, "Minimum 6 characters").required("Required"),
});

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const resultAction = await dispatch(login(values));
      if (login.fulfilled.match(resultAction)) {
        resetForm();
        navigate("/contacts");
      } else {
        console.error("Login failed:", resultAction.payload);
      }
    } catch (err) {
      console.error("Unexpected error:", err);
    }
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form>
          <Stack spacing={3} maxWidth={400} mx="auto">
            <Typography variant="h5" textAlign="center">
              Log In
            </Typography>

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

            <Box textAlign="right">
              <Button variant="contained" color="primary" type="submit">
                Log In
              </Button>
            </Box>
          </Stack>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
