const { statsQuery } = require("../queries/index");
const { postRequest } = require("../httpRequests/index.js");

async function leetCodeDataRequest(username, query, errorTag) {
  //   try {
  //     const response = await fetch("https://leetcode.com/graphql", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         query,
  //         variables: {
  //           username,
  //         },
  //       }),
  //     });

  //     const data = await response.json();
  //     return data;
  //   } catch (e) {
  //     console.error(`${errorTag ?? "LC_REQ_ATTEMPT"}: ${e.message}`);
  //     console.error("Full Response:", e.response);
  //   }
  try {
    return await postRequest("https://leetcode.com/graphql", {
      body: JSON.stringify({
        query,
        variables: {
          username,
        },
      }),
    });
  } catch (e) {
    console.error(`${errorTag ?? "LC_REQ_ATTEMPT"}: ${e.message}`);
  }
}

async function getLeetCodeStats(username) {
  return await leetCodeDataRequest(
    username,
    statsQuery,
    "LC_STATS_REQ_ATTEMPT"
  );
}

export { getLeetCodeStats };
