<script>
	import Icon from '@iconify/svelte';
	let tabs = [
		{ name: 'Activity', link: '/activity', icon: 'ic:sharp-format-list-bulleted', active: true },
		{ name: 'Chart', link: '/Chart', icon: 'material-symbols:bar-chart-rounded', active: false }
	];
</script>

<aside
	class="bg-theme-dark p-4 py-6 text-theme-body row-start-1 col-start-1 row-end-3 justify-between flex items-center flex-row md:flex-col"
>
	<div class="w-12 aspect-square rounded-full bg-theme-bg" />
	<ul class="my-auto flex flex-row md:flex-col gap-6">
		{#each tabs as item}
			<li
				class={'w-[48px] aspect-square hover:bg-theme-primary grid place-items-center rounded-full'}
			>
				<a
					href={item.link}
					class="cursor-pointer text-theme-muted hover:text-theme-light grid place-items-center w-full h-full"
				>
					<Icon icon={item.icon} class="w-7 h-7" />
				</a>
			</li>
		{/each}
	</ul>
</aside>
