const express = require("express");
const app = express();
const port = 3000; // Or any port you prefer
const router = app.router();

// /leetcode/profile/siddanth6365
router.use("/leetcode", require("./routes/index"));

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
