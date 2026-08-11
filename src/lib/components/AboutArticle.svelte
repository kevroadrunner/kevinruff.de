<script lang="ts">
  import type { Snippet } from 'svelte';

  export type AboutArticleProps = {
    title: Snippet;
    children: Snippet;
  }

  const {title, children}: AboutArticleProps = $props();
</script>

<article>
  <h3 class="font-medium leading-tight text-3xl sm:text-4xl">
    {@render title()}
  </h3>
  <div class="mt-8 space-y-4 leading-relaxed text-muted-foreground">
    {@render children()}
  </div>
</article>
