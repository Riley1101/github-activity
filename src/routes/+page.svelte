<script lang="ts">
    import CommitCard from "$lib/components/github/CommitCard.svelte";
    import ActivityCard from "$lib/components/github/ActivityCard.svelte";
    import { getRepoCommits } from "$lib/functions/octokit";
    import type { CommitData } from "$lib/types/github/commits";
    import type { PageData } from "./$types";
    export let data: PageData;
    let commit_data: CommitData[] = [];
    let { user_repos } = data;
    async function loadCommits(name: string) {
        let commits = await getRepoCommits(name);

        console.log(commits)
        commit_data = commits;
    }
</script>

<div
    class="grid-cols-2 p-4 md:p-6 relative text-theme-body grid gap-4 col-start-2 row-start-2 w-full h-full"
>
    <div
        class="overflow-y-auto max-h-[850px] w-full flex flex-col gap-4 pb-12 scrollbar-hide"
    >
        {#each user_repos as repo}
            <ActivityCard {repo} load={loadCommits} />
        {/each}
    </div>
    <div
        class="p-4 w-full h-full flex flex-col gap-2 overflow-y-auto max-h-[850px] scrollbar-hide border border-gray-800 rounded-md"
    >
        {#each commit_data as commit}
            <CommitCard {commit} />
        {/each}
    </div>
</div>
