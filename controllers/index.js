const { statsQuery, publicProfileQuery } = require("../queries/index");
const { postRequest } = require("../httpRequests/index.js");

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

async function getLeetCodePublicProfile(username) {
  return await handleRequest(username, publicProfileQuery).then((data) => {
    return data.matchedUser;
  });
}

module.exports = { getLeetCodeStats, getLeetCodePublicProfile };
