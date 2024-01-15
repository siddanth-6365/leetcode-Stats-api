const {
  statsQuery,
  publicProfileQuery,
  languageStatsQuery,
  userContestRankingInfoQuery,
  userBadgesQuery,
  userProfileCalendarQuery,
  recentAcSubmissionsQuery,
  getStreakCounterQuery,
} = require("../queries/index");

async function handleRequest(username, query) {
  try {
    const response = await fetch("https://leetcode.com/graphql", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        variables: {
          username: username,
        },
      }),
    });
    console.log(response)
    const data = await response.json();
    return data.data;
  } catch (e) {
    console.error("error:", e);
  }
}

async function handleRequest2(username, query,limit) {
  try {
    const response = await fetch("https://leetcode.com/graphql", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        variables: {
          username: username,
          limit:limit
        },
      }),
    });
    console.log(response)
    const data = await response.json();
    return data.data;
  } catch (e) {
    console.error("error:", e);
  }
}

async function getLeetCodeStats(username) {
  return await handleRequest(username, statsQuery).then((data) => {
    return data.matchedUser;
  });
}

async function getPublicProfile(username) {
  return await handleRequest(username, publicProfileQuery).then((data) => {
    return data.matchedUser;
  });
}

async function getLanguageStats(username) {
  return await handleRequest(username, languageStatsQuery).then((data) => {
    return data.matchedUser;
  });
}

async function getContestRankingInfo(username) {
  return await handleRequest(username, userContestRankingInfoQuery).then(
    (data) => {
      return data;
    }
  );
}

async function getUserBadges(username) {
  return await handleRequest(username, userBadgesQuery).then((data) => {
    return data.matchedUser;
  });
}

async function getUserProfileCalendar(username) {
  return await handleRequest(username, userProfileCalendarQuery).then(
    (data) => {
      return data.matchedUser.userCalendar;
    }
  );
}

async function getRecentAcSubmissions(username,limit) {
  return await handleRequest2(username, recentAcSubmissionsQuery,limit).then(
    (data) => {
      return data;
    }
  );
}

async function getStreakCounter(username) {
  return await handleRequest(username, getStreakCounterQuery).then((data) => {
    return data;
  });
}

module.exports = {
  getLeetCodeStats,
  getPublicProfile,
  getLanguageStats,
  getContestRankingInfo,
  getUserBadges,
  getUserProfileCalendar,
  getRecentAcSubmissions,
  getStreakCounter,
};
