const router = require("express").Router();
const { getLeetCodeStats } = require("../controllers/index");

router.get("/profile/:username", async (req, res) => {
  const { username } = req.query;
  try {
    const data = await getLeetCodeStats(username);
    res.json({
      data: data,
    });
  } catch (err) {
    console.log("error: ", err);
    res.send("error while fetching data in leetcode");
  }
});
