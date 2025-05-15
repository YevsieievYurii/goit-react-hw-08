import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateContact } from "../../redux/contacts/operations";
import toast from "react-hot-toast";

import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  Stack,
} from "@mui/material";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
  minWidth: 300,
};

const EditContactModal = ({ contact, onClose }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState(contact.name);
  const [number, setNumber] = useState(contact.number);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(updateContact({ id: contact.id, updatedData: { name, number } }))
      .unwrap()
      .then(() => {
        toast.success("Contact updated");
        onClose();
      })
      .catch(() => {
        toast.error("Failed to update contact");
      });
  };

  return (
    <Modal open onClose={onClose}>
      <Box sx={modalStyle} component="form" onSubmit={handleSubmit}>
        <Typography variant="h6" mb={2}>
          Edit Contact
        </Typography>

        <Stack spacing={2}>
          <TextField
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <TextField
            label="Phone Number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            required
          />

          <Stack direction="row" spacing={2} justifyContent="flex-end">
            <Button variant="contained" color="primary" type="submit">
              Save
            </Button>
            <Button variant="outlined" color="secondary" onClick={onClose}>
              Cancel
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Modal>
  );
};

export default EditContactModal;
