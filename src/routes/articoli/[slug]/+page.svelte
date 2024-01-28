<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

{#if !!data.article?.image}
	<div class="cover-image mt-[28px] shadow-xl rounded-md">
		<img class="object-cover w-full h-[100vh] top-[-200px]" src={data.article.image} alt="header" />
	</div>
{/if}

<article class="px-4 sm:px-8 md:px-40">
	<div class="flex justify-between pt-12 pb-4">
		<div class="font-bold text-md tracking-wider">POSTS</div>
		<div class=" p-1 bg-slate-950 rounded-md shadow-lg text-white text-sm tracking-wider hover:scale-[1.05]">{data.article?.aside}</div>
	</div>

	<div class="flex flex-col">
		<h1 class="text-[30px] sm:text-[60px] font-semibold">{data.article?.title}</h1>
		<p class="text-sm font-thin tracking-widest">{data.article?.date}</p>
	</div>

	<div class="mt-8 xs:mt-16 text-lg tracking-wide">
		<svelte:component this={data.article?.content} />
	</div>
</article>

<style>
	.cover-image {
		max-height: calc(100vh - 120px);
		width: auto;
		overflow: hidden;
	}
</style>
