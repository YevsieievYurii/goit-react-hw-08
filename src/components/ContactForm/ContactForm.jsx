import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import styles from "./ContactForm.module.css";
import { addContact } from "../../redux/contactsOps";

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
            resetForm();
          })
          .catch((error) => {
            console.error("Error adding contact: ", error);
          });
      }}
    >
      <Form className={styles.contactForm}>
        <div className={styles.fieldContainer}>
          <label htmlFor="name">Name</label>
          <Field
            className={styles.field}
            type="text"
            name="name"
            id="name"
            placeholder="Enter name"
          />
          <ErrorMessage name="name" component="div" className={styles.error} />
        </div>

        <div className={styles.fieldContainer}>
          <label htmlFor="number">Phone number</label>
          <Field
            className={styles.field}
            type="text"
            name="number"
            id="number"
            placeholder="Enter phone number"
          />
          <ErrorMessage
            name="number"
            component="div"
            className={styles.error}
          />
        </div>

        <button className={styles.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
