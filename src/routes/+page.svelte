<script lang="ts">
	import Main from '$lib/components/Main.svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import type { Articolo } from '$lib/index';
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

	let picked: Articolo[] = [
		{ ref: 'articoli/1', name: 'primo post', emoji: '👨‍💻' },
		{ ref: 'articoli/2', name: 'fuoco, percorsi e leggerezza', emoji: '👨‍🍳' },
		{ ref: 'articoli/3', name: 'xp e propositi', emoji: '👨‍🍳' }
	];
</script>

<div class="flex flex-col sm:flex-row">
	<Sidebar articoli={picked} />
	<Main {posts} />
</div>

<svelte:head>
	<title>Home | paco</title>
</svelte:head>
