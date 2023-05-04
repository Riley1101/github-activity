<script lang="ts">
	import Icon from '@iconify/svelte';
	let data = [1, 2, 3, 4];
</script>

<div class="bg-theme-dark rounded-lg">
	<div class="flex items-center gap-4 p-4 md:p-6 blur-bg rounded-t-lg">
		<div class="p-4 text-theme-muted max-w-max rounded-full bg-theme-dark">
			<Icon icon="iconoir:repository" class="w-6 h-6" />
		</div>
		<div class="flex flex-col">
			<a class="hover:text-theme-primary font-bold text-theme-light" href="/">
				Riley1101/astro-sanity-picture
			</a>
			<span class="text-theme-muted mt-1"> Last change 2 hours ago</span>
		</div>
	</div>
	<div class="p-4 md:p-6 flex flex-col">
		{#each data as _}
			<fieldset class="my-4 flex gap-4 border rounded-lg p-4 border-gray-900 cursor-pointer">
				<legend class=" border border-gray-900 gap-4 px-4 rounded-full p-2 flex items-center">
					<Icon
						icon="material-symbols:arrow-circle-up-outline-rounded"
						class="text-green-300 w-6 h-6"
					/>
					<span class="font-bold text-sm pr-2"> Push Event </span>
				</legend>
				<div class="flex flex-col gap-2">
					<span class="text-theme-light"> Jan 4, 2021, 10:00 PM </span>
					<p class="text-theme-muted leading-[1.5] text-sm">
						Make sure your commit pass checks Github action check will fail if your coding style is
						not correctly formatted with prettier will fail if you are.
					</p>
				</div>
			</fieldset>
		{/each}
	</div>
</div>
