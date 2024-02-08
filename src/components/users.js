import React, { useEffect, useState } from "react";
import UserForm from "./userForm";
import UsersTable from "./UsersTable";
import Box from "@mui/material/Paper";
import Axios from "axios";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [selectedUser, setSelectedUser] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    Axios.get("http://localhost:3001/api/users")
      .then((response) => {
        setUsers(response?.data?.response || []);
      })
      .catch((error) => {
        console.error("Axios Error:", error);
      });
  };

  const addUser = (data) => {
    setSubmitted(true);

    const payload = {
      id: data.id,
      name: data.name,
    };
    Axios.post("http://localhost:3001/api/createuser", payload)
      .then((response) => {
        getUsers();
        setSubmitted(false);
        isEdit(false);
      })
      .catch((error) => {
        console.error("Axios Error:", error);
      });
  };

  const updateUser = (data) => {
    setSubmitted(true);

    const payload = {
      id: data.id,
      name: data.name,
    };

    Axios.post("http://localhost:3001/api/updateuser", payload)
      .then((response) => {
        getUsers();
        setSubmitted(false);
      })
      .catch((error) => {
        console.error("Axios Error:", error);
      });
  };

  return (
    <Box
      sx={{ width: "calc(100% - 150px)", margin: "auto", marginTop: "100px" }}
    >
      <UserForm
        addUser={addUser}
        updateUser={updateUser}
        submitted={submitted}
        data={selectedUser}
        isEdit={isEdit}
      />
      <UsersTable
        rows={users}
        selectedUser={(data) => {
          setSelectedUser(data);
          setIsEdit(true);
        }}
      />
    </Box>
  );
};

export default Users;
