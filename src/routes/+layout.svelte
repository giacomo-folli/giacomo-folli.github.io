<script>
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import '../app.css';
</script>

<div class="bg-slate-100 p-2 xs:p-4">
	<div class="pb-[60px]">
		<Header />
	</div>
	<slot />
	<Footer />
</div>