import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import { useState } from "react";
import toast from "react-hot-toast";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

import EditContactModal from "../EditContactModal/EditContactModal";

import { ListItem, Typography, Stack, IconButton, Paper } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);

  const handleDelete = () => {
    confirmAlert({
      title: "Confirm deletion",
      message: `Are you sure you want to delete "${name}"?`,
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            dispatch(deleteContact(id));
            toast.success("Contact deleted");
          },
        },
        {
          label: "No",
          onClick: () => {},
        },
      ],
    });
  };

  return (
    <>
      <ListItem disablePadding>
        <Paper
          elevation={2}
          sx={{
            width: "100%",
            padding: 2,
            marginBottom: 1,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography>
            {name}: {number}
          </Typography>

          <Stack direction="row" spacing={1}>
            <IconButton
              aria-label="edit"
              color="primary"
              onClick={() => setIsEditing(true)}
            >
              <EditIcon />
            </IconButton>
            <IconButton
              aria-label="delete"
              color="error"
              onClick={handleDelete}
            >
              <DeleteIcon />
            </IconButton>
          </Stack>
        </Paper>
      </ListItem>

      {isEditing && (
        <EditContactModal
          contact={{ id, name, number }}
          onClose={() => setIsEditing(false)}
        />
      )}
    </>
  );
};

export default Contact;
