const users = [
  {
    id: 0,
    name: "John",
  },
  {
    id: 1,
    name: "max",
  },
];

const getUsers = (cb) => {
  cb(users);
};

const getUserById = (id, cb) => {
  const user = users.find((user) => user.id == id);
  cb(user);
};

exports.getUsers = getUsers;
exports.getUserById = getUserById;
