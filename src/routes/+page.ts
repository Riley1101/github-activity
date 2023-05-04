import {  getUserRepositories } from "$lib/functions/octokit";
export const load = async () => {
  let user_repos = await getUserRepositories("Riley1101");
  console.log(user_repos)
  return {
      user_repos,
  };
};
