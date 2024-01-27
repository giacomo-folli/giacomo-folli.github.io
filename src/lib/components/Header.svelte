<script lang="ts">
	let innerWidth: number;
</script>

<header>
	<div class="h-8 xs:h-16 flex gap-2 items-center">
		<div
			class="hover:scale-[1.05] object-fill h-8 w-8 xs:h-16 xs:w-16 rounded-full overflow-clip flex justify-center items-center mr-1"
		>
			<img class="transition hover:scale-[1.05]" src="images/profile.jpg" alt="paco" />
		</div>

		<div class="flex flex-col xs:pb-1 overflow-hidden">
			<div class="xs:pb-1">
				<h1 class="text-xs sm:text-sm tracking-wider">
					<b>Giacomo Folli<b /> &#183 </b>
					<span class="text-violet-400 font-semibold">now</span>
				</h1>
			</div>

			{#if innerWidth > 475}
				<div
					class="max-h-[30px] flex-grow flex items-baseline pb-1 px-1 sm:px-2 bg-[#E4E5EA] rounded-sm"
				>
					<span class="animate-typing overflow-hidden whitespace-nowrap text-sm xs:text-base sm:text-lg">
						I want to make <span class="underline text-violet-400 font-semibold">bread</span> and the eat it. <a href="mailto:giacomofolli01@gmail.com"><span class="font-medium">Join me!</span></a>
					</span>
				</div>
			{/if}
		</div>
	</div>
</header>

<svelte:window bind:innerWidth />
