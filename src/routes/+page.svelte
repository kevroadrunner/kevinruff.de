<script lang="ts">
  import { resolve } from '$app/paths';
  import type { RouteId } from '$app/types';
  import title from '$lib/title';
  import meta from '$lib/data/meta';
  import User from '@iconify-svelte/mdi/smiley-kiss-outline';
  import Code from '@iconify-svelte/mdi/code';
  import Console from '@iconify-svelte/mdi/console';
  import { cn } from '$lib/utils';

  type NavItem = {
    label: string;
    href: RouteId;
    icon: typeof User;
    disabled?: true;
  };

  const navItems: NavItem[] = [
    { label: 'About', href: '/about', icon: User },
    { label: 'Code', href: '/code', icon: Code, disabled: true },
    { label: 'Tools', href: '/tools', icon: Console },
  ];
</script>

<svelte:head>
  <title>{title()}</title>
  <meta name="description" content={`Personal website of ${meta.name}`} />
</svelte:head>

<section class="flex flex-1 items-center justify-center px-2 py-4 sm:px-8 sm:py-6">
  <nav class="flex min-w-[67vw] flex-col">
    {#each navItems as Link (Link.href)}
      {@const component = !Link.disabled ? 'a' : 'span'}
      <svelte:element
        this={component}
        href={!Link.disabled ? resolve(Link.href) : undefined}
        class={cn('flex border-b py-6 last:border-0 sm:py-8', {
          'transition-colors hover:text-primary': !Link.disabled,
          'text-muted': Link.disabled,
        })}
      >
        <div
          class="flex items-center gap-4 text-4xl font-medium tracking-tight sm:gap-6 sm:text-6xl lg:gap-8 lg:text-7xl"
        >
          <Link.icon class="size-10 sm:size-15 lg:size-18" />
          {Link.label}
        </div>
      </svelte:element>
    {/each}
  </nav>
</section>
