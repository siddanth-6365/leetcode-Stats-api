const router = require("express").Router();
const {
  getLeetCodeStats,
  getLeetCodePublicProfile,
} = require("../controllers/index");

router.get("/profile/:username", async (req, res) => {
  const { username } = req.params;
  try {
    const data = await getLeetCodeStats(username);
    // example response
    /* {
"data": {
"problemsSolvedBeatsStats": [
{
"difficulty": "Easy",
"percentage": 65.03
},
{
"difficulty": "Medium",
"percentage": 69.21
},
{
"difficulty": "Hard",
"percentage": null
}
],
"submitStatsGlobal": {
"acSubmissionNum": [
{
"difficulty": "All",
"count": 68
},
{
"difficulty": "Easy",
"count": 31
},
{
"difficulty": "Medium",
"count": 36
},
{
"difficulty": "Hard",
"count": 1
}
]
}
}
} */
    res.json({
      data,
    });
  } catch (err) {
    console.log("error: ", err);
    res.send("error while fetching data in /profile/:username");
  }
});

router.get("/publicProfile/:username", async (req, res) => {
  const { username } = req.params;
  try {
    const data = await getLeetCodePublicProfile(username);
    //example response :
    /* {
      "data": {
      "contestBadge": null,
      "username": "siddanth6365",
      "githubUrl": null,
      "twitterUrl": null,
      "linkedinUrl": null,
      "profile": {
      "ranking": 1051208,
      "userAvatar": "https://assets.leetcode.com/users/avatars/avatar_1666209203.png",
      "realName": "",
      "aboutMe": "",
      "school": null,
      "websites": [],
      "countryName": null,
      "company": null,
      "jobTitle": null,
      "skillTags": [],
      "postViewCount": 1,
      "postViewCountDiff": 1,
      "reputation": 0,
      "reputationDiff": 0,
      "solutionCount": 3,
      "solutionCountDiff": 1,
      "categoryDiscussCount": 0,
      "categoryDiscussCountDiff": 0
      }
      }
      } */
    res.json({
      data,
    });
  } catch (err) {
    console.log("error: ", err);
    res.send("error while fetching data in /publicProfile/:username");
  }
});

module.exports = router;
