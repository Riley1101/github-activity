import {  getUserRepositories } from "$lib/functions/octokit";
export const load = async () => {
  let user_repos = await getUserRepositories("Riley1101");
  return {
      user_repos,
  };
};
