<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Main from '$lib/components/Main.svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import type { Articolo } from '$lib/index';
	import type { PageData } from './$types';

	export let data: PageData;

	let picked: Articolo[] = [
		{ ref: 'articoli/1', name: 'primo post', emoji: '👨‍💻' },
		{ ref: 'articoli/2', name: 'fuoco, percorsi e leggerezza', emoji: '👨‍🍳' },
	];
</script>

<div class="px-8 py-7">
	<Header />
	<div class="flex flex-col sm:flex-row">
		<Sidebar articoli={picked} />
		<Main />
	</div>
</div>
