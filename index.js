const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

// /queryName and need to pass in a username in req.body in most routes
app.use("/", require("./routes/index"));

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
