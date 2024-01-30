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
		{ title: 'Projects', ref: '/projects' },
		{ title: 'Now', ref: '/now' }
	];
</script>

<div class="mr-4 px-4 pt-2 pb-4 bg-slate-400 dark:bg-slate-950 dark:bg-opacity-25 bg-opacity-65 backdrop-blur-sm rounded-lg shadow-lg dark:shadow-lg dark:shadow-neutral-950 sidebar flex flex-col justify-between">

	<!-- articoli popolari -->
	<div class="flex flex-col">
		<h2 class="dark:text-slate-200 popular mt-2">Popular</h2>
		<div class="flex-grow">
			<div class="mt-2">
				{#each articoli as articolo, index}
					<div
						class="dark:text-slate-200 text-lg tracking-wide font-normal hover:underline decoration-2 leading-7 underline-offset-4"
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
	<div class="mt-2" >
		<ul class="w-full justify-between flex text-md text-slate-900 decoration-2 underline-offset-4">
			{#each links as link, index}
				<li class="hover:underline dark:text-slate-200">
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

	/* .sidebar {
		height: calc(100);
	} */

	@media (max-width: 640px) {
    .sidebar {
			width: 100%;
		}
	}
</style>
