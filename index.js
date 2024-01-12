const express = require("express");
const app = express();
const port = 3000;

// /leetcode/profile/siddanth6365
app.use("/leetcode", require("./routes/index"));

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});