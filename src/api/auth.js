async function authHandler(action, user) {
  const resp = await fetch(
    `https://academyofdigitalindustriesbackend.onrender.com/api/v1/auth/${action}`,
    {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    },
  );

  const result = await resp.json();
  if (resp.ok) {
    return result;
  }
  throw new Error(result.msg);
}

export default authHandler;
