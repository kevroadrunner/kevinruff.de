<script lang="ts">
  import type { Snippet } from 'svelte';
  import { cn } from '$lib/utils';

  export type AboutSectionProps = {
    label: string;
    title: Snippet;
    children?: Snippet;
  };

  const { label, title, children }: AboutSectionProps = $props();
</script>

<section class={cn('grid gap-12', { 'lg:grid-cols-[1fr_2fr]': children })}>
  <div>
    <p class="text-sm tracking-widest text-primary uppercase">{label}</p>
    <h2 class="mt-2 text-4xl tracking-tight sm:text-5xl">
      {@render title()}
    </h2>
  </div>
  {#if children}
    <div class="space-y-16">
      {@render children()}
    </div>
  {/if}
</section>
