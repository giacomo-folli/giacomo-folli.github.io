<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<div class="mx-auto max-w-4xl px-2 xs:px-8">
	<div class="flex justify-between items-center mt-4 xs:mt-8">
		<div class="font-bold text-md tracking-wider dark:text-slate-300">POSTS</div>
		<div
			class="p-1 bg-slate-950 dark:bg-slate-300 dark:text-black rounded-md shadow-lg text-white text-sm tracking-wider hover:scale-[1.05]"
		>
			{data.article?.aside}
		</div>
	</div>

	<div class="flex flex-col dark:text-slate-300">
		<h1 class="text-[30px] sm:text-[60px] font-semibold">{data.article?.title}</h1>
		<p class="text-sm font-thin tracking-widest">{data.article?.date}</p>
	</div>

	<article class="prose mx-auto max-w-4xl text-lg tracking-wide dark:text-slate-300">
		<svelte:component this={data.article?.content} class="w-full dark:text-slate-300" ></svelte:component>
	</article>
</div>