<script>
	let navs = [
		{ name: 'Repositories', link: '/' },
		{ name: 'Dashboard', link: '/dashboard' }
	];
</script>

<header class="flex bg-theme-dark md:bg-transparent items-center col-start-2 col-end-3 p-6 gap-12">
	<div class=" bg-theme-dark px-2 py-3 rounded-full">
		<input
			type="text"
			class="text-theme-muted focus:border-none focus:outline-none border-transparent ring-transparent bg-transparent w-full px-4 h-full"
			placeholder="Search"
		/>
	</div>
	<ul class="hidden md:flex items-center gap-4 flex gap-6 text-theme-muted">
		{#each navs as item}
			<li
				class="cursor-pointer hover:text-theme-accent px-4 hover:text-white py-2 hover:bg-theme-primary rounded-full flex items-center"
			>
				<a href={item.href}>{item.name}</a>
			</li>
		{/each}
	</ul>
</header>
