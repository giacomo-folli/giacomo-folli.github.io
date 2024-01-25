<script>
	import { goto } from '$app/navigation';
</script>

<header class="px-8 py-8 flex justify-between items-baseline">
	<div class="py-1">
		<h1>
			<button
				class="transition underline font-normal text-2xl underline-offset-8 hover:text-violet-400"
				on:click={() => goto('/')}
			>
				pacof.ol
			</button>
		</h1>
	</div>
	<div class="p-2 mr-8">
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

<div class="w-full h-96 bg-slate-600"></div>

<div class="px-32"><slot /></div>
