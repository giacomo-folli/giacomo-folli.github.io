<script>
	import { goto } from '$app/navigation';
</script>

<header class="flex justify-between items-baseline">
	<div class="py-1">
		<h1>
			<button
				class="transition underline font-normal text-2xl underline-offset-4 hover:text-violet-400"
				on:click={() => goto('/')}
			>
				pacof.ol
			</button>
		</h1>
	</div>
	<div class="sm:p-2 sm:mr-8">
		<h1>
			<button
				class="transition underline text-xl underline-offset-4 hover:text-violet-400"
				on:click={() => goto('/about')}
			>
				about
			</button>
		</h1>
	</div>
</header>

<div class="sm:px-8 md:px-20 max-xs:py-8">
		<slot />
</div>