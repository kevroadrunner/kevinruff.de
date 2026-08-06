<script lang="ts">
	import './layout.css';

	const { children } = $props();
</script>

<main class="p-8">
  {@render children()}
</main>
