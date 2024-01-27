<script lang="ts">
	import { goto } from '$app/navigation';

	type Post = {
    id: number
    title?: string 
    date?: string
    image?: string
    content?: unknown
    intro?: string
  }

	export let posts: Post[] = [];
</script>

<div class="flex flex-col-reverse w-full py-10 sm:pl-12 md:pl-24 sm:pr-14 lg:pr-36">
	{#each posts as post}
		<div class="mb-2 transition ease-in hover:scale-[1.01] duration-200 rounded-lg">
			<button
				on:click={() => goto('articoli/' + post.id)}
				class="card top-0 h-full pt-4 px-4 rounded-lg text-left"
			>
				<span
					class="card-title text-left francisco text-2xl font-normal underline underline-offset-8"
				>
					<span>
						{post.title?.toLowerCase() || 'title unknown'}
					</span>
				</span>
				<div class="mt-2 mb-2 sm:mb-6">
					{post.intro?.toLowerCase() || 'intro unknown'}
				</div>
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
