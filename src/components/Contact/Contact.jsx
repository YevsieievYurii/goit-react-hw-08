import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";
import styles from "./Contact.module.css";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <li className={styles.contactItem}>
      <span>
        {name}: {number}
      </span>
      <button onClick={handleDelete} className={styles.contactButton}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
