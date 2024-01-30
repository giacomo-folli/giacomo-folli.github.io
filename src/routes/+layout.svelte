<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import { onMount } from 'svelte';
	import '../app.css';

</script>

<div class="bg-slate-200 dark:bg-slate-900 flex flex-col p-2 xs:p-4">
	<div class="basis-1/6">
		<Header />
	</div>
	<div class="basis-5/6 mt-4">
		<slot />
		<Footer />
	</div>
</div>
