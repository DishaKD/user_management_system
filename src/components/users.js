import React from "react";
import UserForm from "./userForm";
import UsersTable from "./UsersTable";
import Box from "@mui/material/Paper";

const users = [
  { id: 0, name: "John" },
  {
    id: 1,
    name: "Max",
  },
];

const Users = () => {
  return (
    <Box
      sx={{ width: "calc(100% - 150px)", margin: "auto", marginTop: "100px" }}
    >
      <UserForm />
      <UsersTable rows={users} />
    </Box>
  );
};

export default Users;
