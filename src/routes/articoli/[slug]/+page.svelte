<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

</script>

	{#if !!data.article?.image}
		<div class="cover-image">
			<img class='w-full top-[-200px]' src={data.article.image} alt="header" />
		</div>
	{/if}

	<article>
		<div class="xs:mt-14 mb-4 font-bold text-md tracking-wider">POSTS</div>

		<h1 class="text-[30px] sm:text-[60px] font-semibold">{data.article?.title}</h1>
		<p class="text-sm font-thin tracking-widest">{data.article?.date}</p>
		<div class="max-xs:mt-8 mt-16 sm:max-w-[80vw] md:max-w-[65vw] text-lg tracking-wide">
			<svelte:component this={data.article?.content}/>
		</div>
	</article>

<style>
	.cover-image {
		max-height: calc(100vh - 113px);
		width: auto;

		overflow: hidden;
		/* object-fit: cover; */
	}

	li {
		color: red;
	}
</style>
