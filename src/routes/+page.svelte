<script lang="ts">
	import ActivityCard from '$lib/components/github/ActivityCard.svelte';
    import type { PageData } from './$types';
    export let data : PageData;
    let { user_repos} = data;
</script>

<div class="px-4 md:px-6 text-theme-body relative">
	<div
		class="z-20 py-4 md:mb-6 mb-4 sticky top-0 left-0 border px-4 md:px-6 border-theme-bg rounded-lg bg-gray-800 blur-bg"
	>
		<h2 class="text-2xl font-bold text-theme-light">Repositories</h2>
	</div>
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 pb-12">
		{#each user_repos as repo}
			<ActivityCard />
		{/each}
	</div>
</div>
