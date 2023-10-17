// Nomenclatura de variáveis

const categoryList = [
  {
    title: "User",
    followers: 5,
  },
  {
    title: "Friendly",
    followers: 50,
  },
  {
    title: "Famous",
    followers: 500,
  },
  {
    title: "Super Star",
    followers: 1000,
  },
];

export default async function getGithubCategory(req, res) {
  const userName = String(req.query.username);

  if (!userName) {
    return res.status(400).json({
      message: `Please provide an username to search on the github API`,
    });
  }

  const gitHubUser = await fetch(`https://api.github.com/users/${userName}`);

  if (gitHubUser.status === 404) {
    return res.status(400).json({
      message: `User with username "${userName}" not found`,
    });
  }

  const gitHubUserData = await gitHubUser.json();

  const orderByCategory = categoryList.sort(
    (a, b) => b.followers - a.followers
  );

  const category = orderByCategory.find(
    (i) => gitHubUserData.followers > i.followers
  );

  const result = {
    userName,
    category: category.title,
  };

  return result;
}

getGithubCategory(
  {
    query: {
      username: "josepholiveira",
    },
  },
  {}
);
