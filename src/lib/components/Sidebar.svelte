<script lang="ts">
	type Articolo = {
		emoji?: string;
		name?: string;
		ref: string;
	};

	type Link = {
		title: string;
		ref: string;
	};

	export let articoli: Articolo[] = [];

	let links: Link[] = [
		{ title: 'About', ref: '/about' },
		{ title: 'Experiences', ref: '/expos' },
		{ title: 'Reading List', ref: '/readings' }
	];
</script>

<div class="w-[27vw] sm:w-[37vw] sidebar pr-1 pt-12 flex flex-col">

	<!-- articoli popolari -->
	<div class="flex flex-col mt-1">
		<h2 class="popular">Popular</h2>
		<div class="flex-grow">
			<div class="w-full py-5">
				{#each articoli as articolo, index}
					<div
						class="text-lg tracking-wide font-normal underline decoration-2 leading-7 underline-offset-4"
					>
						<a class="francisco" href={articolo.ref}>
							{articolo.emoji || '❤️‍🔥'}
							{articolo.name ||`--------------> Post ${index + 1}`}
						</a>
					</div>
				{/each}
			</div>
		</div>
	</div>

	<!-- link in fondo -->
	<div class="mt-4">
		<ul class=" text-lg underline decoration-2 underline-offset-4">
			{#each links as link, index}
				<li>
					<a href={link.ref}>{link.title}</a>
				</li>
			{/each}
		</ul>
	</div>
	
</div>

<style>
	.popular {
		font-size: 29px;
		font-style: normal;
		font-weight: 500;
		line-height: 30px;
	}

	@media (max-width: 640px) {
    .sidebar {
			width: 100%;
		}
	}
</style>
