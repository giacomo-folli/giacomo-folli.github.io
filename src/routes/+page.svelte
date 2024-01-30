<script lang="ts">
	import Main from '$lib/components/Main.svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	type Post = {
		id: number;
		title: string;
		date: string;
		image?: string;
		content: unknown;
		intro: string;
	};

	let posts: Post[] = data.posts;

	let picked = [
		{ ref: 'articoli/8', name: 'partenza', emoji: '👨‍💻' },
		{ ref: 'articoli/2', name: 'fuoco, percorsi e leggerezza', emoji: '👨‍🍳' },
		{ ref: 'articoli/3', name: 'xp e propositi', emoji: '👨‍🍳' }
	];
</script>

<div class="flex flex-col-reverse sm:flex-row">
	<div class="basis-1/4">
		<Sidebar articoli={picked} />
	</div>
	<div class="basis-3/4 mb-4 xs:mt-0">
		<Main {posts} />
	</div>
</div>

<svelte:head>
	<title>Home | paco</title>
</svelte:head>
