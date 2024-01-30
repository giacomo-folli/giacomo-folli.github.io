<script lang="ts">
	import { page } from '$app/stores';

	let innerWidth: number;
	let theme: boolean;

	function toggleViewMode() {
		if (theme) {
			document.documentElement.classList.add('dark');
			theme = false;
		} else if (!theme) {
			document.documentElement.classList.remove('dark');
			theme = true;
		}
	}

	$: article = /articoli/.test($page.url.pathname);
</script>

<!-- bg-white bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg -->
<!-- bg-white bg-opacity-40 backdrop-blur-md rounded drop-shadow-lg -->
<header
	class="z-[99] w-auto p-2 rounded-lg bg-slate-400 dark:bg-slate-950 dark:bg-opacity-35 dark:shadow-lg dark:shadow-gray-950 bg-opacity-65 backdrop-blur-sm shadow"
	class:article
>
	<div class="h-8 xs:h-12 sm:h-16 flex gap-2 items-center">
		<div
			class="h-6 w-6 xs:h-8 xs:w-8 sm:h-12 sm:w-12 rounded-full overflow-clip flex justify-center items-center xs:m-1 sm:m-2"
		>
			<a href="/">
				<img
					class="object-scale-down bg-blend-difference transition hover:scale-[1.1]"
					src="../images/profile.jpg"
					alt="paco"
				/>
			</a>
		</div>

		<div class="flex flex-col xs:pb-1 overflow-hidden">
			<div class="xs:pb-1">
				<h1 class="dark:text-slate-200 text-xs sm:text-sm drop-shadow-md tracking-wider">
					<b>Giacomo Folli<b /> &#183 </b>
					<span class="text-amber-800 dark:text-sky-300 font-semibold">now</span>
				</h1>
			</div>

			{#if innerWidth > 475}
				<div
					class="max-h-[30px] flex-grow flex items-baseline pb-0.5 px-1 sm:px-2 mr-0.5 sm:mr-1.5 bg-white dark:bg-slate-900 bg-opacity-70 backdrop-blur rounded-md shadow"
				>
					<span
						class="dark:text-slate-200 animate-typing overflow-hidden whitespace-nowrap text-xs sm:text-base"
					>
						I want to make <span
							class="underline text-amber-800 dark:text-sky-300 drop-shadow-md font-semibold"
							>bread</span
						>
						and then eat it.
						<a href="mailto:giacomofolli01@gmail.com"
							><span class="font-medium drop-shadow-md">Join me!</span></a
						>
					</span>
				</div>
			{/if}
		</div>

		<div class="p-2 text-white bg-slate-400 dark:bg-slate-800 rounded shadow">
			<button class="dark:text-slate-200" on:click={toggleViewMode}> 
				{theme ? 'dark mode' : 'light mode'} 
			</button>
		</div>
	</div>
</header>

<svelte:window bind:innerWidth />

<style>
	.article {
		width: auto;
		right: 1rem;
		left: 1rem;
		--tw-backdrop-blur: blur(6px);
	}
</style>
