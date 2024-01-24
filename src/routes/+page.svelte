<script>
	import Header from '$lib/components/Header.svelte';
	import Main from '$lib/components/Main.svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';
</script>

<div class="px-8 py-7">
	<Header />
	<div class="flex flex-col sm:flex-row">
		<Sidebar />
		<Main />
	</div>
</div>
