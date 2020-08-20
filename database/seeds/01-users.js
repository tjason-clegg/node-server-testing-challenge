exports.seed = function (knex) {
  const users = [
    {
      username: "User1",
      password: "test",
    },
    {
      username: "User2",
      password: "test",
    },
    {
      username: "User3",
      password: "test",
    },
  ];

  return knex("users").insert(users);
};
