const BASE_URL = "https://edgemony-backend.herokuapp.com/";

const GET = async (type) => {
  const res = await fetch(`${BASE_URL}${type}`);
  return await res.json();
};

const POST = async (type, body) => {
  const res = await fetch(`${BASE_URL}${type}`, {
    method: "POST",
    body,
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log(res);
  return await res.json();
};

const DELETE = async (type, id) => {
  const res = await fetch(`${BASE_URL}${type}/${id}`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "DELETE",
  });
  return await res.json();
};

export { GET, POST, DELETE };
