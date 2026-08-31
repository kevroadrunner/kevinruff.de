<script lang="ts">
  import type { RouteId } from '$app/types';
  import { page } from '$app/state';
  import { resolve } from '$app/paths';
  import { cn } from '$lib/utils';
  import Copyright from '@iconify-svelte/mdi/copyright';

  type NavItem = {
    name: string;
    href: RouteId;
  };

  const navItems: NavItem[] = [
    {
      name: 'Privacy',
      href: '/privacy',
    },
    {
      name: 'Legal',
      href: '/legal',
    },
  ];
</script>

<footer class="flex justify-center gap-2 bg-muted py-2 text-xs text-muted-foreground">
  <Copyright class="size-4" />
  <span>{new Date().getFullYear()}</span>
  <span>Kevin Ruff</span>
  {#each navItems as item (item.href)}
    <span>•</span>
    <a
      href={resolve(item.href)}
      class={cn('hover:underline', { underline: page.url.pathname === item.href })}>{item.name}</a
    >
  {/each}
</footer>
