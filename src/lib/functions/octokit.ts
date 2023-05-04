import type { PublicEventData } from "$lib/types/github";

const headers = {
  Accept: "application/vnd.github.v3+json",
  Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
  "X-GitHub-Api-Version": "2022-11-28",
};

async function getUserRepositories(
  username: string,
  per_page: number = 30,
  page: number = 1
): Promise<any> {
  return await fetch(
    `https://api.github.com/users/${username}/repos?per_page=${per_page}&page=${page}`,
    {
      headers,
    }
  ).then((response) => response.json());
}
async function getUserEvents(
  username: string,
  per_page: number = 30,
  page: number = 30
): Promise<PublicEventData> {
  return await fetch(`https://api.github.com/users/${username}/events/public?page=${page}`, {
    headers,
  }).then((response) => response.json());
}

export { getUserEvents, getUserRepositories };
