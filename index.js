const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// /profile/siddanth6365
app.use("/", require("./routes/index"));

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
