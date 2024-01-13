const router = require("express").Router();
const {
  getLeetCodeStats,
  getPublicProfile,
  getLanguageStats,
  getContestRankingInfo,
  getUserBadges,
  getUserProfileCalendar,
  getRecentAcSubmissions,
  getStreakCounter,
} = require("../controllers/index");

router.get("/", (req, res) => {
  res.send(
    "Welcome to the Leetcode RESTful API - ALL endpoints are GET requests and all endpoints require a username in the body of the request you can get data from the following endpoints: /profile, /publicProfile, /languageStats, /userContestRankingInfo, /userBadges, /userProfileCalendar, /streakCounter, /recentAcSubmissions and many more, please refer https://leetcode-restful-api.vercel.app/ApiDocs/setup for more info"
  );
});

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

router.get("/profile", async (req, res) => {
  const { username } = req.body;
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

router.get("/publicProfile", async (req, res) => {
  const { username } = req.body;

  try {
    const data = await getPublicProfile(username);
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

router.get("/languageStats", async (req, res) => {
  const { username } = req.body;
  try {
    const data = await getLanguageStats(username);
    //example response :
    /* {
      {
    "data": {
        "languageProblemCount": [
            {
                "languageName": "C++",
                "problemsSolved": 65
            },
            {
                "languageName": "Java",
                "problemsSolved": 1
            },
            {
                "languageName": "C",
                "problemsSolved": 1
            },
            {
                "languageName": "JavaScript",
                "problemsSolved": 1
            }
        ]
    }
}
     */
    res.json({
      data,
    });
  } catch (err) {
    console.log("error: ", err);
    res.send("error while fetching data in /publicProfile/:username");
  }
});

// we get userContestRanking and userContestRankingHistory
router.get("/userContestRankingInfo", async (req, res) => {
  const { username } = req.body;
  try {
    const data = await getContestRankingInfo(username);
    //example response :
    /* {
       "data": {
        "userContestRanking": null,
        "userContestRankingHistory": [
            {
                "attended": false,
                "trendDirection": "NONE",
                "problemsSolved": 0,
                "totalProblems": 3,
                "finishTimeInSeconds": 0,
                "rating": 1500,
                "ranking": 0,
                "contest": {
                    "title": "Weekly Contest 2",
                    "startTime": 1472347800
                }
            },
            {
                "attended": false,
                "trendDirection": "NONE",
                "problemsSolved": 0,
                "totalProblems": 4,
                "finishTimeInSeconds": 0,
                "rating": 1500,
                "ranking": 0,
                "contest": {
                    "title": "Weekly Contest 3",
                    "startTime": 1472990400
                }
            },
    
      } */
    res.json({
      data,
    });
  } catch (err) {
    console.log("error: ", err);
    res.send("error while fetching data in /userContestRankingInfo");
  }
});

router.get("/userBadges", async (req, res) => {
  const { username } = req.body;
  try {
    const data = await getUserBadges(username);
    // example response :
    /*{
    "data": {
        "badges": [],
        "upcomingBadges": [
            {
                "name": "Jan LeetCoding Challenge",
                "icon": "/static/images/badges/dcc-2024-1.png",
                "progress": 0
            }
        ]
    }
}
     */
    res.json({
      data,
    });
  } catch (err) {
    console.log("error: ", err);
    res.send("error while fetching data in /userContestRankingInfo");
  }
});

router.get("/userProfileCalendar", async (req, res) => {
  const { username } = req.body;
  try {
    const data = await getUserProfileCalendar(username);
    // example response :
    /*
    {
      "data": {
          "activeYears": [
              2022,
              2023,
              2024
          ],
          "streak": 12,
          "totalActiveDays": 47,
          "dccBadges": [],
          "submissionCalendar": "{\"1704067200\": 7, \"1704153600\": 4, \"1704240000\": 1, \"1704326400\": 6, \"1704412800\": 1, \"1704499200\": 2, \"1704585600\": 7, \"1704672000\": 2, \"1704758400\": 6, \"1704844800\": 3, \"1704931200\": 3, \"1705017600\": 4, \"1675900800\": 5, \"1676160000\": 2, \"1676246400\": 3, \"1677628800\": 1, \"1680048000\": 2, \"1691452800\": 4, \"1691625600\": 2, \"1691798400\": 2, \"1691884800\": 9, \"1691971200\": 9, \"1692057600\": 5, \"1692144000\": 6, \"1692230400\": 3, \"1692316800\": 2, \"1692403200\": 11, \"1692835200\": 9, \"1692921600\": 2, \"1693008000\": 2, \"1693353600\": 3, \"1693440000\": 6, \"1693612800\": 2, \"1693699200\": 5, \"1693785600\": 1, \"1694131200\": 5, \"1695945600\": 2, \"1696032000\": 1, \"1696204800\": 2, \"1696636800\": 2, \"1696723200\": 2, \"1696896000\": 5, \"1697328000\": 1, \"1697414400\": 1, \"1699488000\": 1, \"1701043200\": 3, \"1702684800\": 1}"
      }
  }
  */

    res.json({
      data,
    });
  } catch (err) {
    console.error("Error fetching user profile calendar:", err);
    res.status(500).json({
      error: "Error while fetching data for userProfileCalendar",
    });
  }
});

router.get("/streakCounter", async (req, res) => {
  const { username } = req.body;
  try {
    const data = await getStreakCounter(username);
    // example response :
    /* {
      "data": {
          "streakCounter": {
              "streakCount": 12,
              "daysSkipped": 0,
              "currentDayCompleted": false
          }
      }
    }*/
    res.json({
      data,
    });
  } catch (err) {
    console.error("Error fetching streak counter:", err);
    res.status(500).json({
      error: "Error while fetching data for streakCounter",
    });
  }
});

// NEED TO DO THIS
// router.get("/recentAcSubmissions", async (req, res) => {
//   const { username } = req.body;
//   try {
//     const data = await getRecentAcSubmissions(username);
//     res.json({
//       data,
//     });
//   } catch (err) {
//     console.error("Error fetching recent AC submissions:", err);
//     res.status(500).json({
//       error: "Error while fetching data for recentAcSubmissions",
//     });
//   }
// });

module.exports = router;
