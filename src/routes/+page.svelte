<script lang="ts">
  import { resolve } from '$app/paths';
  import User from '@iconify-svelte/mdi/smiley-cool-outline';
  import Code from '@iconify-svelte/mdi/code';

  const navigation = [
    { label: 'About', href: '/about', icon: User },
    { label: 'Code', href: '/code', icon: Code },
  ];
</script>

<svelte:head>
  <title>Kevin Ruff</title>
  <meta name="description" content="Personal website of Kevin Ruff" />
</svelte:head>

<div class="flex flex-1 items-center justify-center px-2 py-4 sm:px-8 sm:py-6">
  <nav class="flex min-w-[67vw] flex-col">
    {#each navigation as Link (Link.href)}
      <a
        href={resolve(Link.href)}
        class="flex border-b py-6 transition-colors last:border-0 hover:text-primary sm:py-8"
      >
        <div
          class="flex items-center gap-4 text-4xl font-medium tracking-tight sm:gap-6 sm:text-6xl lg:gap-8 lg:text-7xl"
        >
          <Link.icon class="size-10 sm:size-15 lg:size-18" />
          {Link.label}
        </div>
      </a>
    {/each}
  </nav>
</div>
