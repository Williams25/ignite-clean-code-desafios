// Causa vs Efeito
import { useEffect, useState } from "react";

interface UserGithub {
  name: string;
  github: string;
}

function fetchGithubUser() {
  return {
    data: {
      user: {
        name: "Joseph Oliveira",
        github: "https://github.com/josepholiveira",
      },
    },
  };
}

export function UserProfile() {
  const [isLoadingUserName, setIsLoadingUserName] = useState(false);
  const [userGithub, setUserGithub] = useState<UserGithub>();

  useEffect(() => {
    function loadGithubUser() {
      setIsLoadingUserName(true);

      const githubUserResponse = fetchGithubUser();

      setUserGithub(githubUserResponse.data.user);

      setIsLoadingUserName(false);
    }

    loadGithubUser();
  });

  if (isLoadingUserName) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <img src={`${userGithub?.github}.png`} alt="" />
      <a href={userGithub?.github}>{userGithub?.name}</a>
    </div>
  );
}
