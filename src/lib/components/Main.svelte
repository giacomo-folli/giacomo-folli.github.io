<script lang="ts">
	import { goto } from '$app/navigation';

	type Post = {
		id: number;
		title?: string;
		date?: string;
		image?: string;
		content?: unknown;
		intro?: string;
		span?: string;
	};

	export let posts: Post[] = [];
</script>

<!-- <div class="flex flex-col-reverse w-full py-10 sm:pl-12 md:pl-24 sm:pr-14 lg:pr-36"> -->
<div
	class="w-full grid grid-flow-dense grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2"
>
	{#each posts as post}
		<!-- <div class="rounded-lg shadow-xl min-h-[50px] border bg-red-500"></div> -->
		<div
			class={'card bg-slate-50 dark:bg-slate-800 mb-2 transition ease-in shadow hover:scale-[1.02] duration-150 rounded-lg ' +
				(!!post.span
					? post.span === 'large'
						? 'col-span-2 row-span-2 transition'
						: 'col-span-2'
					: '')}
		>
			<button
				on:click={() => goto('articoli/' + post.id)}
				class="flex flex-col justify-between top-0 h-full pt-4 px-4 rounded-lg text-left"
			>
				<div
					class="card-title dark:text-slate-200 text-left francisco text-2xl underline underline-offset-8"
				>
					{post.title?.toLowerCase() || 'title unknown'}
				</div>
				<div class="text-sm dark:text-slate-400 mt-2 mb-2 sm:mb-6">
					{post.intro?.toLowerCase() || 'intro unknown'}
				</div>
				<span class="dark:text-slate-200 hidden sm:block font-light tracking-wider text-xs pb-3">
					{post.date?.toLocaleLowerCase()}
				</span>
			</button>
		</div>
	{/each}
</div>

<style>
	.card:hover {
		cursor: pointer;
		background: rgba(255, 255, 255, 0.19);
		box-shadow: 0 4px 30px rgba(61, 0, 79, 0.1);
		-webkit-backdrop-filter: blur(9.9px);
	}

	@media (max-width: 400px) {
		.card {
			padding: 0 0.5rem;
			text-align: justify;
		}
	}
</style>
