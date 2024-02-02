const app = require("./app");
const port = 3001;
const host = "localhost";

const server = app.listen(port, host, () => {
  console.log(`Server is up and running at port ${server.address().port}`);
});
