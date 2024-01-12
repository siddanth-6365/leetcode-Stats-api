
const baseOptions = {
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
};

async function getRequest(url, options) {
  const response = await fetch(url, {
    method: "GET",
    ...baseOptions,
    ...options,
  });
  return await response.json();
}

async function postRequest(url, options) {
  const response = await fetch(url, {
    method: "POST",
    ...baseOptions,
    ...options,
  });
  return await response.json();
}

module.exports = {
  getRequest,
  postRequest,
};
