<script lang="ts">
	type Articolo = {
		emoji?: string;
		name: string;
		ref: string;
	};

	type Link = {
		title: string;
		ref: string;
	};

	// export let articoli: Articolo[] | undefined = undefined,
	// 	link: Link[] | undefined = undefined;

	let mock_link: Link[] = [
		{ title: 'About', ref: '/about' },
		{ title: 'Experiences', ref: '/expos' },
		{ title: 'Reading List', ref: '/readings' }
	];

	let mock_articoli: Articolo[] = [
		{ emoji: '👨‍💻', name: 'Everything I learned in 10 years of blogging', ref: 'articoli/1' },
		{ emoji: '👨‍🍳', name: 'From idea to 100k uniques per week in two months', ref: 'articoli/1' },
		{ emoji: '💰', name: 'Principles of Bitcoin Maximalism', ref: 'articoli/1' }
	];
</script>

<div class="w-[27vw] sm:w-[37vw] sidebar pr-1 pt-12 flex flex-col">

	<!-- articoli popolari -->
	<div class="flex flex-col mt-1">
		<h2 class="popular">Popular</h2>
		<div class="flex-grow">
			<div class="w-full py-5">
				{#each mock_articoli as mock}
					<div
						class="text-lg tracking-wide font-normal underline decoration-2 leading-7 underline-offset-4"
					>
						<a class="francisco" href={mock.ref}>
							{mock.emoji}
							{mock.name}
						</a>
					</div>
				{/each}
			</div>
		</div>
	</div>

	<!-- link in fondo -->
	<div class="mt-4">
		<ul class=" text-lg underline decoration-2 underline-offset-4">
			{#each mock_link as link}
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
