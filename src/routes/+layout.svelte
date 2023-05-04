<script>
	import Header from '$lib/components/common/Header.svelte';
	import Sidebar from '$lib/components/common/Sidebar.svelte';
	import '../styles/app.css';
</script>

<div
	class="w-full overflow-hidden h-screen gradient-theme font-mono flex flex-col md:grid grid-cols-[5em_auto] grid-rows-[6em_auto]"
>
	<Header />
	<Sidebar />
	<slot />
</div>
