<script lang="ts">
  import type { Snippet } from 'svelte';

  export type AboutArticleProps = {
    title: Snippet;
    children: Snippet;
  };

  const { title, children }: AboutArticleProps = $props();
</script>

<article>
  <h3 class="text-3xl leading-tight font-medium sm:text-4xl">
    {@render title()}
  </h3>
  <div class="mt-8 space-y-4 leading-relaxed text-muted-foreground">
    {@render children()}
  </div>
</article>
