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
    console.log(response);
    const data = await response.json();
    return data.data;
  } catch (e) {
    console.error("error:", e);
  }
}

async function handleRequest2(username, query, limit) {
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
          limit: limit,
        },
      }),
    });
    console.log(response);
    const data = await response.json();
    return data.data;
  } catch (e) {
    console.error("error:", e);
  }
}

module.exports = {
  handleRequest,
  handleRequest2,
};
