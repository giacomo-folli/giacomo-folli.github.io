<script lang="ts">
	import { goto } from '$app/navigation';
	import mock_cards from '$lib/mocks/cards';
	import type { Card } from '$lib/mocks/cards';

	// export let cards: Card[] | undefined = undefined;
</script>

<div class="flex flex-col w-full py-10 sm:pl-24 sm:pr-14 lg:pr-36">
	{#each mock_cards as card}
		<div class="mb-2 transition ease-in hover:scale-[1.01] duration-200 rounded-lg">
			<button
				on:click={() => goto(card.ref)}
				class="card top-0 h-full pt-4 px-4 rounded-lg text-left"
			>
				<span
					class="card-title text-left francisco text-2xl font-normal underline underline-offset-8"
				>
					<a href={card.ref}>
						{card.title}
					</a>
				</span>
				<div class="mt-2 mb-6">
					{card.intro}
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
</style>
