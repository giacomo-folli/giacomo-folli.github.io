<script lang="ts">
	import type { PageData } from "./$types";

	export let data: PageData;
</script>

<div class="cover-image">
	<img src={data.image} alt="" />
</div>

<article class="">
	<div class="mt-14 mb-4 font-bold text-md tracking-wider">POSTS</div>

	<h1 class="text-[60px] font-semibold">{data.title}</h1>
	<p class="text-sm font-thin tracking-widest">{data.date}</p>
	<div class="mt-16 max-w-[65vw] text-lg tracking-wide">
		<svelte:component this={data.content} />
	</div>
</article>

<style>
	.cover-image {
		max-height: calc(100vh - 113px);
		width: auto;

		overflow: hidden;
		/* object-fit: cover; */
	}
</style>
