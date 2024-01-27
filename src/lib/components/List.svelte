<script lang="ts">
  type Item = {
    title: string,
    content: string
  }

	export let list: Item[] = [];
</script>

<ul>
	{#each list as item}
		<li>
      <h1>{item.title}</h1>
			<span> {item.content} </span>
		</li>
	{/each}
</ul>
